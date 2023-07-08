# Publish Database from ERD

I'm focusing here only on a relational database, typically a suitable choice for my use cases.  
I often find that blogs/tutorials/demos always skip over the data aspect of solutions.  
In my experience managing code is easy, managing data is hard.  Unless your data is transient in nature database changes require careful thought.

My key requirements in an effective data design strategy are:

1. __Visualisation__ - I want to see an ERD or something similar, without this understanding a non-trivial database is going to be hard.  
   This needs to be versioned with the code, which rules out Visio and other binary representations.  
2. __Automation__ - The ERD and the production database should be linked via automated means.  
   Out-of-date documentation is sometimes worse than no documentation at all.  
   This rules out EF Core migrations (even if not using EF Core for production code).
3. __Testability__ - Not so much a feature of the database, but I need to know that DB changes do not break things.  
   This means that integration tests must use the real database, on the same version as production, also during local dev, which leads me towards Docker.
4. __Provider-agnostic__ - I have seen what vendor lock-in leads to and I don't like it, we must maintain control of our applications.  
   In reality it is impossible to avoid this completely, but simple things like adhering to [SQL Standards](https://learnsql.com/blog/history-of-sql-standards/) can help reduce the impact of migration.  I only want tables, indexes, constraints and possibly views, all logic will be in the application code.
   This requirement rules out SSDT and [DACPAC](https://github.com/microsoft/DacFx) deployment which is great, but only for SQL Server.
5. __Maintainability__ - the solution needs to be simple to use in the medium to long term, though not necessarily simple to set up.  
   
   

This mini project is something I've been meaning to do for years, since I built an Oracle DB deployment tool in Go and subsequently discovered DACPAC deployment in SQL Server.  

## Visualisation

I considered various options, including Microsoft Visio, [Mermaid](https://mermaid.js.org/syntax/entityRelationshipDiagram.html), [dbdiagram.io](https://dbdiagram.io/home/), [Structurizr](https://structurizr.com/dsl?example=getting-started) to generate Mermaid diagrams, but eventually settled on [ERD Editor](https://marketplace.visualstudio.com/items?itemName=dineug.vuerd-vscode) for VS Code.  
I came to this decision because:

- It is free & open source, so even if it was taken offline and destroyed I could invest some time and recover to my forked version
- It is offline, meaning that any sensitive data models are kept secure
- It is stored in text/json format, not binary, which makes version control in git tenable
- It has a feature to output liquibase changelogs built in

## Automation

Most DB automation tools are either prohibitively expensive, or vendor-specific.  
I considered various options for automation, including:
- Enhancing my old Go based solution for Oracle DBs, but I don't have the code, only the design principles, so effectively this would be a fresh start.
- [SSDT (DACPAC publish)](https://learn.microsoft.com/en-us/sql/ssdt/extract-publish-and-register-dacpac-files?view=sql-server-ver16), but this is SQL Server specific.
- [EF Migrations](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli), but this doesn't work with visualisation tools AFAIK and I don't want to be tied to EF Core, since it is .NET only.
- [Redgate Tools](https://www.red-gate.com/solutions/need/automate) but I assume this is too expensive since they don't list the price on their website.
- [Fluent Migrator](https://fluentmigrator.github.io) but again this is .NET-specific, I don't see a benefit over EF Core.
- [Roundhouse](https://github.com/chucknorris/roundhouse/wiki) but again this is .NET-specific, it also seems to be poorly maintained although I do like the convention-over-configuration approach at a glance

I eventually settled on [Liquibase](https://www.liquibase.com/download) because it has a free and open source option (Apache-2.0 licensed), supports Docker, is clearly built to support CI/CD with documented [Open Source Workflows](https://docs.liquibase.com/workflows/liquibase-community/home.html) and, crucially, it works with the visualisation tool I've selected.  

## Testability

The prompt for this mini-project was the discovery of [Testcontainers](https://github.com/testcontainers) (via Nick Chapsas on Youtube).  
This allows you to spin up a throwaway docker container, or collection of, just for the lifetime of the test(s).  
This is not a substitute for unit testing since it will be significantly slower, but it is a better solution than testing with in-memory databases, which may have subtle differences in behaviour to the production database.  

## The solution

### Initial setup 

1. Install Docker (and optionally Docker Desktop, if licencing allows), examples below are unix images on Windows.
1. Run SQL instance (example is MSSQL) for any manual testing and to prove scripts  
   `docker run --name "mssql_manual_test" -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrong(!)Password" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest`
1. Get latest liquibase image `docker pull liquibase/liquibase`
1. Install VS Code extension "ERD Editor" (vuerd)
1. Create an ERD file `<name>.vuerd.json` within the project/solution/workspace, open this in VS Code and it should automatically load the editor.
1. Create a DB model, be sure not to deselect Postgres as the output regardless of target DB type, required for Liquibase support  
   Be careful here to use appropriate data types for the target environment, [ERD Editor supported types](https://github.com/dineug/erd-editor/blob/master/packages/sql-ddl-parser/src/SQL_DDL_Test_Case.md).  
   The tool is clever enough to convert from `uuid` to `uniqueidentifier`, but not clever enough to convert from `varchar` to `varchar2` for example and certainly not when lengths are included (which they need to be since the default is 1 character).  
   Effectively I'd advise making multiple DB models if supporting multiple DB providers, but decide which is master, copy/paste, find/replace in JSON files to keep multiple versions in sync and versioned together (this is why models should be stored in text format).
1. Generate a Liquibase changeset by right clicking the model and selecting Export > Liquibase  
   Use the naming convention _liquibase-change-###_, 999 DB changes should be enough for most projects.  
   Liquibase uses the id, author and filename to track changes - [How Liquibase works](https://www.liquibase.com/how-liquibase-works)  
   Keep the changelogs alongside the ERD model in source code, this lets ERD Editor load older changelogs to guarantee correct generation of new changelogs.  
   To apply multiple chainsets automatically, which we will need for automation, it is necessary to manually configure a master changelog `liquibase-change.xml`.  
1. Configure liquibase using a _liquibase.properties_ file in the same folder:  
   ```
   classpath: /liquibase/changelog
   changeLogFile: changelog.xml
   url: jdbc:sqlserver://localhost:1433;database=master;encrypt=true;trustServerCertificate=true
   username: sa
   password: yourStrong(!)Password
   # liquibaseProLicenseKey=<PASTE LB PRO LICENSE KEY HERE>
   ```  
   This example is using the defaults for a [SQL Server docker](https://hub.docker.com/_/microsoft-mssql-server) container, although the [Liquibase recommendation](https://docs.liquibase.com/workflows/liquibase-community/using-liquibase-and-docker.html) is to pass these as arguments.  Passing by argument is also required for running multiple test sets in parallel since only one Docker container at a time can respond on a given port, even if we reuse credentials for testing, so this defaultsFile is kept just to simplify any manual test processes locally.  
   We require `encrypt=true and trustServerCertificate=true` to resolve firewall and SSL errors respectively, encountered whilst applying test changeset.  
1. We can now run liquibase commands, e.g. help  
   `docker run --rm --net=host -v "C:\Path\To\Folder\Containing\changelogs":/liquibase/changelog liquibase/liquibase --defaultsFile=/liquibase/changelog/liquibase.properties --help`  
   `--rm` ensures that the docker container is removed after completion of the script (see debugging)  
   `-net=host` ensures that the liquibase container can talk outside of the Docker bridge network (e.g. to connect to a Docker hosted DB).  In hindsight it is better to use internal network alias on the SQL container to connect from liquibase.  
   `-v` maps our local folder (Windows in this example) to the root of Liquibase's changelog tree volume.  
   `--defaultsFile` tells Liquibase to use our properties file, which in turn tells it where to find changelogs and how to connect to the DB.  
   `--help` tells Liquibase to show us its help documentation, including available commands
1. Debugging - if any of our commands fail we can investigate by launching Liquibase with a built-in in-memory DB:  
   `docker run --net=host -v "C:\Path\To\Folder\Containing\changelogs":/liquibase/changelog liquibase/liquibase --defaultsFile=/liquibase/changelog/liquibase.properties init start-h2`  
   In a separate command window find the running container using `docker ps`  
   Jump inside it using `docker exec -it <container_id> bash`, you should see your files within `/changelog`  
   From here you can run the same commands (everything after liquibase/liquibase) on top of liquibase directly, e.g. `liquibase --help`  
   When done you will need to stop and remove the docker container yourself.  
1. Apply the changeset to the database manually (dbo schema is default for SQL Server)  
   `docker run --rm --net=host -v "C:\Path\To\Folder\Containing\changelogs":/liquibase/changelog liquibase/liquibase --defaultsFile=/liquibase/changelog/liquibase.properties update --changelog-file=liquibase-change-001.xml --default-schema-name=dbo`  
   If a changeset fails in dev, perhaps due to messing up constraints :|, and you wish to keep changesets clean before commit, you can truncate the table DATABASECHANGELOG which Liquibase manages.  
1. Check that this has worked as expected using SQL Server Object Explorer in Visual Studio or SQL browser of preference.  

### Code changes

1. Ensure that any DB code (repository) accesses the connection string via `IOptions` or better yet `IOptionsSnapshot` to allow live reloading of config.  
   ```C#
   public class ConnectionStringsOptions
   {
      public const string ConfigKey = "ConnectionStrings";
      public string MyDb { get; set; } = string.Empty;
   }
   ```
1. Create an xUnit IClassFixture `MsSqlTestFixture`, implementing `IAsyncLifetime` to ensure that it runs once per test class which uses it.  
   This class will:  
   1. Create a SQL container using the `ContainerBuilder`, mirroring the parameters above, although with a dynamically generated port.  
   1. Wait for this to become responsive (by which I mean can accept SQL commands not just commands at the Docker/network layer)
   1. Spin up a Liquibase container to run a single command on this transient database - `update`, to apply all changes to get to the current version from an empty database and dispose it after completion.  
   1. Expose SQL connection details via internal constants, for use by the test application.  
   1. Dispose the SQL container and associated classes after test execution.  
1. Create a custom `WebApplicationFactory` for testing, e.g. `TestWebApplicationFactory`.  
   This class will:
   1. Start with the WebApplicationFactory used by the application itself.  
   1. Replace real external dependencies in favour of managed stubs/fakes (out of scope of this document).  
   1. Use constructor injection to load the SQL TestFixture which exposes the connection details of the transient database.  
   1. Replace real connection strings with a connection string built from the SQL container settings.  
   ```C#
   public TestWebApplicationFactory(MsSqlTestFixture sqlTestFixture)
   {
    _connectionString = $"Server={sqlTestFixture._msSqlcontainer.Hostname
        },{sqlTestFixture._msSqlcontainer.GetMappedPublicPort(MsSqlTestFixture.MsSqlPort)
        };Database={MsSqlTestFixture.Database
        };User Id={MsSqlTestFixture.Username
        };Password={MsSqlTestFixture.Password
        };TrustServerCertificate=True";
   }
   
   protected override IHost CreateHost(IHostBuilder builder)
   {
      builder.ConfigureServices(services => 
      {
         services.Configure<ConnectionStringsOptions>(opts => {
         opts.MyDb = _connectionString;
         });
      });
   }
   ```  
1. Create a test class `MsSqlTests` which inherits `IClassFixture<MsSqlTestFixture>` and `IDisposable`  
   In the constructor use the above classes to make the DB available to the tests:
   ```C#
   public MsSqlTests(MsSqlTestFixture msSqlTestFixture)
   {
      _webApplicationFactory = new TestWebApplicationFactory<Program>(msSqlTestFixture);
      _httpClient = _webApplicationFactory.CreateClient(new WebApplicationFactoryClientOptions {
        AllowAutoRedirect = false // Test first response
      });
   }
   public void Dispose()
   {
      _webApplicationFactory.Dispose();
   }
   ```

### Issues

It takes some time to spin up a liquibase container, connect to a SQL database and apply migration scripts.  
I found during exploration that whilst debugging the test everything was working as designed, however, whilst running the tests had completed (with failures) before the DB scripts had been executed.  
It is possible to set a WaitStrategy on testcontainers to ensure that they are ready before moving on.  
I had no luck getting this to work with liquibase, since it is not designed to stay up after the command is completed.  
I'm sure there's a better way, but my fix for this was to put a while loop in between starting and disposing the liquibase container.  
This simply runs an appropriate query on the SQL container which indicates completion, then waits for a second before retrying, up to N times.  

### Next steps

The solution now works as intended (as long as you remember to start Docker first).  
I simply need to complete the work now, in a more test driven fashion than I normally would.  
Finally I need to automate integration testing on CICD pipelines.  
All of the above is checked in to a private GitHub repo for now, I may make this public at some point.  
