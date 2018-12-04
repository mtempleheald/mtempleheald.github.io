---
title: Domain Driven Design
last-updated: 2018-12-04
---

Domain Driven Design (DDD) is a way of modelling within bounded contexts, using ubiquitous language.  
This is contrary to the traditional enterprise data modelling whereby a single, unified model is the target goal.  
DDD comes from a pragmatic understanding that there are usually multiple ways to perceive the same thing.  

The general approach is as follows:
* Divide the "problem space" (the business) into smaller regions called **bounded contexts** which can be conquered separately
* Identify any **subdomains** which span bounded contexts
    * Core subdomain - essential to the business, start here
    * Supporting subdomain - not quite as essential, but domain-specific and required
    * Generic subdomain - less valuable to the business, can potentially buy off-the-shelf
* Work alongside domain experts, using **ubiquitous language** to properly define domain boundaries and produce a **domain model**
* Perform a **context mapping** exercise to establish a strategic overview of the entire battlefield (domain) to aid in prioritisation and decision making
* Produce and make public **published language** elements which subdomains can interact with
* Identify shared subset of the domain model, the **shared kernel** which can't be changed without cross-team consultation
* Possibly produce an **anti-corruption layer**, code to protext a subdomain from messy parts in or changes to other subdomains

When applied to the hard boundaries defined by microservices, domain driven design becomes the language for agreeing and communicating clear domain/ service boundaries and dependencies.  A good argument for DDD in a microservices environment is provided by Eric Evans [here](https://www.infoq.com/presentations/ddd-microservices-2016).  

There is an important subtlety here, that DDD is about modelling the situation as it stands, in order to understand, prioritise and plan, whereas a microservice architecture is about future design and implementation, it could be tempting to take dangerous shortcuts.  

The benefits of DDD are fairly obvious:
* Supports isolation/ autonomy of teams working on different domains
* Provides a context map to recognise and manage dependencies
* If working with microservices, a natural domain/ microservice boundary should become apparent
* Flexible to change (in a controlled fashion)

The risks are much like any other process/ principle/ philosophy:
* Common understanding - DDD is intentionally ill-defined, not meant to be a step-by-step guide, it can be dangerous to use an interpretiation of DDD in this way
* Context mapping is key to keeping control, yet will always be the first thing to go due to project deadlines
* It can be performed badly (see below) so a false sense of security is established versus not adopting DDD
* Complete isolation does not aid enterprise reporting and management information  


My first experience of DDD was in a digital transformation project, it was performed by an outsourced supplier with limited internal review.  
I had a few issues with this approach in this scenario:
* There was already a fairly mature corporate data model (CDM) which was ignored, as were existing subject matter experts
* Definitions provided were totally absent or woolly at best
* Boundaries were not made clear
    * individual domains/ microservices seemed to perform too many independent functions
    * microservices seemed to directly depend on others, resulting in data syncing which felt wrong and caused performance issues
* Few people involved in the project, myself included for a long time, didn't even know that this was the approach that had been adopted
* There was no visible context map which contributed to the boundaries issue

I've since realised that this was not a problem with the approach of DDD, but with the project itself:
* The project defined X services in the contract, being inflexible to change as domains were discovered through analysis
* The project enforced early sign-off of models rather than evolved the models as understanding improved
* The modellers did not do a particularly good job, often failing to understand context or at least communicate it
* Too many compromises were made in order to hit deadlines, to the point where all the microservices benefits have been lost, not specifically a DDD issue
