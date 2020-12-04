---
title: Programming Languages
last-updated: 2018-11-24
---

As a software developer I think that it is important to stay relevant and rounded.  
To do that you can't be blinkered by whatever programming language, platform, framework that you're currently using.  
These all evolve and learn from each other anyway so learning aspects of one can improve your ability in another.  

I do not claim to have mastered many, if any of these, but I have grasped the basics at least, understanding how to use them to produce something useful.  
I have a set of criteria I consider for this exercise:  
* Documentation - You need to have something to learn from, languages which keep the documentation with the open source code win here hands down
* Tooling - how easy is it to install? update? build? deploy? test?
* Testing - what's the standard approach to automation testing for this language?
* Standard libraries - or clearly recognised preferred libraries if the standard library is small
* Run-time & dependencies - I don't want to install more than is necessary or worry about run-time configuration issues
* Community - not a high one on my list, as long as the documentation is up to scratch, I'm never on the bleeding edge, but nice to know it is there

It is also important not to dwell on the technical details too much (unless you're writing the compilers).  
My focus is always on the problem at hand, or more specifically the solution to it, rather than the means (language/ library/ framework).  
Key uses I look for include web servers, XML and JSON serialisation/deserialisation, working on files and accessing databases.  

Below is a list of languages (I'm not including markup) I've explored to some degree, loosely in the order I encountered them.

##### Fortran  
  My only real foray into programming on my university course.  
  I experienced all the frustration of programming with none of the satisfaction because I didn't care about the solution.
##### Matlab  
  Technically I guess I just lied, however I only used Matlab for matrix multiplication on my final year university project around neutrino oscillations.
##### JavaScript  
  I took advantage of university website hosting for simple stuff like bookmarking before browser bookmarks were commonplace.  
  Before CSS3's border-radius property I used JS to produce antialiased rounded corners.  
  I'm liking what I've read about the recent improvements in JavaScript though I'm not fully up to speed yet.
##### PHP  
  The LAMP stack was the obvious (only) choice if you wanted free web hosting with persistence in the late 1990s.  
  I felt that the language was inelegant and the documentation bloody awful, but it got the job done.  
  I used a PHP/MySQL application for bill splitting in a shared house for years.  
  I read that PHP has been improved greatly in recent years, I doubt I'll revisit it though.  
##### VBA  
  My first professional programming work.  Technically not what I was employed to do, however I did get paid for the time.  
  Automating my job down to 30 minutes per day allowed me to automate other processes, then I moved over to IT and here we are 10 years later.  
  I occasionally still dabble with this, Excel is a great platform for toy applications.  
##### PL/SQL  
  Probably the language I have most experience in.  Quite verbose and not particularly fun to work with but generally effective.  
  The main downfall here is the tight coupling to the Oracle ecosystem, which is not well trusted.  
  Personally I rate the database greatly, but most of the Oracle tools are terrible, APEX And Forms are OK.
##### Java  
  I've had formal Java training and dabbled with development in Android and Google App Engine (which I forgot about until just now).  
  I found the JVM concept novel and intriguing, at the time it seemed like the right direction.  
  I have however experienced enough configuration issues to rethink this, my perspective changed when I encountered the tooling around Go.
##### [Go](https://golang.org) 
  I found Go when investigating Google App Engine (initially in Java), which I abandoned because I disliked the clear lock-in nature.  
  Great documentation, tooling and standard library; web servers, simple XML processing, command line integration, concurrency.  
  Not so good for recursion or functional programming.  
  I've used this to generate a web app which generates Oracle DB deployment scripts from a Subversion repository and web scraping LinkedIn for CV generation.
##### LaTeX  
  I was looking for a free pixel perfect reporting solution for my CV, I hate MS Word which was used even for Oracle BI Publisher.  
  I never intended to master Latex, just enough to get a decent layout in a repeatable fashion.  
  LaTeX feels like a dark art, a million ways of achieving things and I never felt like I'd finished.  
  Installation took hours, with tonnes of dependencies but ShareLatex which later merged with [OverLeaf](www.overleaf.com) removes that hurdle.  
##### T_SQL  
  I like to learn through comparisons, overall I think I prefer PL/SQL and the Oracle database in general, however the user management in SQL Server makes much more sense than that in the Oracle database.  The big difference for me is the absence of transactions by default and the lack of views.
##### C#  
  C# was pushed on me during a replatforming exercise at work from Oracle to Microsoft, Azure, BizTalk.  
  I guess the simplest description would be a more succinct Java; no big surprises, not all that exciting but ultimately effective.  
  At the same time I was learning C# I was also learning Visual Studio, .NET Framework, BizTalk and TFS/ VSTS/ Azure DevOps too, that was a fairly steep learning curve.  
  I watched a good [video](https://channel9.msdn.com/Events/dotnetConf/2018/S107) introducing .NET Core and .NET Standard from the perspective of a .NET Framework developer.  It addressed so many of the issues I've encountered while working in the complex .NET Framework BizTalk environment, e.g. dependencies, versioning, fiddling with project files to address issues in the IDE...  
  I'm actually almost excited to get going with .NET Core in VS Code, next on the list.
##### [Haskell](https://www.haskell.org/)   
  Stumbling across lambda functions in C# led me down a functional programming rabbit hole which brought me to Haskell's door.  
  Challenging would be a fair summary, it took a long time and a lot of reading to ultimately discover a solution which is extremely elegant and simple.
  I learnt plenty about functional programming from playing with Haskell for a few weeks, but practically speaking Haskell just doesn't suit my needs.  
  Having said that, it has inspired me to adopt a more functional style and prioritise type safety.  
  I'm particularly attracted to property based testing, e.g. [QuickCheck](http://hackage.haskell.org/package/QuickCheck).  
##### F#  
  Inspired to do practical stuff in a functional style, F# seemed like a perfect contender.  
  I'd reconsider but Rust seemed more exciting.
##### [Rust](https://rust-lang.org)  
  I first heard about Rust on the Mozilla Firefox blog, it sounded interesting, because I'd never worked with a non-garbage collected language, a new tool to add to my toolbox.  It is innovative but also pragmatic, it just feels right, though I'd be lying if I said I was comfortable with it at this point.  
  Rust has a massive learning curve, but a lot of virtues:
  * Fantastic tooling and documentation, better than any other ecosystem I've come across (Go was winning up to this point)
  * Type safety, immutability by default and other functional elements
  * Powerful pattern matching
  * Superb performance and no garbage collection
  * [cross-compilation](https://github.com/japaric/rust-cross)
  * Compile time bug prevention (BorrowChecker) vs run-time debugging, an approach I strongly approve of and Rust's USP.
##### Web assembly
  Interesting alternative to JavaScript in the long term, potentially, Rust is arguably leading the charge with [cross-compilation to wasm](https://github.com/rustwasm).  
  I like the client and server using the same code, but am not keen on dynamic languages on the server, just saving up errors for the future.  


### Additional Reading

In addition to the above I've also considered the following languages, though haven't produced anything yet.  

##### Ruby  
  Installed because it was a pre-requisite for something.  Sass? Less? LaTex? I can't remember now.  
  I read a bit but I simply can't see a use case for Ruby that isn't addressed by other languages I'm already familiar with.
##### Scala  
  I read a lot about Scala a while back, but I'd gone off the JVM idea by then so almost dismissed it.  
  What I read seemed to suggest that it came from a purely theoretical background, overly complex.  
  More recent reading seems to suggest that it is functional first with all the backing support of the Java ecosystem, I may well come back to this.  
##### Python  
  Obviously massive for AI, Neural networks, deep learning and for this reason I'm vaguely interested but don't have any real ideas for projects.
##### Julia  
  Sounds like a great alternative to python, touted as high performing with JIT compilation but not got around to this yet.
##### R  
  Again, data science seems to like this, therefore coule be interesting.
##### Kotlin  
  If I were to create android apps, I'd choose to do it in Kotlin over Java, but otherwise no real interest.
##### [TypeScript](https://www.typescriptlang.org/)
  Type-safe javascript, until web assembly comes along in full this may well be the best front end choice.  
  Hand-in-glove with Angular which seems popular in enterprise software, so well worth knowing, but even the out-of-the-box Angular app feels messy.  I guess the question is about code scalability but I haven't done enough with this to judge yet.  
  I've used AngularJS before and it was nice for my simple use case, but I've seen far more complicated uses get very messy, feels unnecessarily complicated, but this could just be poor implementation.  
##### [Dart](https://www.dartlang.org/)
  An alternative to TypeScript - transpiles to JavaScript and used for mobile app development.  
  Not interoperable directly with JavaScript but I think that this is actually a good thing, however not a priority to investigate this further.