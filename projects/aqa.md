---
title: Projects
last-updated: 2018-11-14
---

Over the years I've worked on quite a few projects, no two projects are ever the same:
* Process
    * Waterfall vs Agile (or something in between)
    * Solo vs local vs geographically dispersed vs outsourced off-shore development
* Technology
    * Oracle vs Microsoft
    * Cloud vs internal hosting
    * 4GL frameworks (APEX, Forms, BI Publisher) vs 3GL programming languages (C#, Java, Go, Rust, Haskell, Powershell)
    * Git vs TFSVC vs SVN vs PVCS vs None(!!!)
    * Application development vs database design vs integration
* Business areas
    * Finance
    * Human Resources and external human resources
    * Product development
    * Event management
    * Examination processing
    * Management Information and Business Intelligence
* Reimbursement
    * Paid vs continuous improvement  
  

A list of some of the more noteworthy projects are listed below.


## Template
📆 *When* 

💡 Project vision  <!--  &#x1f4a1; &#128161; https://www.projecttimes.com/articles/how-to-write-a-project-vision-statement.html -->  

🛠 *ways of working* <!--  &#128736; -->  
* Key contributions

---------------------------

Also considered:

Why:        vision  
What:       contributions  
How:        ways of working  
Status?:    feels like showing off  

Problem:    vision rephrased  
Solution:   contributions + ways of working  

-----------------------

## AQA - Enterprise service bus (BizTalk)
*2016 – 2018*

Existing systems are being replatformed onto the Microsoft cloud stack, integration is required between new and legacy systems.  
Deliver an enterprise service bus to fulfil this role working with our off-shore partner's application development team.  

* Analysis
    * Formulated the technical cauterisation strategy for legacy systems out of scope of digital transformation
    * Performed functional analysis of integration units, current and future    
* Design
    * Introduced mechanism for definining over 300 integration units and provided most of these definitions
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

## AQA - Electronic coursework mark submission (development)
*2015 – 2016*

Electronic marking is a key component of exam processing, faster and more reliable than traditional marking.  
Provide a customer facing web application for coursework mark capture to allow us to diversify our online marking portfolio.  

* Delivered by a third party supplier as part of a waterfall project, significant work was required prior to production release by which time the supplier was unavailable.  
* Reworked all aspects of the application to ensure that it met business requirements including:
    * authentication mechanism involving token exchange with bespoke applications and active directory
    * rewriting the key sampling algorithm to ensure that it can be executed multiple times, performs sufficiently well and is supportable
    * fixing UI performance issues caused by the use of inefficient queries and unnecessary caching.  


## AQA - Electronic coursework mark submission (performance testing)
*2015*

Evaluate the performance of the new coursework mark capture platform to provide the business with confidence for a production roll-out.  

* Scripting of automation tests using Neoload for critical paths identified during manual testing, requiring an unusual collection of knowledge (Oracle APEX, JavaScript, regular expressions, HTTP).
* Profiling of script execution, establishing acceptance criteria and identifying pinch points.
* Collaborating with colleagues across many technical disciplines; network, engineering, security, development, quality assurance in order to provide solutions to critical issues encountering during performance testing, this was not a trivial exercise.  


## AQA - Electronic marks processing
*2014 – 2015*

Electronic marking is a key component of exam processing, faster and more reliable than traditional marking.  
Provide a solution which integrates with our partner organisation's system to allow us to diversify our online marking portfolio.  

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
Provide an algorithm to efficiently aggregate item marks for a question paper based upon user-maintained data.  

* Designed database structures to hold:
    * human readable representation of aggregation rules, maintained in Oracle Forms
    * sets of valid combinations at both rule level (question) and at leaf node level (item), generated from the human readable counterparts
* Developed processes to efficiently (benchmark 3,000,000 item marks, or 1/10 peak month load):
    * apply rule sets to incoming marks to determine the best aggregated mark < 1 hour
    * update grading application with aggregated marks ~ 2 hours
    * send item mark data to data warehouse for further reporting ~ 4 minutes  


## AQA - Subversion rollout
*2014 – 2015*

Provide a standardised version control system to improve consistency and confidence across all internal platforms.    

* Defined the structure for a new set of SVN repositories for all internal systems, balancing usability with the need for deployment automation.


## AQA - Automated build generation tool
*2014*

Provide an automated solution for the deployment of code, to increase developer productivity, improve auditing and reliability of releases.  

* Delivered a web application built in Go (Golang) to automate builds:
    * Database builds are 2-step:
        1. generate a single publish script by amalgamating individual scripts and add logging, this is made possible through configuration files aligned to the repository file structure. 
        2. manually login to the database and publish the script
    * Operating system builds are also 2-step
        1. automatically transfer build scripts to the remote server via secure copy (scp)
        2. manually login to the server and execute the deployment (command provided in step 1).  The actual deployment mechanism is written in the server's native language; Linux shell scripts or VMS DCL.

## APEX application architecture - authentication and authorisation
*2012 – 2013*

Replace existing APEX security model to provide flexible, user-controlled authorisation and authenticate using active directory credentials.  

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


## APEX application architecture - common code
*2012 – 2013*

Consolidate common components referenced by multiple APEX applications centrally to improve auditing, reduce development effort and help enforce standards, for as long as Oracle remains the company's database platform of choice.  

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

Review the current APEX development standards, reflecting on recent product enhancements and development experience, to ensure that applications developed internally are truly enterprise class, for as long as Oracle remains the company's platform of choice.   

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

APEX applications look outdated, provide a more modern theme which is future proof and mobile-friendly.  

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


## AQA - Management information data warehouse
*2012 – 2013*

Management Information and Business Intelligence across the organisation is lacking, provide a platform for ad hoc reporting, avoid the pitfalls of the MIS pilot project.  

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

Availability of customer information to internal staff across the organisation is severely limited, provide a dashboard to facilitate this.  

* Delivered new web application to act as a dashboard of information, leveraging Oracle APEX interactive report capabilities.
* Implemented set of ETL routines to consolidate customer information from various sources including order and invoice summary.


## AQA - Event management workflow application
*2011*

Bespoke training events are utterly flexible; the presenter(s), attendee(s), venue and timing may all be unknown initially.  
Provide an application to handle this flexibility and reduce administrative burden.  

* Delivered new Oracle APEX web application and flexible data model to handle the workflow, from inception to invoicing.
* Delivered a suite of tokenised email and letter templates to handle all communication centrally.
* Integrated with finance application by extending existing CSV interface.


## AQA - Finance enhancements
*2011*

Update all outgoing communications from Oracle e-Business Suite AR/AP modules to align with current organisation standards.  

* Delivered several key components using XML Publisher; Statements, Invoices and Remittance Advice. 


## AQA - HR reimplementation
*2011*

Re-implement the Oracle e-Business Suite HR module to align with current business processes and improve reporting.  

* Delivered several key components using XML Publisher and WebADI
* Implemented bespoke Alerts to underpin sickness, onboarding and leaving processes.
* Enhanced bespoke Discoverer implementation to provide improved HR reporting.
* Collaboration between internal staff and external consultants.


## AQA - Management information data warehouse pilot
*2011*

Management Information and Business Intelligence across the organisation is lacking, provide a platform for ad hoc reporting.  

* Evaluated third party built Oracle 10g data warehouse with OWB-generated ETL, custom PL/SQL scheduling and an OBIEE business/ reporting layer.
* IT-led, outsourced, waterfall delivery which ultimately failed to achieve stated objectives.


## AQA - Survey feedback reporting application
*2011*

Training event feedback is captured by an external partner, provide an application to bring this data in-house and facilitate analytical reporting.  

* Defined data formats for integration and storage.
* Developed APEX web application to facilitate event customisation.
* Delivered PL/SQL parser and graphical reporting using XSLT and Oracle BI Beans Graph in BI Publisher. 


## AQA - Teacher malpractice web application
*2010*

Provide an integrated solution for the administration of legal proceedings stemming from abuse of the examination process to ensure that individuals involved are excluded from further engagements with the organisation.  

* Delivered a secure Oracle APEX application for storing sensitive legal information and provided deep integration with the recruitment system to prevent inappropriate recruitment without compromising details of legal proceedings.


## AQA - Oracle Job monitoring
*2009*

Provide a centralised monitoring dashboard to report across different technologies we use for batch processing and scheduling.  

* Delivered ETL routines and an APEX dashboard to report across Oracle's dbms scheduler, e-Business suite's concurrent manager and BI Publisher's Quartz scheduler.  


## AQA - Recruitment workflow application
*2008*  

Provide an application to reduce the administrative workload caused by the necessarily high turnover of seasonal staff.  

* Delivered new Oracle APEX workflow application with deep integration to existing systems, and pixel-perfect reporting using BI Publisher.  
* Agile delivery leveraging established working relationships with end users.
