---
title: AQA - Software Development & Integration
last-updated: 2018-11-19
---

AQA is an independent education charity and the largest provider of academic qualifications taught in schools and colleges in the UK.  

Key achievements:  
* Played a pivotal role in the introduction of a new Microsoft BizTalk Enterprise Service Bus to support digital transformation.  
* Architected, dimensionally modelled and delivered an Oracle 11g data warehouse for ad hoc analytical reporting.  
* Designed and delivered in excess of 10 high quality web applications in Oracle APEX with proven longevity (10 years).  
* Demonstrated a clear proficiency for acquiring new technical skills across multiple technology stacks.  
* Exhibited excellent adaptability, a willingness to collaborate, continuously improve and mentor.  

My role evolved significantly over the years, loosely as follows but with significant overlap:
1. Development, testing and third line support of existing internal Oracle applications.  
2. Relational modelling, design and delivery of new internal applications, primarily Oracle APEX.  
3. Dimensional modelling, data warehouse design and ETL development.  
4. XML and JSON data modelling and integration between on-premise, Azure infrastructure and third party systems.  

My work at AQA touched on every system and spanned many areas of the business including finance, HR, product development, event management, examination processing, management information and business intelligence.  
I've worked independently and collaboratively with business stakeholders, architects, project managers, developers, testers, TechOps and partner organisations.  
I've worked on waterfall projects, projects with various flavours of agile and with several flavours of version control (PVCS, SVN, TFSVC, Git).  

More details of particular projects undertaken at AQA are available below.  


## AQA - Enterprise service bus (BizTalk)
📆 *2016 – 2018*

💡 Existing systems are being replatformed onto the Microsoft cloud stack, integration is required between new and legacy systems.  
Deliver an enterprise service bus to fulfil this role working with our off-shore partner's application development team.  

* Analysis
    * Formulated technical cauterisation strategy for legacy systems out of digital transformation scope
    * Performed functional analysis of integration units, current and future    
* Design
    * Introduced mechanism for defining over 300 integration units and provided most definitions
    * Constructed 9 canonical schemas (XSD) to represent key business areas and maximise reusability
    * Constructed 12 canonical data contracts (JSON API) to support interfaces with the future platform    
    * Curated list of integration endpoints (single source of truth) to facilitate cross-team collaboration
* Delivery:
    * Delivered 15 integration units spanning 4 project phases with SpecFlow system tests
        * Push to Oracle database package
        * Push to Microsoft SQL server stored procedure
        * Bi-directional connections to Azure service bus queue
        * Bi-directional connections to Azure file storage
        * Push to REST API
        * Receive SOAP call from Oracle database via exposed IIS SOAP webservice
        * Push to externally hosted SOAP service
    * Cauterised a significant proportion of two key legacy systems
    * Contributed to continuous integration (CI) pipeline automation using TFS/ VSTS/ Azure DevOps
    * Supported off-shore integration team with data mapping, contextual understanding, technical demonstrations and exploratory testing  

Cross-site collaboration with elements of Waterfall, Scrum and Kanban:
* internal development team responsible for defining integration units and interfaces, delivering integration units
* BizTalk consultancy partner organisation and development contractors responsible for supporting internal development
* internal solution architect responsible for design patterns and liaising with security
* off-shore partner's analysis team responsible for developing the new platform, data structures, integration trigger mechanisms
* off-shore partner's integration team responsible for implementing or consuming defined endpoints
* independent cross-site test team
* internal infrastructure team

🔑 Azure - BizTalk - C# - .NET - MSSQL - Oracle - Agile - Scrum - DevOps - SOAP - REST - JSON - XML - IIS - SpecFlow


## AQA - Electronic coursework mark submission (development)
📆 *2015 – 2016*

💡 Electronic marking is a key component of exam processing, faster and more reliable than traditional marking.  Provide a customer facing web application for coursework mark capture to allow us to diversify our online marking portfolio.  

* Delivered by a third party supplier as part of a waterfall project, significant work required prior to production release.  
* Reworked all aspects of the application to ensure that it met business requirements including:
    * authentication mechanism involving token exchange with bespoke applications and active directory
    * rewriting key sampling algorithm for multiple execution, improving performance and supportability
    * fixing UI performance issues caused by the use of inefficient queries and unnecessary caching.  

🔑 Oracle - APEX - Integration - Performance Tuning


## AQA - Electronic coursework mark submission (performance testing)
📆 *2015*

💡 Evaluate the performance of the new coursework mark capture platform to provide the business with confidence for a production roll-out.  

* Scripting of automation tests using Neoload for critical paths identified during manual testing, requiring an unusual collection of knowledge (Oracle APEX, JavaScript, regular expressions, HTTP).
* Profiling of script execution, establishing acceptance criteria and identifying pinch points.
* Collaborating with colleagues across many technical disciplines; network, engineering, security, development, quality assurance in order to provide solutions to critical issues encountering during performance testing, this was not a trivial exercise.  

🔑 Oracle - APEX - Performance Testing - JavaScript - Neoload - RegExp - HTTP


## AQA - Electronic marks processing
📆 *2014 – 2015*

💡 Electronic marking is a key component of exam processing, faster and more reliable than traditional marking.  
Provide a solution which integrates with our partner organisation's system to allow us to diversify our online marking portfolio.  

* Delivered 9 Oracle Forms for user maintenance of data required to support integration to a third party SOAP webservice.
* Delivered 9 integration units comprising validation and transformation between database and XML.
* Optimised performance of the most critical integration unit; capturing marks.  
    * Early estimates were for up to 30 million marks in June 2015 with future expansion anticipated.  
    * Actual numbers were roughly half this, there have been no performance issues up until Nov 2018.  
    * Benchmarked to ~ 6 hours for processing 3,000,000 item marks, well within require parameters.

🔑 Oracle - Forms - XML - SOAP - Performance Tuning


## Item aggregation rules engine
📆 *2014 – 2015*

💡 A typical exam paper has a set of rubrics (rules) which allow or disallow certain combinations of questions/ items.  
These rubrics can be complex and independent of the question paper's ragged hierarchical structure.  
Provide an algorithm to efficiently aggregate item marks for a question paper based upon user-maintained data.  

* Designed database structures to hold:
    * human readable representation of aggregation rules, maintained in Oracle Forms
    * generated sets of valid combinations at both rule level (question) and at leaf node level (item)
* Developed processes to efficiently (benchmark 3,000,000 item marks, or 1/10 peak month load):
    * apply rule sets to incoming marks to determine the best aggregated mark < 1 hour
    * update grading application with aggregated marks ~ 2 hours
    * send item mark data to data warehouse for further reporting ~ 4 minutes  

🔑 Oracle - Forms - Performance Tuning - Integration - Agile


## AQA - Subversion rollout
📆 *2014 – 2015*

💡 Implement a standardised version control system to improve consistency and confidence across all internal platforms.    

* Defined the structure for a new set of SVN repositories for all internal systems, balancing usability with the need for deployment automation.

🔑 SVN - Oracle


## AQA - Automated build generation tool
📆 *2014*

💡 Provide an automated solution for the deployment of code, to increase developer productivity, improve auditing and reliability of releases.  

* Delivered a web application built in Go (Golang) to automate builds:
    * Database builds are 2-step:
        1. generate a single publish script by amalgamating individual scripts and add logging.
           This is made possible through configuration files aligned to the repository file structure. 
        2. manually login to the database and publish the script
    * Operating system builds are also 2-step
        1. automatically transfer build scripts to the remote server via secure copy (scp)
        2. manually login to the server and execute the deployment (command provided in step 1).  
           Deployment mechanism itself is written in the server's shell; Linux Bash or VMS DCL.

🔑 SVN - Golang - Oracle - Linux - HTML - CSS - VMS - Putty


## APEX application architecture - authentication and authorisation
📆 *2012 – 2013*

💡 Replace existing APEX security model to provide flexible, user-controlled authorisation and authenticate using active directory credentials.  

* Delivered a new APEX authentication scheme built on top of dbms_ldap to validate user credentials against active directory
* Delivered a Deployment API to:
    * register application and business owner
    * define "application roles" which represent an area of functionality within the application
* Delivered an access control portal designed for a business owner to:
    * maintain "user groups" for their application(s)
    * assign active directory users to these user groups
    * link user groups to application roles
* Benefits:
    * Authorisation is entirely data-driven and managed by key users, thus reducing technical operations' admin costs.
    * Fine-grained access (dbms_rls) ensures that unauthorised users cannot access data in protected tables, even from applications which have not yet been developed.

🔑 Oracle - APEX - Authentication - Authorisation - Technical Design - Architecture - LDAP


## APEX application architecture - common code
📆 *2012 – 2013*

💡 Consolidate common components referenced by multiple APEX applications centrally to improve auditing, reduce development effort and help enforce standards, for as long as Oracle remains the company's database platform of choice.  

* Delivered a suite of reusable Oracle PL/SQL packages including:
    * Email - wrapper on apex_mail which works outside an APEX session.
    * File Transfer - externally sourced package built on top of utl_file and utl_tcp.
    * Session locking - wrapper on Oracle SYS package to reduce awkward SYS grants.
    * Logging - Instrumentation package utilising Oracle packages dbms_application_info and dbms_utility to aid consistency when debugging:
        * Developers encouraged to unit test more thoroughly
        * Testers can narrow down the cause of defects thus reducing time taken to correct.
        * Systems administrators can quickly identify the cause of production issues, highlight pain points.

🔑 Oracle - APEX - Technical Design - Architecture


## APEX application architecture - development framework
📆 *2012 – 2013*

💡 Review the current APEX development standards, reflecting on recent product enhancements and development experience, to ensure that applications developed internally are truly enterprise class, for as long as Oracle remains the company's platform of choice.   

* Produced a suite of concise, targeted, formal, version-controlled documents covering standards for each element of the APEX environment, including:
    * server directory structure
    * database link standards for efficient distributed queries
    * code commenting and instrumentation
    * use of Shared Components vs Page Components
    * use of custom HTML, CSS and JavaScript
    * use of common (business non-specific) code
    * version control and deployment  
    
🔑 Oracle - APEX - Technical Design - Architecture


## APEX application architecture - theme
📆 *2012 – 2013*

💡 Internal APEX applications look outdated, provide a more modern theme which is future proof and mobile-friendly.  

* Designed a suite of replacement theme templates (HTML5, CSS3), adhering to the tenets of:
    * Cross-browser compatibility, develop for modern browsers and use polyfills and unobtrusive JavaScript to support legacy browsers
    * W3C standards compliance and the semantic web
    * Mobile-friendly where possible, optimised for office desktop
    * Discourage deviations from web standards made possible by existing themes, e.g. embedded styles and scripts.
* Benefits:
    * Mobile use enabled without further development work.
    * Reduced development complexity and enforced adherence to a common standard.
    * Reduced development time for re-skin.
    * Reduced regression testing time after re-skin compared with the adoption of a new theme.
    * Faster loading times due to fewer images and use of newer features.  

🔑 Oracle - APEX - Technical Design - HTML5 - CSS3 - JavaScript


## AQA - Management information data warehouse
📆 *2012 – 2013*

💡 Management Information and Business Intelligence across the organisation is lacking, provide a platform for ad hoc reporting, avoid the pitfalls of the MIS pilot project.  

* Followed an agile Kimball approach, working closely with the product owner to provide a robust data warehouse for all ad hoc reporting needs.
* Defined application architecture of the Oracle 11g data warehouse
    * Naming conventions & logical organisation
    * Functional design patterns & development standards
    * Partitioning and indexing strategies
    * Version control and deployment strategy
    * Tooling to help enforce the above
* Developed a metadata-driven PL/SQL ETL control framework with 8 utility packages for extract and load activities
* Designed the dimensional model of the data warehouse using Embarcadero ER Studio Data Architect based upon:
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

🔑 Oracle - ETL - Dimensional data modelling - Technical Design - Architecture - Performance Tuning


## AQA - Customer profile reporting application
📆 *2012*

💡 Availability of customer information to internal staff across the organisation is severely limited, provide a dashboard to facilitate this.  

* Delivered new web application to act as a dashboard of information, leveraging Oracle APEX interactive report capabilities.
* Implemented set of ETL routines to consolidate customer information from various sources including order and invoice summary.

🔑 Oracle - APEX - ETL - Technical Design


## AQA - Event management workflow application
📆 *2011*

💡 Bespoke training events are utterly flexible; the presenter(s), attendee(s), venue and timing may all be unknown initially.  
Provide an application to handle this flexibility and reduce administrative burden.  

* Delivered new Oracle APEX web application and flexible data model to handle the workflow, from inception to invoicing.
* Delivered a suite of tokenised email and letter templates to handle all communication centrally.
* Integrated with finance application by extending existing CSV interface.

🔑 Oracle - APEX - BI Publisher - Technical Design - Relational data modelling - Integration - Agile


## AQA - Finance enhancements
📆 *2011*

💡 Update all outgoing communications from Oracle e-Business Suite AR/AP modules to align with current organisation standards.  

* Delivered several key components using XML Publisher; Statements, Invoices and Remittance Advice. 

🔑 Oracle - BI Publisher - e-Business Suite


## AQA - HR reimplementation
📆 *2011*

💡 Re-implement the Oracle e-Business Suite HR module to align with current business processes and improve reporting.  

* Delivered several key components using XML Publisher and WebADI
* Implemented bespoke Alerts to underpin sickness, onboarding and leaving processes.
* Enhanced bespoke Discoverer implementation to provide improved HR reporting.
* Collaboration between internal staff and external consultants.

🔑 Oracle - BI Publisher - e-Business Suite - Discoverer - WebADI


## AQA - Management information data warehouse pilot
📆 *2011*

💡 Management Information and Business Intelligence across the organisation is lacking, provide a platform for ad hoc reporting.  

* Evaluated third party built Oracle 10g data warehouse with OWB-generated ETL, custom PL/SQL scheduling and an OBIEE business/ reporting layer.
* IT-led, outsourced, waterfall delivery which ultimately failed to achieve stated objectives.

🔑 Oracle - OWB - OBIEE


## AQA - Survey feedback reporting application
📆 *2011*

💡 Training event feedback is captured by an external partner, provide an application to bring this data in-house and facilitate analytical reporting.  

* Defined data formats for integration and storage.
* Developed APEX web application to facilitate event customisation.
* Delivered PL/SQL parser and graphical reporting using XSLT and Oracle BI Beans Graph in BI Publisher. 

🔑 Oracle - APEX - BI Publisher - XML - XSLT - Technical Design - Agile


## AQA - Teacher malpractice web application
📆 *2010*

💡 Provide an integrated solution for the administration of legal proceedings stemming from abuse of the examination process to ensure that individuals involved are excluded from further engagements with the organisation.  

* Delivered a secure Oracle APEX application for storing sensitive legal information and provided deep integration with the recruitment system to prevent inappropriate recruitment without compromising details of legal proceedings.

🔑 Oracle - APEX - Integration - Technical Design


## AQA - Oracle Job monitoring
📆 *2009*

💡 Provide a centralised monitoring dashboard to report across the different technologies used for batch processing and scheduling.  

* Delivered ETL routines and an APEX dashboard to report across Oracle's dbms scheduler, e-Business suite's concurrent manager and BI Publisher's Quartz scheduler.  

🔑 Oracle - APEX - BI Publisher - e-Business Suite - Integration - Technical Design


## AQA - Recruitment workflow application
📆 *2008*  

💡 Produce a bespoke recruitment application to reduce administrative workload caused by the necessarily high turnover of seasonal staff.  

* Delivered new Oracle APEX workflow application with deep integration to existing systems, pixel-perfect reporting using BI Publisher.  
* Agile delivery leveraging established working relationships with end users.

🔑 Oracle - APEX - BI Publisher - Integration - Technical Design - Agile
