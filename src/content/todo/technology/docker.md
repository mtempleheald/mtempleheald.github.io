### Docker for Windows

installed in C:\Program Files\Docker

`docker info` tells me that `Docker Root Dir: /var/lib/docker`

`/var/lib/docker` is mounted on the persistent Virtual Disk of the VM `C:\Users\Public\Documents\Hyper-V\Virtual hard disks\MobyLinuxVM.vhdx`

Docker images are stored within this (~10gb right now)

### SQL Server

https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-2017

```PowerShell
# Grab the required image locally
docker pull mcr.microsoft.com/mssql/server:2017-latest

# Check installed images
docker images
# REPOSITORY                       TAG                 IMAGE ID            CREATED             SIZE
# mcr.microsoft.com/mssql/server   2017-latest         314918ddaedf        4 weeks ago         1.35GB

# Run the image
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Nothing2SeeHere" `
   -p 1433:1433 --name mssql01 `
   -d mcr.microsoft.com/mssql/server:2017-latest

# Check running containers
docker container ls
# CONTAINER ID IMAGE                                        COMMAND                      CREATED             STATUS              PORTS                    NAMES
# bd8736f9d703 mcr.microsoft.com/mssql/server:2017-latest   "/opt/mssql/bin/sqlsâ€¦"     10 seconds ago      Up 8 seconds        0.0.0.0:1433->1433/tcp   mssql01

#start an interactive bash shell inside the running container (use PowerShell NOT PowerShell ISE!)
docker exec -it mssql01 "bash"
# connect to the database with sqlcmd
/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'Nothing2SeeHere'

# Run a basic SQL script to test the database is up and working as expected
SELECT Name from sys.Databases
# master
# tempdb
# model
# msdb
```

## Connecting to the database externally (using VS Code)

[Official introduction](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-develop-use-vscode?view=sql-server-2017)

Starting within a file with extension .sql (or with the language mode set to SQL):

```SQL
SELECT Name from sys.Databases
GO
```

Call up the command palette (Ctrl + Shift + P or View > Command Palette) and find MS SQL: Execute Query.  
This will prompt for a connection profile which you can generate at this point by passing in parameters.  
I prefer the manual approach personally as it helps me remember, update user settings:  
File > Preferences > Settings > User Preferences > Extensions > MS SQL configuration > Connections > edit in settings.json  
add this to the right hand side:

```JSON
"mssql.connections": [
        {
            "server": "localhost,1433",
            "database": "master",
            "authenticationType": "SqlLogin",
            "user": "SA",
            "password": "",
            "emptyPasswordInput": false
        }
    ]
```

Notes:  
Docker uses host IP by default, I'm running my docker container locally so can access the SQL DB on localhost.  
I haven't bothered creating a DB yet, so using master for connectivity testing.  
VS Code hides the password away on running, differently depending on OS.

## Tidying up and reclaiming disk space

```PowerShell
docker stop mssql01
docker rm mssql01
```
