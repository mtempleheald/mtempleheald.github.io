---
title: Building a Serverless Application in Azure
---

Serverless computing is getting a lot of attention at the moment, touted as a great way to get to market quickly and popular with startups.  
My aim with this project is to add this tool to my arsenal by building a small but realistically complex proof of concept application:
* Backend built using Azure Functions written in C# and .NET Core
* Frontend hosted in Azure Static Content Hosting using AngularJS to connect to the backend service

Key principles:
* Separate application logic and integration details to facilite unit testing, portability and supportability.  
* Continuous deployment (CD) where every check-in to the master branch results in a production release.
* Open source, because why not?  Maybe it is interesting to someone, or perhaps I can learn something from others who see it.
* Try to be cloud agnostic, realistically this is only partially possible at present but let's see where we get up to.  
* Establish clear cost management, arguably the most important factor regarding practicality.  
* Minimum Viable Product (MVP) - A working application with no data persistence and limited security.

[Live application](https://mthcricket01ui.z6.web.core.windows.net/).  

## Application Logic

Cricket is a darts game played by 2 or more people.  
The idea is to tick off 3 of each of the numbers 15-20 plus the bull (centre bull counts double).  
Hitting a number which you've already completed but others haven't scores you those points.  
The winner is the first to complete this checklist and also have the best score overall.  

| Player   | Bull | 20  | 19  | 18  | 17  | 16  | 15  | Points | Ranking |
| -------- | ---- | --- | --- | --- | --- | --- | --- | ------ | ------- |
| Player 1 | XXX  | XXX | XXX | XXX | XXX | XXX | XXX | 0      | 1       |
| Player 2 | XXX  | XXX | XXX | XXX | XXX | XXX | XXX | 100    | 2       | 

There are additional extended rules too, notably:
* Cutthroat - scores go on everybody else, not you, the winner has the lowest score at the end
* Require 3 - If all 3 hits on a number aren't completed within a single visit they aren't saved for the next visit
* Unlimited vs round-based, usually 20 rounds

## Development process

1. Set up version control.  
   I've opted to use a GitHub-hosted [Git repository](https://github.com/mtempleheald/cricket-azure).
2. Set up a development environment.  
   I've chosen VS Code on Windows with extensions C#, .NET Core Test Explorer, Azure Functions.  
   I'm working alone, there's no need for collaboration tools for this project, documentation to be housed with the code.
3. Write the domain logic (C#, .NET Standard), ignorant of hosting considerations.  
   Testing (xUnit) with a pragmatic TDD approach, that is I'm not writing code just to pass tests, but I am writing tests first.  
4. Configure build pipeline, triggered from check-in to master.  
   Azure DevOps uses [azure-pipelines.yml](https://docs.microsoft.com/en-us/azure/devops/pipelines/yaml-schema?view=vsts&tabs=schema).  
   I'm a little uncomfortable now in terms of vendor lock-in, but at least I'm building CI in from the start, defined in the codebase, can switch later.  
5. Build the function wrappers (API) referencing the tested domain project (with tests) and add to build pipeline.  
   Now I'm learning.  It is immediately clear that this code can never be portable to AWS, GCP etc, wrappers would instead need to be built separately.
6. Configure release pipeline, triggered from successful build/test.  
   Azure DevOps this is currently UI-driven, YAML expected [2018 Q4](https://dev.azure.com/mseng/Azure%20DevOps%20Roadmap/_workitems/edit/1221170).  
   Again, this is worryingly Azure-specific but it has to be to some extent, we're now connecting to the platform itself.  
7. Build independent integration tests, this is on hold but will probably use Postman on the command line (Newman).  
8. Build the user interface and add to build/ release pipelines.  
   I stick with consistent naming convention for collation purposes but this is an AngularJS (for now) project, not .NET.
9. Manual live smoke testing.  

## Code structure and naming

Projects:
* Mth.Darts.Cricket
    * Domain service (business logic), C#, .NET Standard
    * Minimise dependencies to maximise portability, reduce build times and improve supportability.  
* Mth.Darts.Cricket.Tests
    * Business logic tests, C#, xUnit 
* Mth.Darts.Cricket.Api
    * Application service (Azure functions) referencing the domain service, C#, .NET Core
* Mth.Darts.Cricket.Api.Tests
    * Application service tests, C#, xUnit
* Mth.Darts.Cricket.Ui
    * User interface, static web pages using AngularJS to reference the Api

## Standards

* 1 file per class/ struct, even if only used in one place
* Files names in a collation-friendly way, nested items to be prefixed with the parent name
* Comments where they add value, must describe the why not the how (that should be obvious from the code)
* Hold scoreboard state in nested structs not classes because [has no identity, defined by its data](https://softwareengineering.stackexchange.com/questions/92339/when-do-you-use-a-struct-instead-of-a-class)
* JSON Serialisation using Newtonsoft.Json - [use attributes to expose private properties](https://stackoverflow.com/questions/32008869/json-net-serialize-specific-private-field)
* Adopt REST API standards, e.g. avoid verbs, pluralise collections always
* single .gitignore file at root as usually recommended
* .vscode settings checked-in could help future developers, no harm to the code to keep them

## API

The connection between front and backend is through a REST API (Azure Function App) with 4 key endpoints (Functions):
* create match
    * requires list of players and match settings
    * returns new match, initialised with zero scores/ hits
    * POST: /api/matches
* throw dart
    * requires current match state and details of the current throw
    * returns updated match
    * POST: /api/matches/123/
* undo throw
    * requires current match state (including history of throws)
    * returns updated match state
    * POST: /api/matches/123/undo
* start new game
    * requires current match state (with current game marked as complete)
    * returns updated match state
    * POST: /api/matches/123/newgame

These are all independently deterministic but obviously need to be combined in a logical order to manage the flow of a Cricket darts match.  
This activity will be left to the caller to manage for the MVP, with persistent this may change.  

## Azure Functions

A key component of this serverless design is the use of scalable functions, for which I've chosen Azure Functions.  
Azure deploys functions within an umbrella entity called a **Function App**.  
Function Apps are considered infrastructure and the recommended deployment approach is to use [Azure Resource Manager (ARM) templates](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-authoring-templates).  
Functions are considered code and the recommended deployment approach is to use [Zip Deployment](https://docs.microsoft.com/en-gb/azure/azure-functions/deployment-zip-push).  

## Create Function App manually

In the interest of understanding before coding I experimented by manually creating a Function App using QuickStart (Azure Portal).  
* resource group:             xmthcricket01
* function app:               xmthcricket01functionapp
* storage account (required): xmthcricket01storageaccount

I feel that standards are important from the start so I settled on naming convention %owner%%application%%version%%resource%.  
I avoided underscores, hyphens, mixed case because storage accounts don't allow them and consistency trumps appearance in my opinion.  
I then examined the storage account, since I didn't understand its purpose.

* Blob container *azure-webjobs-hosts* used for storing blob receipts, ensuring that each blob is only processed once.
* Blob container *azure-webjobs-secrets* used for storing keys/secrets required by the function app (I guess, can't find documentation).
* File share xmthcricket01 which guessing from the name represents the function app
    * .nuget        (capture NuGet dependencies)
    * .ssh          (for connectivity)
    * data          (ASP.NET compilation snapshots, function secrets + sample data)
    * LogFiles      (for if we opt to inject logging into our functions)
    * site
        * deployments   (deployment settings + history - will need to be tidied up at some point)
        * diagnostics   (diagnostics settings)
        * locks         (empty)
        * repository    (source code depending on deployment approach)
        * wwwroot       (The published function app itself)

Makes sense, everything needed to make the app run is stored in a storage account we own, though don't need to actively manage (serverless).  
I'm not going to worry too much about the details except that:  
* For automation purposes we need to replace the wwwroot directory contents
* Deployment history could build up and storage accounts are paid for by size, so cleanup may be required  


## Create Function App with code

The most familiar way for me to create a C# HTTP trigger based function is the [dotnet CLI](https://github.com/dotnet/cli):  
``` dotnet new func ``` to create the project from within a target folder  
``` dotnet new http ``` to create a new http trigger function within a function app project  
Producing the structure seen in the [Azure functions C# Developer reference](https://docs.microsoft.com/en-us/azure/azure-functions/functions-dotnet-class-library).  

It is also possible using the [azure-functions-core-tools](https://github.com/Azure/azure-functions-core-tools):  
``` func init ``` to create a function app, selecting a runtime (dotnet, selected from list)  
``` func new ``` to create a function, C# httpTrigger  

The end result is very similar:  
* .csproj with netcoreapp2.1 set as the target framework  
* host.json with version set to "2.0"  
* local.settings.json  

```
{
    "IsEncrypted": false,
    "Values": {
        "AzureWebJobsStorage": "",
        "FUNCTIONS_WORKER_RUNTIME": "dotnet"
    }
}
```

* A hello world sample function; Company.Function.http  

```
...
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
namespace Company.Function
{
    public static class http
    {
        [FunctionName("http")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            ...
            string name = req.Query["name"];
            ...            
            return name != null
                ? (ActionResult)new OkObjectResult($"Hello, {name}")
                : new BadRequestObjectResult("Please pass a name on the query string or in the request body");
        }
    }
}
```
Simple enough, an asynchronous JSON REST endpoint which accepts GET and POST methods, expects a / route, does some basic validation and returns a response.  
This is .NET Core so no surprises that logging is available by dependency injection.  
This example has everything I need for now so no need to dwell on the details.  
Time to build my own...  

[Mth.Darts.Cricket.Api.StartMatch](https://github.com/mtempleheald/cricket-azure/blob/master/Mth.Darts.Cricket.Api/StartMatch.cs) should:
* accept POST only
* expect a route of /api/matches
* expect parameters of scoring_mode, max_rounds and a list of \[player\[]], or a single json object containing all three
* reference the domain service, specifically the Match constructor to get back a Match object, tested elsewhere
* return a json object representing the Cricket match if all went well, an error message otherwise


## Testing Azure functions

There are several different facets to testing here:
1. Logic - nothing to do with serverless design but the most important part in my opinion
2. Plumbing - does the function work as expected when called directly using an HttpRequest object?
3. Routing - does an HTTP request get picked up by the expected function?
4. Integration - When deployed does everything just work?

### Testing logic

Nothing new here, create a test project using ``` dotnet new xunit ```  
I did make things awkward for myself by restricting access on as much as possible so had to tweak the project to [make internals visible to the test project](https://stackoverflow.com/questions/15440935/how-to-test-internal-class-library#answer-15440997).  

### Testing function plumbing

No need to repeat anything here, I followed the guide to [testing azure functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-test-a-function), extended it for multiple parameters and a different return value and used a JSON test file.  

### Testing function routing

In REST terms a match can be considered a *resource*, a member of the matches *collection*.  
To create a match we need to pass parameters to the uri, repeating the player parameter as many times as required.  
For a 2 player match between Van Gerwen and Taylor we need to  
```POST /api/v1/matches/?scoring_mode=Standard&max_rounds=0&player[]=Van%20Gerwen&player[]=Taylor```  
Initially there's no persistent data store, so this match isn't retrievable, but if it were it would be available at, e.g. /api/v1/matches/123.  
Note that I converted player to player\[] in the url, because this is what AngularJS and some backend frameworks consider correct, though I can't find a definitive answer on the matter anywhere.  

To run Azure Functions locally from within the function app project use the Azure Functions Core Tools: ``` func start ```  
I've opted to manually test routing using Postman for the MVP but intend to automate this eventually, using one of:
* Postman CLI tool [Newman](https://learning.getpostman.com/docs/postman/collection_runs/command_line_integration_with_newman/)
* .Net Core [Integration tests](https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-2.2)


## Continuous Integration, Delivery & Deployment

In modern software development there is no excuse to not have some form of continuous integration (CI).  
Build and Test automation is usually easy and cheap to setup and pays for itself even in the short term.  
It is also entirely within the control of the software development team.  
How you implement this is dependent on the team and project requirements, for this project I'm just building on the master branch.  

Continuous delivery is just as valuable, all projects should strive for some degree of this, but it is significantly harder to implement.  
Release automation complexity depends on the technology stack and collaboration with TechOps but the benefits far outweigh the costs.

Continuous deployment takes this a step further, automating releases without human intervention, subject to quality gates from automated testing.  
This is a cultural thing, not all organisations or teams can work in this way for a myriad of reasons.  
I can though, for this project, so that's the plan, straight to production after every build which passes tests.  


## Build pipeline

Two mandatory requirements here:
* Build automatically triggered every time the code is changed.
* Build steps live with the code because who better to know how to build an application than the application developer?
And one optional requirement:
* Build should be target-agnostic for portability, to avoid vendor lock-in

Focussing just on the mandatory requirements for the MVP I followed Microsoft's advice on [Linking Azure DevOps to GitHub](https://docs.microsoft.com/en-us/azure/devops/pipelines/repos/github?view=vsts).  
I chose the **GitHub App** option because I didn't want it linked directly to my credentials.
In GitHub **Azure Pipelines** now shows up under *Settings > Integration & services > Installed GitHub Apps* where I can configure it to restrict access to specific repositories or remove it altogether.  
In Azure DevOps **mtempleheald** now shows up under *Project Settings > Pipelines > Service Connections*, I can disconnect it here but it tells me that any configuration must be done on GitHub.  

During this process a default [azure-pipelines.yml](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/tasks) file was presented to me with the option to commit it, which I accepted.  From here it didn't take long to configure a working build by chaining dotnet CLI commands together.  
It is very easy to break a build so having this set up early on is really important for stability, I'd say that this is step 1 on the way to true DevOps, where the developers take responsibility for handover of artifacts.  
Some nice visual feedback and convenient logging, plus a status badge is available for the project 
[![Build Status](https://dev.azure.com/mtempleheald/cricket-azure/_apis/build/status/mtempleheald.cricket-azure?branchName=master)](https://dev.azure.com/mtempleheald/cricket-azure/_build/latest?definitionId=1?branchName=master)

### Build steps

Build steps used:
* script: ``` dotnet --version ``` - check that we know which version of .NET lives on the Microsoft-managed build agent
* script: ``` dotnet build '<project>' --configuration $(buildConfiguration) ``` - build a named project
* task: ``` DotNetCoreCLI@2 ``` - run tests
* script: ``` dotnet publish '<function_app_project>' --output '<target_dir>' ``` - prepare function app artifacts for publication
* task: ``` CopyFiles@2 ``` - copy specified files to artifact drop location
* task: ``` PublishBuildArtifacts@1 ``` - publish the artifacts ready for the release pipeline

output of dotnet publish:
* FunctionApp
    * bin/
    * StartMatch
        * function.json
    * host.json
    * *.deps.json
which seems to match the [continuous deployment requirements](https://docs.microsoft.com/en-gb/azure/azure-functions/functions-continuous-deployment#continuous-deployment-requirements).  
What this doesn't make clear however is that the top level folder is not expected within the zip file.  
This is important as it means that the build pipeline does not need to provide the name for the deployed artifact and facilitates a multi-environment deployment from a single build artifact (assuming everything else is parameterised appropriately).  


## Azure DevOps Artifacts

It is good practice to keep build and release steps separate [The 12 Factor App](https://12factor.net/build-release-run).  
This makes sense, there may be some overlap but build steps are developer controlled and release steps are about environment config and is more of a TechOps role unless you truly embrace DevOps.  

In the terminology of Azure DevOps I need to publish an **artifact** on the **build pipeline** to make it available to the **release pipeline**.  
This is simple, but very easy to make mistakes, so it is useful to be able to debug pipeline execution.  

It helps to understand how files are stored on the build/release agents, [pre-defined variables](https://docs.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=vsts):  

| Path structure    | System.                                    | Build.                                    | Agent.                   |
| ----------------- | ------------------------------------------ | ----------------------------------------- | ------------------------ |
| /agent/           |                                            |                                           | HomeDirectory            |
| /agent/work/      | WorkFolder                                 |                                           | RootDirectory WorkFolder |
| /agent/work/1     |                                            |                                           | BuildDirectory           |
| /agent/work/1/s   | DefaultWorkingDirectory                    | SourcesDirectory                          |                          |
| /agent/work/1/b   |                                            | BinariesDirectory                         |                          |
| /agent/work/1/a   |                                            | ArtifactStagingDirectory StagingDirectory |                          |
| /agent/work/r1/a  | ArtifactsDirectory DefaultWorkingDirectory |                                           | ReleaseDirectory         |

Most of these steps provide useful information but if it isn't enough we can add extra debug information:  
* To debug build steps add ``` system.debug: true ``` to azure-pipelines.yml.  
* To debug release steps add *system.debug* to the Variables tab on the UI, with a value of true.  

A notable issue I had was with the release pipeline being unable to find the published function app artifact, despite triple-checking paths and successful step execution:
* Zip up function app - *Successfully created archive: /home/vsts/work/1/a/11.zip*
* Publish Build Artifacts - no listed output (suspicious but successful)

It turns out that the publish step was failing silently because I'd put an incorrect parameter in.  I only figured this out by looking at the [source code](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/Tasks/PublishBuildArtifactsV1/publishbuildartifacts.ts) of the suspicious step.  There are 2 allowed values for artifactType; 'Container' and 'FilePath'.  Turns out I'd been passing the description of container instead ('Azure Pipelines/TFS') - oops!

* Publish Build Artifacts - *Upload '/home/vsts/work/1/a' to file container: '#/2495698/drop'* - success!


## Release pipeline

Azure DevOps release pipelines currently work differently from build pipelines, although release pipeline Configuration as code (YAML) is [planned for 2018 Q4](https://dev.azure.com/mseng/Azure%20DevOps%20Roadmap/_workitems/edit/1221170).  
That being said, tasks are common but categorised (build, utility, test, package, deploy, tool) - [code](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks).  
So there is nothing stopping me from adding release steps to the azure-pipelines.yml file above, but I'm going to do it properly instead, keeping build and release separate by using the published artifacts.  

### Connecting the release pipeline to Azure

The Azure Portal function app page has a *Deployment Center* tab, where you can configure a Git repository connection.  
This uses [Kudo](https://github.com/projectkudu/kudu) which by default expects either 1 solution or 1 project to deploy, but can be [customised](https://github.com/projectkudu/kudu/wiki/Customizing-deployments).   
It can also be customised in the Azure portal, by adding the target project (*PROJECT = function-app/function-app.csproj*)  
to application settings *Azure > Overview > Application Settings > Application Settings*
I'm uncomfortable with this approach for several reasons:
* The GitHub connection is tied directly to my account
* This configuration is hidden away and easily forgotten, though I could address this using the custom .deployment file in the code.  
* What about the other elements of the release?  Storage, static content, I want consistency in my releases.

The better approach is to manage releases within an independent release pipeline (Azure DevOps), even when aiming for continuous deployment.  
This requires setting up an Azure Resource Manager (ARM) connection:  
*Azure DevOps > Project Settings > Pipelines > Service Connections > New Service Connection > Azure Resource Manager*  
For which I had to [create a service principal](https://docs.microsoft.com/en-gb/azure/active-directory/develop/howto-create-service-principal-portal):  
1. Azure Portal > App Registrations > Create > Web App (url not important yet)
2. Azure Portal > Subscriptions > <MySubscription> > IAM > Add role assignment > Contributor + App name

I could now access the parameters required to add the connection:  
* Tenant-Id:  
  Azure Portal > Azure Active Directory > Properties > Directory ID
* Application ID:  
  Azure Portal > App Registrations > <My App> > Application ID
* Authentication Key:  
  Azure Portal > App Registrations > <My App> > Settings > Keys

Hereafter release pipeline tasks simply need to refer to this connection and it just works.

### Release pipeline steps 

* [ARM deployment](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/Tasks/AzureResourceGroupDeploymentV2/README.md) - all infrastructure elements within the resource group (I'm only using one)
* [Azure App Service Deploy (Preview)](https://aka.ms/azurermwebdeployreadme) - azure function deployment to function app
* [Azure File Copy (Preview)](https://aka.ms/azurefilecopyreadme) - static website copied to $web blob container
* [Azure CLI](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/Tasks/AzureCLIV1/Readme.md) - using the az command line tools to turn the blob container into a static website:  
```
az extension add --name storage-preview --debug
az storage blob service-properties update --account-name "$(resourceGroup)ui" --static-website --404-document 404.html --index-document index.html --debug
```

## ARM templates for continuous deployment

I have come across ARM templates before and know that they're the recommended approach for deploying Azure artifacts in a consistent fashion, but I've never built any from scratch, so it is time to investigate.  My aim here is to develop a pattern which I can use again for another serverless app in Azure, without having to think about this stuff again.  This has been easily the most time-consuming part of this project.  

I want a single ARM template containing all aspects of the serverless application MVP:
* Storage account for static file hosting
* Storage account for function app support
* Function app (It is possible but makes little sense to [deploy functions themselves using ARM](https://blog.kloud.com.au/2018/08/16/deploying-azure-functions-with-arm-templates/))

ARM [template structure](https://docs.microsoft.com/en-gb/azure/azure-resource-manager/resource-group-authoring-templates):
* parameters    - passed on execution, e.g. environment/ version/ build number
* variables     - build upon parameters and group names together for consistency
* functions     - user-defined functions
* resources     - deploy stuff - [intro](https://docs.microsoft.com/en-gb/azure/azure-resource-manager/resource-manager-templates-resources)
* outputs       - capture values from during execution in case further processing required, e.g. url available

There are some useful [quickStart templates](https://github.com/Azure/azure-quickstart-templates) to learn from, specifically [101-storage-account-create](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/101-storage-account-create/azuredeploy.json) and [101-function-app-create-dynamic](https://github.com/Azure/azure-quickstart-templates/blob/master/101-function-app-create-dynamic/azuredeploy.json).  
It can also be useful to create stuff manually once and view the generated script:  
Azure Portal > Resource Groups > %Resource Group% > Automation Script  

I also found it useful to briefly look at the REST APIs which ARM deployment use under the hood:  
* [storage account REST API](https://docs.microsoft.com/en-us/rest/api/storagerp/storageaccounts)  
* [webapps REST API](https://docs.microsoft.com/en-us/rest/api/appservice/webapps)  

### Preparing the ARM template

Starting with naming I want the following visible in the Azure Portal:
* mthcricket01 (resource group)
* mthcricket01api (function app)
* mthcricket01apistorage (storage account required by function app)
* mthcricket01ui (storage account for static content)

This is easily achieved using variables:  
```JSON
"variables": {
        "functionApp": "[concat(resourceGroup().name, 'api')]",
        "functionAppStorage": "[concat(resourceGroup().name, 'apistorage')]",
        "uiStorage": "[concat(resourceGroup().name, 'ui')]"
    }
```

The real details are in the resources section and this can get quite complicated; you have to learn Azure terminology, relationships and specify API versions.  
I've found the most useful information in the [Azure template reference](https://docs.microsoft.com/en-us/azure/templates) where apiVersion options are clear.  
This is also available through Azure PowerShell:

```
(Get-AzResourceProvider -ProviderNamespace Microsoft.Storage).ResourceTypes | Where {$_.ResourceTypeName -eq 'storageAccounts'} | select -ExpandProperty ApiVersions
2018-07-01
2018-03-01-preview
...
2015-05-01-preview
(Get-AzResourceProvider -ProviderNamespace Microsoft.Web).ResourceTypes | Where {$_.ResourceTypeName -eq 'sites'} | select -ExpandProperty ApiVersions
(Get-AzResourceProvider -ProviderNamespace Microsoft.Web).ResourceTypes | Where {$_.ResourceTypeName -eq 'serverfarms'} | select -ExpandProperty ApiVersions
(Get-AzResourceProvider -ProviderNamespace Microsoft.Web).ResourceTypes | Where {$_.ResourceTypeName -eq 'functions'} | select -ExpandProperty ApiVersions
2018-11-01
2018-02-01
...
2014-04-01
```

It took me a long time to get to grips with apiVersion, in the end I realised that it was the tooling in VS Code that was causing the confusion with unnecessary warnings, I learnt to instead just perform a test run in PowerShell (requires the [Azure PowerShell module](https://docs.microsoft.com/en-gb/powershell/azure/install-az-ps?view=azps-1.0.0&viewFallbackFrom=azurermps-4.0.0)):  

```
Connect-AzAccount
Select-AzSubscription -SubscriptionName 'Free Trial'
New-AzResourceGroup -Name $resourceGroupName -Location 'North Europe'
Test-AzResourceGroupDeployment -ResourceGroupName $resourceGroupName -TemplateFile .\azuredeploy.json -Debug
```

It is possible to have the template refer to the latest version, using ``` [providers('<provider>','<type>').apiVersions[0]] ``` but this opens you up to breaking changes, so I'm avoiding that route.  I do think that it is important to be on the latest version you can be, this is a process thing, add the upgrade step into any future template update tasks.  
Once I was comfortable that I knew which versions I was aiming for I was able to get it done:  
* [Function App](https://docs.microsoft.com/en-us/azure/templates/microsoft.web/2018-02-01/sites)
* [Hosting Plan for function app](https://docs.microsoft.com/en-us/azure/templates/microsoft.web/2018-02-01/serverfarms)
* [Storage Account](https://docs.microsoft.com/en-us/azure/templates/microsoft.storage/2018-07-01/storageaccounts)

Another awkward bit is configuring the [App Settings for Azure Functions](https://docs.microsoft.com/en-gb/azure/azure-functions/functions-app-settings).  
properties > siteConfig > appSettings:
* AzureWebJobsStorage == *(DefaultEndpointsProtocol=https;AccountName=[name];AccountKey=[key])*
* AzureWebJobsDashboard == *(DefaultEndpointsProtocol=https;AccountName=[name];AccountKey=[key])*
* WEBSITE_CONTENTAZUREFILECONNECTIONSTRING == *(DefaultEndpointsProtocol=https;AccountName=[name];AccountKey=[key])*
* WEBSITE_CONTENTSHARE == *mthcricket01api*
* AzureWebJobsDisableHomepage == *true*
* FUNCTIONS_EXTENSION_VERSION == *~2*
* FUNCTIONS_WORKER_RUNTIME == *dotnet*
* AzureWebJobsDotNetReleaseCompilation == *false* (for debugging)
* APPINSIGHTS_INSTRUMENTATIONKEY == *plan* 

I'm still working through the nuances of functionapp deployment, I'm getting internal server errors from Azure on the 2nd run through, having deployed fine the 1st run through.  The difficulty is primarily because this stuff is quite new and in flux, there are changes between [Runtime version 1 vs 2](https://docs.microsoft.com/en-us/azure/azure-functions/functions-versions) plus I've chosen some awkward options like Linux hosting.  

I opted part way through to adopt [Template Linking](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-linked-templates).  
This was simply because the template was already becoming uncomfortably long though I'm not sure this helped for my small project.  
This didn't add too much complexity either, mostly moving the *DependsOn*  settings from the resource itself, to the deployment of the resource and providing template outputs.  

I prefer this in principle because it is more modular.  For example the functionapp depends on the storage account connection string.  To get this you need to access the storage account API to get the key:  
``` "value": "[listKeys(variables('StorageAccountName'), providers('Microsoft.Storage', 'storageAccounts').apiVersions[0])]" ```  
The equivalent in PowerShell: ``` (Get-AzStorageAccountKey -ResourceGroupName <resource-group> -Name <storage-account>).key1 ```  
It feels right to me that this lives within the storage account creation template, not the function app, otherwise both templates need to manage apiVersions for the storage account API (although this example just uses latest).


## Costs

This was never meant to be a serious production application, I'm certainly not expecting it to scale to fully utilise serverless scaling capabilities.  
Therefore I was expecting it to be free or very close to.  
What I'm actually seeing is that in the couple of weeks that I've had something running I've accrued £0.09 on API storage and nearly £5 on an App Service Plan.  

My intention was to use the [consumption plan](https://azure.microsoft.com/en-gb/pricing/details/app-service/plans/) but I think that something has gone wrong in my ARM deployment.  My priority is now therefore to address this, since my free month's trial is about to expire.  This is directly related to what I already knew was my weakpoint; understanding Azure internal workings.


## Summary

This project has been fairly successful so far, zero to [Live application](https://mthcricket01uistorage.z6.web.core.windows.net/) in under a month.  
I've also quite enjoyed bringing together lots of different elements I've used to varying degrees to build something real.

It isn't perfect of course, there are some known issues:
* ~~Scores continue adding on even if all ticked off - API logic wrong~~ Fixed
* Clicking too quickly misrepresents the status as evidenced by the history of throws - 2 choices (possibly both):
    * throttling within Angular controller, checksum-esque
    * incremement version within the API, check that requests are received in order, depends upon data persistence but may be better solution
* Skip function totally broken (symptom of the above)
* Initial load is extremely slow (several seconds) and it appears to be broken.  Possibly send a dummy request in the background to hide this from the user.
* Buttons jump about a bit due to flexbox/ grid layout, would be nice to fix this
* Plan costing money, something isn't right about the functionapp deployment yet, consumption plan should be free (at low volumes).

There's also outstanding work to do:  
* Deployments building up in storage, no need to keep history of deployments so need to add clear step to release pipeline (start).
* Truly understand functionapp ARM deployment to get a handle on costs.