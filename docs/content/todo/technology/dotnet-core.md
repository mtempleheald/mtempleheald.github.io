---
title: ASP.NET Core Fundamentals
last-updated: 2018-11-28
---

Having spent a few hours trying to get up to speed with ASP.NET Core 2.1 I think I've finally got a reasonable feel for it, some key points follow.  

The .NET Core designers are obviously keen on SOLID principles:
* Single Responsibility Principle is obvious all over the documentation where a class's responsibility (and what it isn't responsible for) is clearly stated.  
* Dependency Injection is everywhere [this](https://medium.com/volosoft/asp-net-core-dependency-injection-best-practices-tips-tricks-c6e9c67f9d96) was useful.  

This design decision is in the interest of managing side effects and can't really be critised.  
However, being such a fundamental part of the framework, it does increase the steepness of the learning curve, Logging in particular has spawned dozens of blog posts.  

It is a framework, so no surprises here, but it is quite opinionated.  
The documentation mixes ways of working with examples frequently.  e.g. Assuming TDD in an intro to [xUnit testing with C# in .NET Core](https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-dotnet-test?view=aspnetcore-2.1).  
This may be a perfectly valid approach, but it isn't the only one, why complicate the documentation?  I don't disagree with any of the stated [best practices](https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices?view=aspnetcore-2.1) though.  

The individual bits are quite well documented on the whole, but I've not seen a clear picture for the anatomy of a .NET Core application, which is a little odd considering how keen they are on specific ways of working and structuring projects.  
Perhaps I'm just missing subtle differences between the various application types for which templates already exist.  

.NET Core is clearly microservice and API first, clear endpoints and routes throughout the application are all managed by configuration at startup.  
This makes perfect sense to me for a web application/ api, helps keep you focussed to exactly what this application needs to do.
I'm less clear on the testing front, I simply want to test a class library, what constitutes the "application"?  
[this](https://stackify.com/net-core-loggerfactory-use-correctly/) describes the issue I was struggling with and what to do about it.  
[the tests of the logger itself](https://github.com/aspnet/Extensions/blob/master/src/Logging/test/LoggerTest.cs) could be useful.

I guess I ought to be using a mocking framework, e.g. [Moq](https://github.com/Moq/moq4/wiki/Quickstart).  
https://stackoverflow.com/questions/43424095/how-to-unit-test-with-ilogger-in-asp-net-core/43425633  
https://stackoverflow.com/questions/9785539/how-to-mock-ilogger-iloggerservice-using-moq  

Perhaps I'm designing "wrong":
* if you're truly developing microservices, are there any shared components?  Other than logging, DB access etc for which there are standard libraries.  
* if using dependency injection properly, perhaps the application code doesn't get cluttered between business logic and integration?  
  This is why I have tended to like class libraries, written purely with no understanding of the outside world, maybe the whole app should be like that.  

[Similar points](https://blog.philipphauer.de/dont-share-libraries-among-microservices/)  
[And an alternative view](http://www.grahamlea.com/2016/04/shared-libraries-in-microservices-bad-advice/)  
[This aligns with my thinking](https://codeburst.io/can-we-reuse-code-between-microservices-508fa4c1d06d)  



### Glossary

* [Host](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/host/?view=aspnetcore-2.1)
    * .NET apps configure and launch a *host*
    * responsible for app startup and lifetime management
    * Two host APIs available
        * Web Host (Microsoft.AspNetCore.Hosting.IWebHostBuilder) - for hosting web apps (for now, to be replaced by Generic Host)
        * Generic Host (Microsoft.Extensions.Hosting.IHostBuilder) - for hosting any kind of app
* [Startup](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/startup?view=aspnetcore-2.1)
    * Class named Startup by convention
        * Optionally include a *ConfigureServices* method
        * Must include a *Configure* method
    * On startup the Host object is built using the startup settings or directly using convenience methods  
      e.g. WebHost.CreateDefaultBuilder(args)  
             .ConfigureAppConfiguration(...)  
             .ConfigureServices(...)  
             .Configure(...)  
* [Middleware](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-2.1)
    * Combination of software which is assembled into an app pipeline to handle requests/responses
    * Each *middleware component* is responsible for invoking the next component or short-circuiting the pipeline
    * Middleware delegates are configured using Microsoft.AspNetCore.Http.Abstractions.dll, specifically the Microsoft.AspNetCore.Builder namespace
        * RunExtensions.Run - Add terminal middleware delegate to the application's request pipeline.
        * MapExtensions.Map - Branch request pipeline based on matches of the given request path.
        * UseExtensions.Use - Add middleware delegate defined in-line to the application's request pipeline.
* [Routing](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-2.1)
    * Responsible for mapping request URIs to route handlers and dispatching as incoming requests
    * Defined in app, configured when app starts
        * Add routing to the service container Startup.ConfigureServices: ```C# services.AddRouting(); ``` 
        * Configure routes in the Startup.Configure method using the Microsoft.AspNetCore.Routing methods:
            * RouteBuilder - build a route (not required for single route apps, just call UseRouter passing in an IRouter instance)
            * RequestDelegateRouteBuilderExtensions.MapGet (for example) - define a specific route mapping
            * RoutingBuilderExtensions.UseRouter - apply the routes to the app ```C# app.UseRouter(routes) ```
* [Environments](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-2.1)
    * environment variable **ASPNETCORE_ENVIRONMENT** read at app startup, stored in **IHostingEnvironment.EnvironmentName**
    * Development / Staging / Production - default is production
* [Configuration](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-2.1)
    * key-value pairs, established by *configuration providers*, e.g. 
        * [Azure Key Vault](https://docs.microsoft.com/en-us/aspnet/core/security/key-vault-configuration?view=aspnetcore-2.1)
        * [Command-line arguments](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-2.1#command-line-configuration-provider)
        * [Environment Variables](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-2.1#environment-variables-configuration-provider)
        * [Settings files](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-2.1#file-configuration-provider)
    * Configuration provider order determines order in which configuration sources are read, typical sequence:
        1. Files (appsettings.{ENV}.json)
        2. Azure Key Vault
        3. User Secrets (Secret Manager) (dev env only, source is file in user profile directory)
        4. Environment variables
        5. Command-line arguments (last to faciliate override capabilities)
    * Sample:  
      ```C#  
      var config = new ConfigurationBuilder()  
        .AddEnvironmentVariables()  
        .Build();  

        var host = new WebHostBuilder()  
        .UseConfiguration(config)  
        .UseKestrel()  
        .UseStartup<Startup>();  
      ```
* [Packages](https://docs.microsoft.com/en-us/dotnet/core/packages?view=aspnetcore-2.1)
    * Fine-grained group of primitives, higher-level data types, app composition types and common utilities
    * key NuGet packages for .NET Core
        * System.Runtime (including Object, String, Array, Action, IList<T>)
        * System.Collections (including List<T>, Dictionary<TKey,TValue>)
        * System.Net.Http (including HttpClient, HttpResponseMessage)
        * System.IO.FileSystem (including File, Directory)
        * System.Linq (including Enumerable, ILookup<TKey,TElement>)
        * System.Reflection (including Assembly, TypeInfo, MethodInfo)
* [Metapackages](https://docs.microsoft.com/en-us/dotnet/core/packages?view=aspnetcore-2.1#metapackages)
    * NuGet convention for meaningful grouping of packages
    * NETStandard.Library - metapackage containing libraries considered part of the ".NET Standard"
    * key .NET Core metapackages
        * Microsoft.NETCore.App - Establishes the .NETCoreApp framework (depends on NETStandard.Library)
        * Microsoft.AspNetCore.App - ASP.NET Core and Entity Framework Core packages, excluding third-party dependencies
        * Microsoft.AspNetCore.All - ASP.NET Core and Entity Framework Core packages, including third-party dependencies
        * Microsoft.NETCore.Portable.Compatibility - enable mscorlib-based PCLs (Portable Class Libraries) to run on .NET Core
* [Frameworks](https://docs.microsoft.com/en-us/dotnet/core/packages?view=aspnetcore-2.1#frameworks)
    * .NETFramework,Version=4.6 - traditional library based framework targeting .NET Framework 4.6 or compatible (distributed in NuGet pacakges in a net46 lib folder)
    * .NETStandard,Version=1.3 - package-based framework relying on packages which target this framework
        * netstandard - .NET Standard framework - represents APIs defined by and built upon the NET Standard.
        * netcoreapp - .NET Core framework - represents packages and associated APIs that come with the .NET Core distribution and the console application model it provides.  
          .NET Core apps must use this framework due to targeting the console application model.  
    




Im attracted to .NET Core due to its open source nature.  There's little point in having access to the source code though if you don't know how to navigate it.  Let's investigate...  





Source code explorer
https://source.dot.net/
API browser
https://docs.microsoft.com/en-us/dotnet/api/index?view=netcore-2.2&term=json



## Core repositories
https://github.com/dotnet/core/blob/master/Documentation/core-repos.md  

https://github.com/dotnet/cli           - Command line tools
https://github.com/dotnet/core-setup    - 
https://github.com/dotnet/corefx        - libraries/ APIs
https://github.com/dotnet/coreclr       - runtime
https://github.com/dotnet/docs          - documentation
https://github.com/dotnet/sdk           - VS & CLI support
https://github.com/dotnet/dotnet-docker - docker images

https://github.com/dotnet/standard
https://github.com/dotnet/roslyn
https://github.com/dotnet/csharplang

https://github.com/nuget/home

https://github.com/dotnet/wcf

## ASP.Net Core
https://github.com/aspnet/AspNetCore
https://github.com/aspnet/EntityFrameworkCore
https://github.com/aspnet/Extensions

## Azure 

repository naming convention:  
azure-<technology>[-<framework/language>]  
azure-docs-<technology>[-<framework/language>]  

[Azure SDK](https://github.com/Azure/azure-sdk) - calls out to language-specific implementations (repositories suffixed with -lang)  

https://github.com/Azure/azure-sdk-for-net
https://github.com/Azure/azure-libraries-for-net

https://github.com/Azure/azure-cli
https://github.com/Azure/azure-powershell

https://github.com/Azure/jenkins

[Azure Storage .NET](https://github.com/Azure/azure-storage-net)  
[Service Bus](https://github.com/Azure/azure-service-bus)  

[Azure Functions](https://github.com/Azure/Azure-Functions) - calls out to WebJobs SDK, Extensions, Host, Workers  
Related, or subrepositories tagged with topic [azure-functions](https://github.com/search?q=topic%3Aazure-functions+org%3AAzure&type=Repositories)  
https://github.com/Azure/azure-functions-templates

https://github.com/Azure/ServerlessLibrary
https://github.com/serverless/serverless-azure-functions


https://github.com/Azure/awesome-terraform


https://github.com/Azure/azure-quickstart-templates
https://github.com/Azure/AzureStack-QuickStart-Templates
https://github.com/Azure/app-service-quickstart-docker-images


https://github.com/Azure/azure-mysql  
https://github.com/Azure/azure-postgresql  

https://github.com/Azure/AzureDataLake - doesn't follow naming standards

https://blogs.msdn.microsoft.com/dotnet/2018/10/16/automating-release-notes-with-azure-functions/


https://github.com/Microsoft/vscode






xUnit tests weren't being picked up by the test extension, restarting and following prompt fixed it but the issue was missing configuration files launch.json and tasks.json
[xUnit JSON configuration](https://xunit.github.io/docs/configuring-with-json)  

[xUnitcheat sheet](https://lukewickstead.wordpress.com/2013/01/16/xunit-cheat-sheet/)  