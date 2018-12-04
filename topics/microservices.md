---
title: Microservices
last-updated: 2018-12-04
---

So in software architecture evolution terms, microservices are modern but not cutting edge, a precursor to a serverless architecture.  
I'm viewing this from the perspective of the typical company with a fair dependency on technology but not bleeding edge or with unlimited resources and funding.  

I've long recognised the benefits of a service oriented architecture (SOA), where a service is effectively a bunch of stuff relating to a specific business function, e.g. Customer Relationship Management, or Event Management.  These services in turn can be made up of smaller services and services may reference one another, however the service responsibilities remain clear at all times.  
So what is a microservice?

Microservices are notoriously ill-defined, but ultimately microservices are an evolution of SOA, microservices typically:
* are fine-grained, small, modular
* communicate with one another via protocols which are technology agnostic, e.g. JSON/REST
* tend to go hand-in-hand with container technologies such as Docker, Kubernetes, Azure Service Fabric
* may be written using different technologies/ languages/ frameworks but there will be a default position for any company for resourcing reasons
* are loosely coupled, allowing them to be deployed independently

This all makes a lot of sense, different areas of any business move at different speeds at different times, requirements vary greatly.  
So being able to rapidly develop and deploy a fast-moving area without affecting other, stable and sensitive areas is a fantastic capability to have.  
It does bring some questions though:
1. What about shared libraries (DRY principle)?  
2. What about shared data?  
   The obvious one here is a product microservice, where information is captured against a product for the purpose of downstream processing.  
   Is this data managed in the product microservice or the processing microservice?  
3. How fine-grained should the microservices be?  
   Definition of boundaries and responsibilities is key, but not always clear, too fine-grained (nanoservices) and we increase complexity and may encounter network latency issues, not fine-grained enough and we're back in monolith territory.  

There are plenty of discussions around on the topic of microservices and shared libraries, my personal opinion is that:
* general purpose libraries such as logging should be shared (by referencing specific versions)
* business-specific libraries should not be shared, this indicates a lack of understanding of responsibilities which will bite you later on.  

Sharing of data is a difficult one, there are a few options for the product/processing example above:
1. Maintain data in the product service, reference this product service from the processing service.  
   This effectively couples the services, which may or may not be an issue.  
   It could also cause performance issues by increasing network traffic.  
2. Maintain data in the product service, replicate this data to the processing service datastore, probably on a schedule.  
   This has the potential issue that the processing service is using stale data, which may or may not be a problem.  
   I've seen this in action and it caused a lot of difficulty during testing, also, performance issues raised doubts around the overall architecture.  
3. Maintain the data in the processing service.  
   The risk here is that the same information is required by a second processing service, potentially multiple versions of the truth.   
   To mitigate this, good context mapping as part of a domain driven design approach can be useful.  

There is no generic answer to the granularity question, it depends entirely upon the specific business requirements.  
Once a decision has been made though, it is of paramount importance to ensure that the common vision is shared and understood by all stakeholders.  

