---
title: Projects
last-updated: 2018-11-14
---

Over the years I've worked on quite a few projects.  No two are ever the same, varying in technology, processes, domains, timescales, public visibility...  
Some solo, others collaborative.  
Some paid, others in the interest of learning.  
Here's a quick summary of some of these projects, dates are estimates.


## AQA - Enterprise service bus - upgrade to BizTalk 2016
*2018*

...

## AQA - Enterprise service bus - integration delivery
*2016 - 2018*

...

## AQA - Enterprise service bus - proof of concept
*2016 – 2016*

Alongside the replatforming exercise integration between new and legacy systems needs to be standardised.  
This is to be a collaboration between internal developers and a BizTalk consultancy partner, overseen by architecture, across two sites.  
* ...



As part of a much wider business and technical strategy AQA has decided to implement an enterprise service bus. The aim is for the majority of system-to-system interfaces to flow through BizTalk, the proof of concept was limited to two data interchanges. The development team is split between internal staff and consultants from a partner organisation, split across two working sites.

My personal contributions included:
• Translating the corporate data model (CDM) into a set of canonical XML schemas aligned to business processes.
• Creating and curating a list of well-defined interchanges, defined by the source and target systems, canonical schema and specific datatype. This matrix provides support for estimation and scoping, progress tracking, facilitating communication, auditing of analysis work and ensures that we have a clear view of all interfaces so that omissions and inaccuracies can be corrected.
• Producing JSON schemas to define interfaces for use by current and future interchanges and providing sample files to help illustrate their use.
• Analysing target systems from a technical perspective to ensure that the data they are to receive is both correct and sufficient. The output here is in the form of attribute-level mapping spreadsheets.
• Analysing future interchanges at a higher level to contribute to the big picture view of how data flows through the organisation.

## AQA - Electronic coursework mark submission (development)
*2015 – 2016*

To further diversify online marking capabilities a new customer facing web application for coursework mark capture is required.  
* Delivered by a third party supplier as part of a waterfall project, significant work was required prior to production release by which time the supplier was unavailable.  
* Reworked all aspects of the application to ensure that it met business requirements including:
    * authentication mechanism involving token exchange with bespoke applications and active directory
    * rewriting the key sampling algorithm to ensure that it can be executed multiple times, performs sufficiently well and is supportable
    * fixing UI performance issues caused by the use of inefficient queries and unnecessary caching.  


## AQA - Electronic coursework mark submission (performance testing)
*2015*

Prior to production rollout of the new coursework mark capture platform its performance and that of its integrations must be proven.
* Scripting of automation tests using Neoload for critical paths identified during manual testing, requiring an unusual collection of knowledge (Oracle APEX, JavaScript, regular expressions, HTTP).
* Profiling of script execution, establishing acceptance criteria and identifying pinch points.
* Collaborating with colleagues across many technical disciplines; network, engineering, security, development, quality assurance in order to provide solutions to critical issues encountering during performance testing, this was not a trivial exercise.  


## AQA - Electronic marks processing
*2014 – 2015*

Electronic marking is a key component of exam processing, faster and more reliable than traditional marking.  
To maximise the use of online marking across a wider range of products diversification is required.  
* Delivered 9 Oracle Forms for user maintenance of data required to support integration to a third party SOAP webservice.
* Delivered 9 integration units comprising validation and transformation between database and XML.
* Optimised performance of the most critical integration unit; capturing marks.  
    * Early estimates were for up to 30 million marks in June 2015 with future expansion anticipated.  
    * Actual numbers were roughly half this, there have been no performance issues up until Nov 2018.  
    * Benchmarked to ~ 6 hours for processing 3 million item marks, well within require parameters.


## Item aggregation rules engine
*2014 – 2015*

A typical exam paper has a set of rubrics (rules) which allow or disallow certain combinations of questions/ items.  
These rubrics can be complex and independent of the question paper's ragged hierarchical structure.  
An algorithm is required to efficiently aggregate item marks for all question papers.  
* Designed database structures to hold:
    * human readable representation of aggregation rules, maintained in Oracle Forms
    * sets of valid combinations at both rule level (question) and at leaf node level (item), generated from the human readable counterparts
* Developed processes to efficiently (benchmark 3,000,000 item marks, or 1/10 peak month load):
    * apply rule sets to incoming marks to determine the best aggregated mark < 1 hour
    * update grading application with aggregated marks ~ 2 hours
    * send item mark data to data warehouse for further reporting ~ 4 minutes  


## AQA - Subversion rollout
*2014 – 2015*

Code for each system is managed independently and inconsistently, more standardised version control is required.  
* Defined structure of a new set of SVN repositories for all internal systems, balancing usability with ease of deployment automation.


## AQA - Automated build generation tool
*2014*

Deployment of code is unreliable, time consuming and error prone, this needs to be more automated.  
* Delivered a web application built in Go (Golang) to automate builds:
    * Database builds are 2-step:
        1. generate a single publish script by amalgamating individual scripts and add logging, this is made possible through configuration files aligned to the repository file structure. 
        2. manually login to the database and publish the script
    * Operating system builds are also 2-step
        1. automatically transfer build scripts to the remote server via secure copy (scp)
        2. manually login to the server and execute the deployment (command provided in step 1).  The actual deployment mechanism is written in the server's native language; Linux shell scripts or VMS DCL.


## APEX application architecture - authentication
*2012 – 2013*

The internal APEX security model is inadequate and needs replacing, the login process should reuse Windows credentials from Active Directory.
* Delivered a PL/SQL package built on top of dbms_ldap (validate user credentials) and apex_custom_auth (login to APEX). 
* Wrapped this package in an APEX authentication scheme to make it available for other applications to subscribe to.


## APEX application architecture - authorisation service
*2012 – 2013*

The internal APEX security model is inadequate and needs replacing, application authorisation must be flexible and user-controlled.  
* Delivered a Deployment API to:
    * register application and business owner
    * define "application roles" which represent an area of functionality within the application.
* Delivered an access control portal designed for a business owner to:
    * maintain "user groups" for their application(s)
    * assign active directory users to these user groups
    * link user groups to application roles
* Benefits:
    * Authorisation is entirely data-driven and managed by key users, thus reducing technical operations' admin costs.
    * Fine-grained access (dbms_rls) ensures that unauthorised users cannot access data in protected tables, even from applications which have not yet been developed.


## APEX application architecture - common code
*2012 – 2013*

Many internal APEX applications have evolved to share key features, these should be standardised and shared across applications.  These common services should be designed to reduce development effort, improve application auditing and to help enforce development standards, for as long as Oracle remains the company's database platform of choice.
* Delivered a suite of reusable Oracle PL/SQL packages including:
    * Email - wrapper on apex_mail which works outside an APEX session.
    * File Transfer - externally sourced package built on top of utl_file and utl_tcp.
    * Session locking - wrapper on Oracle SYS package to reduce awkward SYS grants.
    * Logging - Instrumentation package utilising Oracle packages dbms_application_info and dbms_utility to aid consistency when debugging:
        * Developers encouraged to unit test more thoroughly
        * Testers can narrow down the cause of defects thus reducing time taken to correct.
        * Systems administrators can quickly identify the cause of production issues and highlight pain points.


## APEX application architecture - development framework
*2012 – 2013*

The internal APEX standards need to be reviewed to reflect on recent product enhancements and development experience.  These standards should streamline the entire development lifecycle, improve application quality and consistency and ensure that the overall system is truly enterprise class for as long as Oracle remains the company's platform of choice.
* Produced a suite of concise, targeted, formal, version-controlled documents covering standards for each element of the APEX environment, including:
    * server directory structure
    * database link standards for efficient distributed queries
    * code commenting and instrumentation
    * use of Shared Components vs Page Components
    * use of custom HTML, CSS and JavaScript
    * use of common (business non-specific) code
    * version control and deployment


## APEX application architecture - theme
*2012 – 2013*

The internal custom APEX theme is outdated, this needs modernising to insulate against future changes for as long as Oracle remains the company's platform of choice.  
* Designed a suite of replacement theme templates, adhering to the tenets of:
    * Cross-browser compatibility, develop for modern browsers and use polyfills and unobtrusive JavaScript to support legacy browsers
    * W3C standards compliance and the semantic web
    * Mobile-friendly where possible, optimised for office desktop
* Benefits:
    * Mobile use enabled without further development work.
    * Reduced development complexity and enforced adherence to a common standard.
    * Reduced development time for re-skin.
    * Reduced regression testing time after re-skin compared with the adoption of a new theme.
    * Faster loading times due to fewer images and use of newer features.


## AQA - Management information data warehouse
*2012 – 2013*

Management Information and Business Intelligence requirements evolving, need a data warehouse to provide ad hoc reporting capabilities.  
Avoid the pitfalls of the MIS pilot project.  
* Followed an agile Kimball approach, working closely with the product owner to provide a robust data warehouse for all ad hoc reporting needs.
* Defined application architecture of the Oracle 11g data warehouse
    * Naming conventions & logical organisation
    * Functional design patterns & development standards
    * Partitioning and indexing strategies
    * Version control and deployment strategy
    * Tooling to help enforce the above
* Developed a metadata-driven PL/SQL ETL control framework with 8 utility packages for extract and load activities
* Developed the dimension model of the data warehouse using Embarcadero ER Studio Data Architect based upon:
    * Analysis of operational systems and data lineage to identify master data sources
    * Consolidation of these data sources to define conformed dimensions
    * Curation of the enterprise bus matrix
    * Rationalisation of data attributes, translation into measures suitable for flexible and consistent reporting
* Delivered ~35 ETL routines following my documented development standards and design patterns, a collection of:
    * conformed, single-use and junk dimensions
    * slowly-changing dimensions with combinations of type 0, 1 and 2 attributes
    * fact tables at the lowest (transactional) grain as well as from pre-aggregated sources
    * aggregated snapshots of fact tables to provide point-in-time analysis not available at source
* Tuned extraction queries for performance where necessary
* Mapped business and presentation layers using OBIEE, provided proof of concept reports
* Supported end users during report production
* Reviewed code submitted by contract developers, both ETL and OBIEE  


## AQA - Customer profile reporting application
*2012*

The availability of customer information to internal staff is severely limited, this can be improved.  
* Delivered new web application to act as a dashboard of information, leveraging Oracle APEX interactive report capabilities.
* Implemented set of ETL routines to consolidate customer information from various sources including order and invoice summary.


## AQA - Event management workflow application
*2011*

Bespoke training events are utterly flexible, the presenter(s), attendee(s), venue and timing may all be unknown initially, a bespoke workflow application could help.  
* Delivered new Oracle APEX web application and flexible data model to handle the workflow, from inception to invoicing.
* Delivered a suite of tokenised email and letter templates to handle all communication centrally.
* Integrated with finance application by extending existing CSV interface.


## AQA - Finance enhancements
*2011*

Current implementation of Oracle e-Business Suite AR/AP modules needs to be improved.  
* Delivered several key components using XML Publisher; Statements, Invoices and Remittance Advice. 


## AQA - HR reimplementation
*2011*

Current implementation of Oracle e-Business Suite HR module needs to be improved.  
* Delivered several key components using XML Publisher and WebADI
* Implemented bespoke Alerts to underpin sickness, onboarding and leaving processes.
* Enhanced bespoke Discoverer implementation to provide improved HR reporting.
* Collaboration between internal staff and external consultants.


## AQA - Management information data warehouse pilot
*2011*

Management Information and Business Intelligence needs improvement.  
* Evaluated third party built Oracle 10g data warehouse with OWB-generated ETL, custom PL/SQL scheduling and an OBIEE business/ reporting layer.
* IT-led, outsourced, waterfall delivery which ultimately failed to achieve stated objectives.


## AQA - Survey feedback reporting application
*2011*

Training event feedback captured by an external partner, need to analyse this data.  
* Defined data formats for integration and storage.
* Developed APEX web application to facilitate event customisation.
* Delivered PL/SQL parser and graphical reporting using XSLT and Oracle BI Beans Graph in BI Publisher. 


## AQA - Teacher malpractice web application
*2010*

💡 Abuse of the examination process can result in legal proceedings, those involved may be excluded from other engagements with the company.  
* Delivered a secure Oracle APEX application for storing sensitive legal information and provided deep integration with the recruitment system to prevent inappropriate recruitment without compromising details of legal proceedings.


## AQA - Oracle Job monitoring
*2009*

Many technologies for scheduling and batch processing, each with different logging mechanisms, monitoring can be improved.  
* Delivered ETL routines and an APEX dashboard to report across Oracle's dbms scheduler, e-Business suite's concurrent manager and BI Publisher's Quartz scheduler.  


## AQA - Recruitment workflow application
*2008*  

* AQA has a high turnover of seasonal staff which greatly increases administrative workload, this workload can be reduced.  
* Delivered new Oracle APEX web application with deep integration to existing systems, and pixel-perfect reporting using BI Publisher.  
* Agile delivery over several months leveraging existing working relationships with end users.


## Template
*When*

Why:  
What:  
How:  
Status?:   

Problem:   
Solution:   

P:  
S: 

💡 &#x1f4a1; &#128161; &bulb;
☑ 	&#9745;
☑️
✅
✔️ 
&#128736;
📈 📊 📏 📐 
📅 

|:-----------|
|📆 |*2008* |
|💡|AQA has a high turnover of seasonal staff which greatly increases administrative workload, this burden needed reducing.|
|✔️|Delivered new Oracle APEX web application with deep integration to existing systems, and pixel-perfect reporting using BI Publisher.|
|📊|Agile delivery over several months leveraging existing working relationships with end users.|