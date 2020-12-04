---
title: Technical Experience
last-updated: 2018-11-27
---

Technologies in roughly the order I encountered them, with some observations:

##### Fortran & Matlab
My only forays into programming at uni, never quite got to grips with it, I just wasn't interested.

##### Web (lamp stack)
This appealed a lot more, I could get instant feedback and feel like it was useful.  
I still have a PHP website running somewhere and was using a web app for bill sharing while renting a property.  
However I felt the php documentation was awful and being freely available there's an awful lot of rubbish to sift through.  
I spent a fair bit more time with JavaScript later on, enough to appreciate compiled languages when I got to them.

##### Excel/ VBA/ Mailmerge
This was when programming started making sense to me.  
I was working in an administrative role and I despise repetition of tasks.  
So I automated my job. Within a few weeks I'd cut my working day down to under an hour.  

##### Access
With the extra time I'd saved I set out automating other facets of the role and impacting a wider group.  
That's how I got into IT.

##### SQL
During my Access work I taught myself 3NF and generally just started appreciating the power of data.  
Data is the basis of everything I have done since and will continue to be the case.

##### Oracle DB & PL/SQL
Mostly working on Oracle 10g but I embraced quite a few of the new 11g features when they became available.  
My APEX work and Data Warehouse ETL was all on 11g.  
I find PLSQL verbose but I can get the job done and despite hating the buy-in aspect, I have found most of the libraries quite easy to use too, if not well documented.

##### Oracle Forms
I did quite a bit of work with Forms over several years, I never grew to like it though.  
I think my issues were more to do with the company standards than the technology, very restrictive and encouraging of bad habits such as copy-paste over re-use.  
Switching to APEX as my primary development framework was liberating in this respect.

##### Oracle Application Express (APEX)
My first real project as a professional software developer was in APEX 3.1.  
I was involved in the upgrade to 3.2 and later to 4, after which APEX was no longer the company direction.  
I like APEX, I'm yet to work with another tool that's quick to throw together yet fully capable of handling complex business logic and high performance applications.  
Any framework has to make choices between flexibility and being overly opinionated, I think Oracle made a few mistakes though.  
APEX should have adopted best practice web standards rather than allowing embedded css/js.  
I've had to maintain code where there is a PLSQL package generating JavaScript and written in a way that is not open to unit testing, not really a fault of the tool I know, but...  
I also dislike the v() functions - packages should parameterise functions such that they can be unit tested, small things like this make all the difference.  
I have personally built half a dozen apps and supported at least as many, generally quite a pleasant experience all things considered.  
Having supported a third-party led application though I learnt here DO NOT OUT-SOURCE DATA MODELLING!

##### Oracle BI Publisher
Not an area I've researched particularly well but I don't know any equivalent pixel-perfect reporting tools.  
The development environment (Word) is horrific, but it gets the job done.  
I've done some pretty complex solutions using this including graphing using BI Beans and very precise invoice, statement and remittance advice reports.

##### Oracle Reports
I hate Oracle Reports, but again I think it is the implementation/standards more than the tool.  
In my experience there is a lot of business logic in there which shouldn't be.  
Something called Reports should be just that, Reports, no interaction.  Use the correct tool for the correct job!

##### Oracle e-Business Suite
As a company with a single country and only a few offices to worry about, this was not the correct tool to choose, however that decision predated me.  
The core stuff I have respect for, admittedly complex structures but built to to handle a potentially complex environment.  
I despise the Oracle recommended standards, surely the average DB developer can work out public synonyms, having to work in APPS for everything is crazy!  
As for Forms development and concurrent manager, nothing has ever shouted lock-in louder, everything always felt clunky to work with.  
Just so ugly!  Feel dirty after using for a while.  After the upgrade the UI became tolerable, though only partially complete.  Another example of Oracle sales pushing ahead of their technical skills.

##### Oracle Discoverer
Nice idea, poorly implemented.  As a user years prior I couldn't find anything, as a developer it just didn't sit right with me.  
Perhaps it was the people who came before me but the data structures were always in relational form, so in order to write a query you have to understand the tables, might as well just write the SQL!  

##### Data Warehouse
Perhaps not strictly a technology but leads on to the next one nicely.  
My first experience on 10g with a consultancy-led MIS pilot, which failed due to over-ambitious and badly prioritised scope.  
My second experience was much better, I basically modelled and built the entire DW from scratch on my own in chunks over 12-18 months.  
This was an enjoyable and truly successful agile delivery and has worked with almost zero support for the last 6 years or so.  
I've also supported a third which was designed for specific reporting.

##### Oracle OBIEE
A marked improvement on Discoverer, I was able to properly represent my data warehouse structures for ad hoc reporting.  
Had I inherited this my opinions may have been similar to those for Discoverer, green field is lovely if you get the chance!  
Development by mouse did start affecting my wrists, I haven't missed the tool since the project completed.  

##### Oracle Warehouse Builder
This was used for the MIS Pilot and didn't seem to help as much as hinder.  
SQL generated is also used in the reporting DW indicated above, but not the ETL scheduling functions.  
Personally I don't see the benefit, hand-written code is cleaner and easier to debug in my experience.

##### Java
I never worked on production Java, but went on 3 training courses, specifically for XML and SOAP.  
I've also dabbled with an app on Google Cloud, but was put off by the lock-in attempts at every turn.  
I've also dabbled with Android but didn't get as far as finishing an app.  
I went off Java when I discovered Golang, the improvements to development effiency were profound.

##### Golang
I used Golang to generate Oracle PL/SQL deployment scripts from objects in a Subversion repository.  
It was the quickest way I knew to get a basic webserver running, load XML config and call the avn command line.  
This was produced informally but has been used for at least 5 years now and has saved me personally countless hours.
I've also used golang to crawl LinkedIn and generate my own CV in Latex format.  
This didn't work as well as I'd hoped but was a worthwhile exercise, attempting to implement recursion in Go.

##### C# & ASP.NET
I like C#, it isn't exciting but it works, less verbose and cleaner than Java.  
I like how easy it is to get an MVC app working for example, though I wouldn't develop in that way these days other than for tinkering.  

###### SQL Server
Dacpac, I like this, a lot.  I tried once to implement something similar for Oracle, but just too complicated given an existing codebase.  
I prefer the user management over Oracle DB, specifically that roles/objects are given to the user, not the other way around.  
Not done a huge amount of code in SQL Server, but so far I still prefer PL/SQL over T_SQL.

##### BizTalk
I hate BizTalk!  It embodies everything I disagree with regarding development approaches:
* Config as code - so fiddly, easy to make mistakes and easy to lose focus, just a horrible experience.
* Run-time failures rather than compile-time, caused by the above, configuration should reside in the environment not the code (see 12 factor apps).
* Flaky and unstable, though I suspect much of this is the usual inherited implementation, fixed quite a lot but still plenty to do and little support for tech debt resolution.
* Slow and cumbersome to work with, actively discourages refactoring due to how long it takes, this hurts my soul.
* Unit testing takes too long to be practical, at least on the project I've worked on.
* System testing is flaky nad unpredictable because response times as unpredictable.  This isn't all BizTalk, our systests are using local DBs/ stubs.
* Error messages, whilst usually accurate, give almost no indication of how to fix the actual problem.  The problem is usually miles away or resolves itself, this does not breed confidence.
* I've now experienced an upgrade from 2013 to 2016, I doubt there will be another version, the future's logic apps and Azure functions.

##### Haskell
I've not professionally worked in Haskell, but I spent a good few weeks over Christmas 2016 getting to grips with it, inspired by encountering lambdas in C#.  
I think in terms of my programming skills this was possibly the best thing I could have done.  It changed the way I think about code considerably.  
I've used imperative coding techniques for years and they get the job done, but they're hardly elegant and tend to get messier over time, you get silos of knowledge forming and an absence of automated tests.  
This is where OOP came in and became the defacto standard.  I like it in principle, the idea that you're building a world, in many cases it is the ideal paradigm, e.g. games where objects interact via events.  
However, I find that people go off-base a bit with OOP, when the names of classes/objects no longer make sense you've lost your way.  
I guess this is why Functional programming styles are coming to the fore across the board.  
They are more natural for the web world where everything is just passing through, a request-respose, an API call.

##### Rust
I am very interested in Rust.  
It addresses many of the issues I've encountered with other languages:
* Verbosity - a bit of work up front and the actual logic can be beautiful (thanks Haskell!)
* Dependencies - cargo works brilliantly, simple yet effective.
  * Compare to Java and crazy manifest formats
  * Compare to C# and dll hell (BizTalk upgrade + Oracle DB was my first real experience but enough to sympathise)
* Open source - want to know what the library does?  Go and read the code!  
  I found an issue with Iron-handlebars with Angular in this way.  
  Golang is pretty good here too, but I find the rust comments more helpful.
* IDE - Just why use a bloated IDE when a simple text editor with syntax highlighting and autocomplete is available.  I use VS Code.
* Documentation
  * My first experience of automated documentation was javadoc, seen it in C# and Go too, Rust is best implementation imo.
* Automated testing - built in to the language very well indeed, even as a novice I'm encouraged to write tests.
* Parallelism and performance - even tests are parallel by default
* Functional support
  Originally started as a functional-first language but deviated, retains some aspects like immutability by default.  Doesn't feel bolted on.
* Run-time errors
  This is actually the big one, the borrow checker prevents so many classes of error and those which are hardest to debug.  

I am still struggling but I'm learning every day with Rust.



