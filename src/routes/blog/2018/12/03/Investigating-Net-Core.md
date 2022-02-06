---
title: Investigation into .NET Core
---

I've been working with .NET Framework for the last few years, mostly BizTalk but also some MVC and microservices.  
With the latest releases Microsoft indicate that [.NET Framework will be around for a while but if you want newest features go for .NET Core](https://blogs.msdn.microsoft.com/dotnet/2018/10/04/update-on-net-core-3-0-and-net-framework-4-8/).  
Microsoft themselves are using .NET Core rather than .NET Framework for Azure functions and more, there's a very clear direction when considering [microservices, containers or performance](https://docs.microsoft.com/en-us/dotnet/standard/choosing-core-framework-server?view=aspnetcore-2.1).  
With .NET Core 2.2 and the preview of .NET Core 3 publicly available now seems like a good time to give .NET Core a try.  

## Installation and Configuration

I can see why developers like IDEs if they're trying to optimise their performance in a language which the IDE supports, however I've never found the writing of code to be the bottleneck and find that tool wizardry can often be detrimental to understanding.  As a result I like to avoid bloated IDEs where possible and stick with a relatively basic editor with syntax highlighting.  I now use VS Code almost exclusively for my personal projects, it remains lightweight and fast, yet there seems to be an extension available for virtually everything.  To get .NET Core up and running in VS Code was as simple as:

1. [Install .NET Core](https://www.microsoft.com/net/download/all)
2. [Install VS Code](https://code.visualstudio.com/download)
3. [Install VS Code C# Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp)
4. Optionally add C:\Program Files\dotnet to the %PATH% and restart VS Code sessions

## Getting started

Everything in .NET Core seems to be done on the command line, using the dotnet command, nothing unusual here.  
Templates are available for quick start, to view these use ``` dotnet new ```.  
Let's start with a basic class library ``` dotnet new classlib -o ClassLib ```, this generates the following structure:  
* ClassLib
    * bin
        * Debug
            * netstandard2.0
    * obj
        * Debug
            * netstandard2.0
    * Class1.cs
    * ClassLib.csproj

No surprises here, except that obj/Debug is full before I've built the project, [not just a surprise to me](https://news.ycombinator.com/item?id=15756054#15757125).  
It turns out that these are generated files as we'd expect, however they are generated from the command ``` dotnet restore ``` which is called from many other commands, including ``` dotnet new ```.  

I feel that it is important to understand all of the moving parts in any codebase, for this project that means looking at the csproj file:  
```XML
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>netstandard2.0</TargetFramework>
  </PropertyGroup>
</Project>
```
This couldn't be much simpler, we're targetting the netstandard2.0 framework which basically means that we're making the netstandard2.0 set of APIs available to this project/ application.  
I'm happy with this, no unexpected surprises, nothing blurring the lines between IDE and project, I feel like I'm in control.  


## Package Management

I wasn't impressed with package management in .NET Framework when working within Visual Studio 2013/2015.  
It bothers me that there are multiple ways of defining dependencies and that the results are hidden from you by the IDE, I never felt comfortable with this.  
Compared to Rust or Go for example, it felt embarassing.  
I was almost excited when I watched [Build Great Libraries using .NET Standard](https://channel9.msdn.com/Events/dotnetConf/2018/S107), specifically the NuGet-first approach.  
So to add a dependency in .NET Core we use ``` dotnet add ```.  
Only 2 options; NuGet *package* and direct project *reference*.  
I don't yet have another project to reference, will get to that during testing.  
Let's add the Logging package as an example ``` dotnet add ClassLib package Microsoft.Extensions.Logging ```, this updates our csproj file with a new entry:  
```XML
  <ItemGroup>
    <PackageReference Include="Microsoft.Extensions.Logging" Version="2.1.1" />
  </ItemGroup>
```
I didn't need to add a [NuGet.config](https://docs.microsoft.com/en-gb/nuget/reference/nuget-config-file) file for this to work, so where is the default global packages folder?  
Windows: ``` %userprofile%\.nuget\packages ```  
Linux: ``` ~/.nuget/packages ``` 
I can work with this, certainly better than the old default of the current project scope, easier to standardise across multiple projects.  


## Build

Time to build the library: ``` dotnet build ```.  
Well, that was easy.  Notice that it also executed dotnet restore so cleaning/deleting obj or bin folders causes no problems.


## GitIgnore

Which files should be version controlled then, given that dotnet restore generates a lot for us?  
A thorough example is available [here](https://www.gitignore.io/api/aspnetcore).  
I'd rather only add bits as required (better for understanding) for example I'm not using Visual Studio so should be able to skip suo files and the like:
```
[Bb]in/
[Oo]bj/
```


## Testing

I've dabbled with countless test frameworks in the past, within .NET Framework I've used MSTest, NUnit, BizUnit, SpecFlow.  
[xUnit](https://xunit.github.io/) seems to be the test framework of choice for Microsoft themselves, e.g. [System.IO.FileSystem tests](https://github.com/dotnet/corefx/blob/master/src/System.IO.FileSystem/tests/FileSystemTest.cs) so let's go with that one.  

When using a tool I feel that it is important to understand the design principles behind that tool.  
Let's examine the structure they've used within the .NET Core foundational class libraries:
* corefx
    * Documentation
    * buildpipeline (+ other build-related artefacts)
    * cross (for cross-compilation)
    * eng
    * external
    * pkg
    * src
        * Fully.Qualified.Library.sln
            * Fully.Qualified.Library
                * ref
                * src
                    * Fully.Qualified.Library.csproj
                * tests
                    * Fully.Qualified.Library.Tests.csproj

To summarise:
* a master project repository which handles build and test automation but is otherwise basically a directory holding multiple independent solutions.  
* each solution independently maintained, tests written alongside, a change to one triggers a retest of all.

To create a new [xUnit](https://xunit.github.io/docs/getting-started-dotnet-core) test project, as we did with the class library:  
``` dotnet new xunit -o ClassLibUnitTests ```  
generates similar files to ClassLib above, but with extra dependendies listed in the csproj file:
```XML
<ItemGroup>
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="15.9.0" />
    <PackageReference Include="xunit" Version="2.4.0" />
    <PackageReference Include="xunit.runner.visualstudio" Version="2.4.0" />
  </ItemGroup>
```

We need this project to reference the ClassLib library, otherwise what are we testing?  
``` dotnet add ClassLibUnitTests reference ClassLib ```  
adds a new project reference to the csproj:
```XML  
  <ItemGroup>
    <ProjectReference Include="..\ClassLib\ClassLib.csproj" />
  </ItemGroup>
```

Ready to go ahead and write some tests, not including that here, this post is specifically about .NET Core in general.  


## Test Execution

Execute tests using ``` dotnet test ClassLibUnitTests -l "console;verbosity=detailed" ```

I also installed the [.NET Core Test Explorer](https://marketplace.visualstudio.com/items?itemName=formulahendry.dotnet-test-explorer) extension for VS Code.  
This provides useful links for running and debugging individual tests or an entire class of tests.  


## Projects and Solutions

As I alluded to above, Microsoft [encourage](https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-dotnet-test) setting up a solution for an application, containing both library projects and unit test projects, the default file looks like:  
```XML
Microsoft Visual Studio Solution File, Format Version 12.00
# Visual Studio 15
VisualStudioVersion = 15.0.26124.0
MinimumVisualStudioVersion = 15.0.26124.0
Global
	GlobalSection(SolutionConfigurationPlatforms) = preSolution
		Debug|Any CPU = Debug|Any CPU
		Debug|x64 = Debug|x64
		Debug|x86 = Debug|x86
		Release|Any CPU = Release|Any CPU
		Release|x64 = Release|x64
		Release|x86 = Release|x86
	EndGlobalSection
	GlobalSection(SolutionProperties) = preSolution
		HideSolutionNode = FALSE
	EndGlobalSection
EndGlobal
```

Clearly this is specific to Visual Studio, i.e. an IDE support feature, not part of the codebase, it simply tells Visual Studio which projects to open together.  
VS Code can open folders or pre-defined workspaces in much the same way, so no real difference here, except that this file is redundant.  
For those wanting to use sln files in VS Code, there is a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=fernandoescolar.vscode-solution-explorer).  

Project references are picked up by relative paths in the .csproj files, so as long as they are in place, the solution structure is effectively personal preference.  
So sticking with the structure listed above and omitting the sln file is the approach I'll take for now.  


## Application Templates

### Razor MVC

``` 
mkdir razor  
cd razor  
dotnet new razor  
```  

Produces the directory structure:
* RazorMvc
	* bin/
	* obj/
	* Pages/
		* /Shared
			* _CookieConsentPartial.cshtml - - -        *Highly visible region for forcing cookie submission, disappears when approved*
			* _Layout.cshtml - - - - - - - - - - - -    *Default layout for all pages, with Razor expression @RenderBody() to be filled in by other pages*
			* _ValidationScriptsPartial.cshtml - -      *Import JS scripts according to environment*
		* _ViewStart.cshtml - - - - - - - - - - - - -   *tells Razor which file to use as the entry point, default _Layout.cshtml*
		* _ViewImports.cshtml - - - - - - - - - - -     *tells View where to import other razor pages from*
		* X.cshtml + X.cs - - - - - - - - - - - - - -   *example pages*
	* Properties
		* launchSettings.json - - - - - - - - - - -     *configure application endpoints*
	* wwwroot - - - - - - - - - - - - - - - - - - - -   *static website stuff*
		* css/ - - - - - - - - - - - - - - - - - - - -  *custom styles*
		* images/ - - - - - - - - - - - - - - - - - -   *custom images*
		* js/ - - - - - - - - - - - - - - - - - - - - - *custom JavaScript*
		* lib/ - - - - - - - - - - - - - - - - - - - -  *default app comes with Bootstrap, JQuery and JQuery validation*
		* favicon.ico - - - - - - - - - - - - - - - -   *custom icon for bookmarks and tab identification*
	* appsettings.Development.json - - - - - - -        *release configuration for development, e.g. logging levels*
	* appsettings.json - - - - - - - - - - - - - - -    *release configuration beyond development*
	* Program.cs - - - - - - - - - - - - - - - - - -    *entry point for the application, command line Main function*
	* RazorMvc.csproj - - - - - - - - - - - - - - - -   *C# project file with 2 initial package references - Microsoft.AspNetCore.App and Microsoft.AspNetCore.Razor.Design)
	* Startup.cs - - - - - - - - - - - - - - - - - - -  *Controls web server configuration, injects dependencies into the application, called from Program.cs)

Key files:  
* Program.cs - represents the entry point for the application (as with any .NET Core app) in this case starting up a web service.  
* Startup.cs - called by Program.cs, startup configuration for the application, where service dependencies are injected and the middleware chain is set up.  
* appsettings.json (+ Development version) - centralised application configuration including logging and security.  
* launchsettings.json - application endpoints where we can find our application once it is launched.
* the csproj file (note we're now in a Microsoft.NET.Sdk.Web project SDK not the Microsoft.NET.Sdk), 2 new dependencies:

```XML
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>netcoreapp2.1</TargetFramework>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.App" />
    <PackageReference Include="Microsoft.AspNetCore.Razor.Design" Version="2.1.2" PrivateAssets="All" />
  </ItemGroup>
</Project>
```

#### Observations

Very useful to quickly see a fully working application following common standards, helps to breed confidence and interest.  

I know that bootstrap and jquery are both very common across the industry, however neither are technically required, so I'm not sure how I feel about them being part of the default app template, this sort of thing isn't great for creativity but is at least realistic, not really interested in the web stuff right now anyway.  

The MVC style app is a little out of fashion in the time of microservices, however this template would be a reasonable start position for the backend service, just need to strip out all of the web stuff.


### Angular

``` 
mkdir Angular  
cd Angular  
dotnet new angular  
```  

Produces the directory structure:
* Angular
	* ClientApp						(Angular client-side app [Angular CLI](https://github.com/angular/angular-cli), not focusing on this here)
		* e2e						(E2E tests using [Protractor](http://www.protractortest.org/))
		* node_modules				(npm assets, gitignored)
		* src						(custom application code)
		* Various configuration files; Angular app itself, Karma tests, editor preferences, Protractor tests, TypeScript compilation, Git
	* Controllers
		* SampleDataController.cs	(Sample AspNetCore.Mvc.Controller which is tied to an Angular component, fetch-data.component.ts by default)
	* obj/							
	* Pages
		* _ViewImports.cshtml	(directives to declare namespace and utilise all TagHelpers, neater than Razor HTML Helpers)
		* Error.cshtml + Error.cshtml.cs (Default error page, other pages not required when building SPA)
	* Properties
		* launchSettings.json 		(configure application endpoints)
	* wwwroot
		* favicon.ico				(Everything else client side lives in ClientApp)
	* .gitignore
	* Angular.csproj				(Project configuration, see below)
	* appsettings.Development.json
	* appsettings.json
	* Program.cs
	* Startup.cs

The Angular csproj file is far more complicated than before, the only .NET dependencies are:
```XML
<PackageReference Include="Microsoft.AspNetCore.App" />
<PackageReference Include="Microsoft.AspNetCore.Razor.Design" Version="2.1.2" PrivateAssets="All" />
<PackageReference Include="Microsoft.AspNetCore.SpaServices.Extensions" Version="2.1.1" />
```
But plenty of SPA (single page application) build commands on top of the basic .NET Core project file, e.g. ``` npm run build -- --prod ``` plus the corresponding check that npm is installed.

The key change regarding startup configuration compared with the MVC app is the injection of the *AddSpaStaticFiles* service and MVC routing.  


#### Observations

Again, good to see all the moving parts of a fully functional Single Page Application (SPA) using Angular.  
However, it feels very clunky, like 2 different worlds merged into one and I don't see the benefit.  
Surely it would be better broken into two applications, potentially worked on by different teams with different technical skillsets:
* Client (launched by ng serve and scripted according to Angular best practices) 
* Server/ API (launched from Program.cs using MS Build)


### WebAPI

``` 
mkdir WebAPI  
cd WebAPI  
dotnet new webapi  
```  

Directory structure: 
* WebAPI
    * Controllers
        * ValuesController.cs
    * obj
    * Properties
		* launchSettings.json
    * wwwroot
    * appsettings.Development.json
	* appsettings.json
	* Program.cs
	* WebAPI.csproj
	* Startup.cs

Comparison with RazorMVC:
* Dependencies unchanged, identical csproj files
* **wwwroot** initially empty, **Pages** missing altogether.
* New **Controllers** folder replaces these, an example is provided:

```C#
[Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }
        ...
```

#### Observations

Altogether this project template feels neat and focussed, kind of what I was looking for in the first place.  

It all revolves around API controllers (hardly surprising), which behave as follows:
1. Respond to an HTTP action upon a given route, configured by [attribute routing](https://docs.microsoft.com/en-us/aspnet/web-api/overview/web-api-routing-and-actions/attribute-routing-in-web-api-2#why-attribute-routing) 
2. Do some stuff, in practice deferring the logic to other processes
3. Return an appropriate response, e.g.
    * ```ActionResult<IEnumerable<string>>``` for multiple values
    * ```ActionResult<string>``` for a single value
    * ```void``` for no response, e.g. to a delete action


## Summary 

I like what I've seen (and read) so far, .Net Core feels a lot more modern and efficient than .NET Framework.  
The dependency management, build, testing all feel similar to the approach used by newer programming languages such as Go and Rust which is significantly less complex than my experience using .NET Framework, user experience can no doubt be improved upon using an IDE, but this is not required.  

Cross-compilation is a key component of the framework, this allows it to compete directly with other modern languages in this time of container based development and microservices.  I'm particularly interested in [Blazor](https://blazor.net/) as a competitor of [Go WebAssembly](https://github.com/golang/go/wiki/WebAssembly) and [Rust Wasm](https://github.com/rustwasm).  I think the future requires client side and server side to share logic offline, the thought of using JavaScript on the backend ([Node](https://nodejs.org/en/)) fills me with dread, so web assembly is a key part of solving this problem.  

Compatibility with .NET Framework provides experienced Microsoft developers with the confidence to switch and 16 years of Microsoft development effort is not lost during migration.  

I have in the past found Microsoft's documentation to be pretty damn awful if I'm honest, on a par with my memories of PHP 15 years ago.  
They seem to have fixed that, I'm having no trouble finding official answers to sensible questions.  
The fact that it is now open source too means that if something isn't well documented I can still get to the answer.
I think that something is still missing on the big picture front though, I want to understand the underlying architecture decisions, not just how to throw together a dummy app.  

As with any framework it is quite opinionated, but that's not a bad thing if you happen to agree with the opinions or are naturally pragmatic.  
In some cases I think this is a good thing, e.g. [ASP.NET Core MVC controllers should request their dependencies explicitly via their constructors](https://docs.microsoft.com/en-gb/aspnet/core/mvc/controllers/dependency-injection?view=aspnetcore-2.2) as this is the Core development team telling us how they expect the framework to be used.  [Here](https://medium.com/volosoft/asp-net-core-dependency-injection-best-practices-tips-tricks-c6e9c67f9d96) is another 
In others I feel less positive, see the encouraged use of bootstrap and jQuery above.  I'm not saying there's anything wrong with these decisions, only that they should be the project team's decisions to make, including them in templates feels like programming by numbers, potentially stifling individuality and ultimately competition.  

I was favouring [Go](http://www.golang.org) over C#/ .Net Framework when considering a new web api application for several reasons:
* open source, with enough time it is definitely possible to find a solution to whatever the problem is
* easier to find documentation with useful samples
* performance of both build and execution
* cross platform, I'm just not very comfortable with Windows as a server environment
* it just seemed relatively "cool"

However none of these points are particularly valid anymore and around here at least there seems to be more work in .Net Core than in Go.  
I think .NET Core has a bright future ahead of it.  