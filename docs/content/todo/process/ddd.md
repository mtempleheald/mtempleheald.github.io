---
title: Domain Driven Design
last-updated: 2018-12-04
---

Domain Driven Design (DDD) is a way of breaking up a business' complex and evolving software requirements into manageable chunks, ensuring that this structure is tied directly into the codebase.  It represents a pragmatic realisation that the traditional enterprise modelling approach involving the production of a single, unified and understood data model is exceedingly difficult to achieve.  Recently DDD has been used to define boundaries for software development using microservices.  

The benefits include:
* Flexibility to change due to the modular, loosely coupled design, but controlled
* Agreement on *ubiquitous language* between software development team and domain experts helps to break down barriers for testing and support
* Well-defined **bounded contexts** for  **domains** and **subdomains** help maintain focus, allow parallel delivery of isolated components
* The **context map** provides global oversight helping to ensure that each subdomain bounded contexts are clear to relevant stakeholders
* The well-defined bounded context is a fairly natural fit for defining [microservice boundaries](https://www.infoq.com/presentations/ddd-microservices-2016)
* The well-defined bounded context is also a natural fit for defining data marts used for management information  

There are some notable downsides too:
* Heavyweight process, not easy or cheap to apply
* DDD is fairly loosely defined, yet there are many steps in the process, all too easy to skip over important steps under project conditions

[Overview of key components](https://en.wikipedia.org/wiki/Domain-driven_design)  
[Glossary of terms](http://dddcommunity.org/resources/ddd_terms/)  
[Quick Summary including motivation](https://medium.com/the-coding-matrix/ddd-101-the-5-minute-tour-7a3037cf53b8)  


## Implementation

Much of the stuff above makes a lot of sense, but there are so many things which obviously need to be understood to effectively implement software using a DDD approach.  

Starting with [Domain Logic](https://enterprisecraftsmanship.com/2016/08/25/what-is-domain-logic/).  
This is the implementation of the business rules, validation, exception scenarios which are captured during analysis, workshops, discussions with domain experts.  
The trick here is to keep the implementation pure by moving side effects to the edges, the domain logic should know nothing about data stores, APIs, UIs etc.  
The domain logic can then be unit tested very easily and tied directly back to business requirements/ decisions/ value.  

Taking this further we need to consider [Domain Model Isolation](https://enterprisecraftsmanship.com/2016/09/01/domain-model-isolation/).  
Not only do we want to remove side effects from our easily tested domain logic, we also want to shield domains from other domains, the argument here is about battling complexity.  
We achieve this by relying on well-defined bounded contexts and dependency injection.  

I personally found [this diagram](https://imgur.com/NnpYQ65) helpful in understanding the moving parts involved and what they should and shouldn't be allowed to communicate directly with.  

A practical example of when an application (UI, API) needs to defer responsibility to a domain service is available [here](https://enterprisecraftsmanship.com/2016/09/08/domain-services-vs-application-services/).  
An example of a DDD refactoring exercise is available [here](https://blog.pragmatists.com/refactoring-from-anemic-model-to-ddd-880d3dd3d45f).  


## Practical Experience

My first experience of DDD was during a digital transformation project; existing systems to be reimplemented in Azure, off shore by a partner organisation.  
This fixed price project was planned for 3 years, 7 iterations and had clear scope to replace a defined set of existing applications.  
Integration using an ESB (where I fit in) was a collaborative exercise between the partner organisation and us, interfaces defined by us.  

I left the company part way through this project, nearly 3 years in and I'd estimate at best half way through.  
Looking back at this project having now researched DDD, I have a few observations/ concerns with the approach taken:
* The fairly mature corporate data model (CDM) was ignored as were existing technical subject matter experts when developing the domain model.  
  Perhaps this is acceptable in greenfield DDD, but I am uncomfortable with anyone ever consciously ignoring relevant information.  
* I had never heard of DDD, in fact 3 years into the project I never heard the words uttered, nothing beyond "domain model" for which noone could tell me the purpose.
* The domain model was shared but definitions were not provided, or were woolly at best, no sign of any published language elements.
* There was a context map which I glimpsed once, maintained by an internal solution architect, but it is only now that I realise its purpose.  
* Bounded contexts were not defined (or shared at least), these could be partially inferred from subdomain models, however there was clearly data shared across domains.  
  This was not a big deal for us, all the development was off shore, but it caused a few performance issues during testing. 
* The project involved multiple stages of documentation and model sign off, very waterfall in approach.  
  This feels contrary to the flexibility which DDD is touted to provide.  
* Projects iterations were iterations by name only, they were not building upon each other, but covering different scope entirely.  
* One particular three stage workflow that I was familiar with had stages 1 and 3 but not 2 covered by the DDD scope within a single domain.
  This blurred the bounded contexts quite considerably, complicating integration and suggesting to me a lack of understanding of DDD principles, namely jumping to a solution before understanding the problem space.  
* Integration components were not understood up front, yet a fixed number of integration components were defined in the contract.  
  This led to compromises whereby some integration was point to point, some through the ESB, overall negating some of the benefits of a DDD mindset.  

Other non-DDD concerns but highlighting because they may explain some of the above issues:
* Very limited internal review of outsourced development.  
* Very limited internal review of outsourced test coverage.  
* Waterfall approach to documentation and model sign off, presumably due to the fixed price contract, horrendous admin and resourcing costs as a result.  
* Many design compromises in the interest of time saving resulted in a general feeling of poor overall quality.  



## Summary

Overall I can certainly see the benefit of many of the DDD processes and artefacts.  
I also feel that it is important that it is used appropriately and if used then this decision should be clearly communicated.  

Pros:
* Code, tests, documentation all in the same ubiquitous language - great!  No more knowledge silos (in theory)!  
* Context-bounded data and process modelling - I've done enough data modelling to recognise the practical benefits of this pragmatic approach.  
* Modular design and consistent naming - I've always been a believer in this, whether the code is imperative, object-oriented or functional.  
* Flexible, decoupled architecture allowing different domains to evolve independently and at different speeds - more an acknowledgement than a choice.  
* The domain, not the UI is the driver for design - this is key to a good robust design which is open to enhancement.  

Cons:
* Loosely defined process - processes which are fairly loosely defined can be very difficult to manage appropriately, sometimes worse than no process at all, success depends entirely on the people involved.  
* Heavyweight process - despite being fairly loose there are several key components to the approach and it falls apart without these, first and foremost bounded contexts.  
* Not great for technical solutions or integration where external dependencies may need to be fed into the domain (e.g. reference data for an external webservice).