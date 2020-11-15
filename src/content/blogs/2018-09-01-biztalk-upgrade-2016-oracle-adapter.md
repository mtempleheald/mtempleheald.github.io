I was recently involved in an upgrade from BizTalk 2013 to BizTalk 2016.  
After upgrade all of our SpecFlow system tests started failing.  

The error manifests itself in the Event Viewer Application Logs as:  
```
System.IO.FileNotFoundException: Could not load file or assembly 
'Oracle.DataAccess, Version=4.121.1.0, Culture=neutral, PublicKeyToken=89b483f429c47342' 
or one of its dependencies. The system cannot find the file specified.
```


### Depdendencies

So I dug into this in order to understand the problem and how to fix it, it turns out that:  
* Biztalk 2013 has a dependency on [Oracle Data Provider for .NET](https://www.oracle.com/technetwork/topics/dotnet/index-085163.html) version 11.2.  
    * Oracle version 11.2.0.x.x == Oracle.dataaccess.dll 4.112.x.x
* BizTalk 2016 has the same dependency but on Oracle version 12.1.
    * Oracle version 12.1.0.x.x	== Oracle.dataaccess.dll 4.121.x.x

When it comes to Oracle database connectivity:
* a newer client should be able to connect to an older database
* an older client may not be able to connect to a newer database

In this case the client is the oracle.dataaccess.dll library used by BizTalk, aligned to Oracle database 12.1.  
Well that's OK then, because our target servers are running Oracle 11.2 which is older.  
At the time of writing there are 3 download options from Oracle's site:
* DB version 11gR2  11.2.0.3.20	
* DB version 12cR1  12.1.0.2.4		(closest match, only differs by minor version)
* DB version 12cR2  12.2.0.1.0	


### Installation

After installation we end up with the following GACced assemblies:  
``` 
C:\Windows\Microsoft.NET\assembly\GAC_32\Oracle.DataAccess\v4.0_4.121.2.0__89b483f429c47342   
C:\Windows\Microsoft.NET\assembly\GAC_64\Oracle.DataAccess\v4.0_4.112.2.0__89b483f429c47342\  
C:\Windows\Microsoft.NET\assembly\GAC_32\Policy.4.121.Oracle.DataAccess\v4.0_4.121.2.0__89b483f429c47342 
```  
The last of these provides an assembly bindingRedirect:
```XML 
<bindingRedirect oldVersion="4.121.0.0-4.121.2.0" newVersion="4.121.2.0"/> 
```  
Great, so BizTalk's reference to oracle.dataaccess.dll 4.121.1.0 will resolve to 4.121.4.0 and all should be fine.  
Indeed it was.  

I'm glad I spent the time investigating this, luckily we didn't have to follow [Sandro Pereira's advice](https://blog.sandro-pereira.com/2017/10/05/biztalk-server-2016-could-not-load-file-or-assembly-oracle-dataaccess-version-or-one-of-its-dependencies/).  


### Testing

After installation we have new entries in the %PATH% environment variable: 
``` 
C:\oracle\product\12.1.0\client_1  
C:\oracle\product\12.1.0\client_1\bin
```  
listed before the server installation: 
``` 
C:\oraclexe\app\oracle\product\11.2.0\server\bin 
```  
This means that the client config (TNSNames.ora etc) will be used.  

This is important for us to know.  
Our automated system tests against a local XE 11gR2 database (an empty copy of target systems).  
We'd like to be sure that BizTalk, our automated deployment scripts and Systests use the same client versions and configuration where possible.  

