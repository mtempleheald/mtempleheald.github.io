---
title: Functions as a Service
last-updated: 2018-11-20
---

Following on from my comments on the [evolution of software](/topics/evolution-of-software) I've been looking into Functions as a Service.

In the FaaS arena there are several competing options, the key players include:

- [AWS Lambda](https://aws.amazon.com/lambda/)
- [Azure Functions](https://azure.microsoft.com/en-gb/services/functions/)
- [Google Cloud Functions](https://cloud.google.com/functions/)
- [IBM Cloud Functions](https://console.bluemix.net/openwhisk/)
- [Oracle Fn](https://fnproject.io/)

### Orchestration frameworks

[Serverless](https://serverless.com/framework/docs/)  
[Terraform](https://www.terraform.io/intro/index.html)

### Language support

|------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------|
| Platform | Languages |
|------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-app.html) | Node.js, Python, Java, C#, PowerShell, Go |
| [Azure Functions](https://docs.microsoft.com/en-gb/azure/azure-functions/supported-languages) | C#, JavaScript, F#, Java |
| [Google Cloud Functions](https://cloud.google.com/functions/docs/concepts/overview) | Node.js, Python |
| [IBM Cloud Functions](https://console.bluemix.net/docs/openwhisk/openwhisk_actions.html#openwhisk_actions) | JavaScript, Python, PHP, Ruby, Swift, Java, Docker, Go |
| [Fn](https://github.com/fnproject/docs/blob/master/fn/general/faq.md#technical) | Docker |
|------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------|

### Structure

All of the key players seem to follow a similar pattern here:

1. Functions can be written in language of the developer's choosing, some made simpler to work with if the platform understands them.
2. Functions grouped into an Application, sort of rendering MVC backend services obsolete I guess is the idea here.
3. Secure functions at the application, or function group level, relying on existing authentication frameworks.
4. Provide options for deployment automation but also a portal for manually performing the same activities.
5. Provide or at least encourage a common logging mechanism for monitoring and debugging.
6. Functions can call other functions, there may be orchestration tools available for chaining functions

### Deployment

Many of the platforms provide a console for creating functions, I'm not interested in that here, automation from day 1 is key to success.  
Each platform has its own way of deploying functions, there are commonalities, there is a risk of vendor lock-in, let's look at the approaches:

#### AWS Lambda [2 step process](https://docs.aws.amazon.com/lambda/latest/dg/lambda-app.html#lambda-app-deploy):

1. Create deployment package
   - Create a .zip or .jar containing code + dependencies and set security privileges.
   - The method varies depending on language choice, e.g. cross-compile Go to linux, Maven/Gradle for Java, proj.runtimeconfig.json for C#
2. Upload deployment package
   - AQA Lambda [CreateFunction](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html) operation can be called from the AWS CLI and AWS SDK
   - Either reference the Base64-encoded contents of the zip, or upload it to an AWS S3 bucket and include the bucket/key/version.

#### Azure Functions

- Deploy using [ARM templates](https://github.com/Azure/azure-quickstart-templates)
  - Consumption Plan (scaled according to workload) - [create dynamic](https://github.com/Azure/azure-quickstart-templates/tree/master/101-function-app-create-dynamic)
  - App Service Plan (managed servers/scaling) - [create dedicated](https://github.com/Azure/azure-quickstart-templates/tree/master/101-function-app-create-dedicated)
- This is still a 2-step process whereby we are telling Azure where to find our previously uploaded code (Azure storage account), which addresses a concern raised [here](https://blog.kloud.com.au/2018/08/16/deploying-azure-functions-with-arm-templates/)

#### Google Cloud Functions

- Deploy using the [gcloud CLI](https://cloud.google.com/sdk/gcloud/reference/functions/), either from source control or local machine.  
  Depending on the programming language chosen this utility will search for relevant files.

#### IBM Cloud Functions [2 step process](https://console.bluemix.net/docs/openwhisk/openwhisk_actions.html)

1. Create a compatible format action
   - reference a .js file, cross-compile Go to Linux/amd64, javac a static class with the correct signature...
   - Or create a Docker image on Docker Hub based on [dockerSkeleton](https://hub.docker.com/r/openwhisk/dockerskeleton/) for unsupported languages
2. Use the ibmcloud CLI `ibmcloud fn action create <name> <file> --<args>`

#### Fn

A function generator is provided for supported runtimes, e.g. Go `fn init --runtime go --trigger http <name>` Using this avoids the need to manually maintain docker files.  
Alternatively one can manually create a function based on fnproject/node docker base image.

Either way, deployment is a 2 step process:

1. build using `fn --verbose build`, to produce a docker image
2. Use the [fn CLI tool](https://github.com/fnproject/docs/blob/master/cli/README.md#fn-command-reference) to deploy the image to fn server (local in this case) `fn --verbose deploy --app <name> --local`

### Authentication and Authorisation

A key component to any software integration is security:

- is a client truly who they say they are (authenticated)?
- are they allowed to perform this action (authorised)?

Let's examine the preferred approaches employed by the main cloud providers:

#### AWS Lambda

AWS Identify and Access Management (IAM) [for AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-auth-and-access-control.html))

- AWS account root user - just no, never use this, automate from the start and that does not require this level of access
- IAM user - specific permissions for specific users, far better to apply roles which support key rotation and encourage early application role design consideration
- IAM role - AWS identity with temporary security credentials which are dynamically provided to a user when they assume the role, allowing key rotation
  _ [Federated user access](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_access-management.html#intro-access-roles) -
  AWS Directory Service, enterprise user directory, web identity provider
  _ [AWS service access](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-service.html)
  _ an AWS service is given a "service role" to act upon other AWS services
  _ Multistep process; create role, attach policy to role, optional tag role, optionally set permissions boundaries
  _ [Applications running on Amazon EC2](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html)
  _ Using IAM role-based temporary credentials avoids embedding keys in code, facilitates key rotation and mitigates long-term security risks.
  _ managed through creation of an instance profile attached to the EC2 instance.
  _ 1 role per EC2 instance at a given time, all applications share role and permissions.
  Temporary security credentials can be accessed from the [AWS Security Token Service (STS)](https://docs.aws.amazon.com/STS/latest/APIReference/Welcome.html)

#### Azure Functions

[Azure App Service Authentication (EasyAuth)](https://docs.microsoft.com/en-gb/azure/app-service/app-service-authentication-overview) also known as EasyAuth manages:

- Authentication with specified provider (Azure AD, Microsoft Account, Facebook, Google, Twitter...)
- validation, storage, refresh of tokens
- session
- identity injection into request headers

#### Google Cloud Functions

Google seems to be lacking here compared with AWS and Azure [](https://stackoverflow.com/questions/48531608/authentication-in-http-google-cloud-functions)

#### IBM Cloud Functions

[Left to the developer](https://github.com/apache/incubator-openwhisk/blob/master/docs/webactions.md) to implement

#### Fn

Found very little on this topic, just a [subrepository](https://github.com/fnproject/ext-auth) of the fnproject.

### Logging, monitoring, debugging

|------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------|
| Platform | Logging mechanism |
|------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| AWS Lambda | [Amazon CloudWatch](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions-logs.html) |
| Azure Functions | [Application Insights monitoring](https://docs.microsoft.com/en-us/azure/azure-functions/functions-monitoring) |
| Google Cloud Functions | [Google Stackdriver](https://cloud.google.com/functions/docs/monitoring/) |
| IBM Cloud Functions | [Openwhisk logs](https://console.bluemix.net/docs/openwhisk/openwhisk_logs.html#openwhisk_logs) |
| Fn | [fnproject](https://github.com/fnproject/docs/blob/master/fn/operate/logging.md) recommends [Logspout](https://github.com/gliderlabs/logspout) |
|------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------|

### Testing

Regardless of intended platform or language, any function should be built alongside appropriate unit tests, this way we can be confident with the logic.  
The function trigger should be a lightweight wrapper on top of this, then we only need to test the plumbing.  
Depending on function types the method of testing may vary:

- HTTP triggers can be tested using a browser, cURL, Postman, VS Code's REST Client...
- File/ Blob storage triggers can be tested by triggering the expected action, e.g. drop a file in.
- One would hope that you can simply rely on timing triggers to fire, but testing what they've done could be problematic.
  So what are the suggested practices from the big players?

#### AWS Lambda

Can [test a lambda function](https://docs.aws.amazon.com/lambda/latest/dg/lambda-app.html#lambda-app-test-code) in 3 ways:

- in the console - manual, for exploratory purposes I'd suggest
- through the AWS CLI `Invoke` method with mock data
- Locally using the [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-test-and-debug.html)

#### Azure Functions

Can [test a function](https://docs.microsoft.com/en-us/azure/azure-functions/functions-test-a-function) in several ways depending on type:

- Manually test web-based trigger in the Azure Portal - Run function with a mock request body, automate using Postman etc
- Manually test storage-based trigger by dropping a file in the expected location, or equivalent.
- Timer-based triggers by checking logs at the appropriate time.

#### Google Cloud Functions

Google don't seem to provide portal testing but offer some [best practices](https://cloud.google.com/functions/docs/bestpractices/testing).

#### IBM Cloud Functions

Can be tested using the ibmcloud CLI tool `ibmcloud fn action invoke --blocking`

#### Fn

Fn testing can be done locally using fn CLI tool to run a local server: ` fn start`
