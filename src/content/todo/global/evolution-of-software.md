---
title: Evolution of Software - Monoliths to Serverless
last-updated: 2018-11-20
---

The high level evolution of programming is loosely as follows:

1. First-generation programming languages (1GLs), machine level code, closely tied to the underlying physical architecture.
2. 2GLs are a more human-readable abstraction, assembled to machine code but still tied to the underlying physical architecture.
3. 3GLs are more machine independent and programmer-friendly, still compiled to machine code but providing many useful abstractions and syntactic sugar.
4. 4GLs attempt to handle large collections of data at once and move the programmer further from memory management etc.
5. 5GLs attempt to solve a problem given its constraints rather than a human-written algorithm, not yet achieved.  
   3GL and 4GL programming is where most of us live, if we're not developing kernels or compilers.

There's another way to look at the history, in terms of the ways of working:

1. Punch cards and limited physical resources, things had to be right first time, waterfall delivery suited this.
2. Compute power availability introduced imperative programming at scale, things starting to get messy.
3. Procedural and modular programming become the norm for structuring code and automated unit/ system testing comes in, agile starts to make sense.
4. Object-oriented programming (OOP) extends procedural programming by encapsulating related parts in well-defined objects.  
   Building an OOP solution involves building a world made up of a hierarchy of related objects.  
   Automated unit testing of classes and integration testing of solutions is now expected and build/deployment suites are commonplace.  
   This is very much the norm in 2018 though elements of functional programming are creeping in to address problems of complexity, state and concurrency at scale.
5. Declarative programming (4GL) is where the programmer tells the compiler or runtime what to do but not how to do it, e.g. SQL, regexp
6. Functional programming (FP) is a form of declarative programming where (if done correctly) functions are designed to each do a single thing, avoiding state and mutation.  
   Building a solution involves the composition of functions based on the function signatures. The principle being that you don't need to know how a function does what it does, you trust it to do the only job it was designed to do.  
   Functions tend to be smaller than OOP classes and unit testing is just as important. Type-driven automated test suites such as Haskell's QuickCheck can in some cases provide a guarantee that there are no bugs caused for all possible input values (though logic bugs are still possible).  
   Functional programming and OOP are alternative approaches to controlling code but can be used together, e.g. Lambda expressions or C#'s LINQ [When do you choose functional programming over object oriented?](https://stackoverflow.com/questions/2078978/functional-programming-vs-object-oriented-programming#answer-2079678)
7. The growth of "serverless" cloud computing and event-driven computing (IoT) brings a new perspective again.  
   It is still possible to build large solutions on infrastructure we manage ourselves, but it isn't required.  
   Instead, we can compose many functions together, possibly a combination of different programming languages or even paradigms, they need not even be in the same cloud service.

The end result of all of this as I see it is that the real skill for now and the future is not programming, but integration.  
Yes, coding skills are required, but it is the big picture of how these things all interact which is really key.  
This becomes especially apparent when you consider all of the publicly available "AI" services.  
For example Azure's [Sentiment API](https://azure.microsoft.com/en-gb/services/cognitive-services/text-analytics/) is just a function which takes a string and returns a number from 0 to 1 as to how positive the wording seemed.  
Chain this with a pull of data from Twitter relating to your company, a push to an analytics engine, and feed into a dashboard tool to monitor public opinion during a marketing campaign, powerful stuff.
