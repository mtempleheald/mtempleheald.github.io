---
title: Cloud Computing
last-updated: 2018-11-26
---

_Cloud computing_ is a term which ultimately just means hosted externally, but of course it isn't that simple.  
There are many facets to cloud computing and these are likely to be combined in various unique combinations.  
Ultimately, cloud providers are providing a set of services, having learnt from years of experience with service oriented architecture (SOA) practices.

### Infrastructure as a Service (IaaS)

This is the simplest to understand, simply put the hardware is managed by the cloud provider, but configuration is managed by the customer.  
IaaS includes virtual machines, storage, firewalls, load balancers and software bundles.  
Benefits of moving to IaaS from on-premise hosting come down to two things:

- No physical hardware to procure, manage, upgrade, store.
- Relatively simple to scale up though would require downtime and careful control.
- Complete control

### Software as a Service (SaaS)

At the other end of the spectrum to IaaS, SaaS involves out-of-the-box software packages, some of which can be highly configurable.  
This is common where processes and requirements don't vary much between companies, e.g. CRM, ERP, HRM, service desk management.  
The downside here is lock-in, but obvious benefits include:

- No internal development costs, configuration should in theory be simpler and in many cases handled directly by the application users.
- Encourages standard working practices, cheaper for the business processes to adapt to standard solutions, reduces training requirements for new starters.

### Platform as a Service (PaaS)

PaaS is somewhere in between IaaS and SaaS, the cloud providers handles the underlying infrastructure, but the customer handles the application layers, configuration and scaling.  
Depending upon provider, language and framework support may vary, but all seem to favour a container-driven approach.  
Different flavours of PaaS exist too, including Integration Platform as a Service (iPaaS) and Data Platform as a Service (dPaaS) and niche flavours such as Blockchain as a Service (BaaS).  
I'm particularly interested in database PaaS solutions, where the cloud provider manages scaling, patching and analytics of the database platform and developers can focus on data structures and logic.

### [Function as a Service (FaaS)](faas.html)

A key component of the serverless computing architecture, FaaS is a further evolution of PaaS.  
Here even the scaling of the application (function) is handled by the cloud provider.  
This architecture allows developers to focus solely on implementing logic required to meet business requirements.  
It is very cheap, even free to start down this route, but can become very expensive if not managed properly.

FaaS forces a change of approach too, with PaaS it is still possible to build unmaintable monolithic solutions, but with FaaS each function exposes a single endpoint with a single trigger to perform a single process (which may spawn subprocesses).  
This all sounds great, but glancing back to the old days when monoliths went out of fashion the first time and OOP came to the fore, now we have to manage all of these entities, their interactions and document the system as a whole. Luckily this time we've got CI/CD and agile practices to help control this.

### Moving forwards

For companies with a large legacy codebase or significant chunks of on-premise infrastructure IaaS is probably the forseeable future.  
There are also infrastructural elements that will be required regardless of other approaches skimmed over here, e.g. provision of storage accounts and queues.

Almost all companies will, or should, have an element of SaaS, certainly as far as service desk, CRM and ERP are concerned, not to mention word processing, spreadsheets and the like. I don't believe that it is possible for any company to just join a bunch of these together and replace all bespoke software although I dare say they'd like to.

PaaS is a very real solution for most companies for upcoming development.  
Ultimately here we are talking about automation from day 1 and containers all the way down.  
The application code should be completely agnostic to its intended target destination, the container orchestration which handles deployment and scaling probably won't be.

FaaS is perfect for startups and applications which are expected to scale quickly.  
When the scale reaches a critical point though, it may be worth switching to PaaS solutions, where you have to handle the scaling, but it can cost far less.

The main thing from my perspective is that to use these tools effectively there are a few key tenets to adhere to:

- automation from day 1 - CI/CD and even environment configuration is version controlled.
- containerised development - FaaS services are still limited in terms of language support but ultimately all run a flavour of containerisation under the hood anyway, why not keep things simple and work in the same environment.
- integration becomes more important than the code, especially with smaller units, e.g. FaaS.  
  If a function runs slowly, rewrite it, it doesn't even have to be the same language/framework.  
  The real skill becomes having a complete tool set and knowing what to use when, e.g. with my programming experience I'd default to these options
  - C#, Java, Go, F# for everyday backend processes
  - Rust for time-critical stuff
  - JavaScript for front end integration
  - Rust/ Haskell when correctness is most important
- architecture - when developing a function naming, location etc isn't important, but when putting hundreds of these together, it becomes critical.
- documentation - any system-wide architectural decisions need to be communicated, understood and agreed with all stakeholders.
- costs - no company has unlimited budget, it is critical to use the cost monitoring features provided, from day 1, especially if using external or off shore consultants.
