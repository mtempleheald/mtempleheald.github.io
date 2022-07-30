# Multiproduct, Multiteam Branching Strategy & Deployment

## Background

I was working at a company whose current software estate included multiple independent CMS websites hosted in separate Sitefinity instances (.NET Framework, IIS).
These websites had been left to rot, were running old versions of the software and the software team were unable to respond effectively to changing business requirements.
The decision was made to consolidate the different sites into a single multisite instance to maximise code sharing and faciliate easier upgrades and security patches.
This migration was planned over a very short timescale and therefore third party service providers were needed to make up the developer resource shortfall.

## The situation

- 1 .NET Framework MVC solution with global configuration and shared components
- IIS Hosting on Windows VMs, limited to 3 environments (no infrastructure automation, sadly):
  - QA to test components
  - staging to build and test website
  - highly available production environment
- Half a dozen concurrent projects, spread across staff in 3 companies
- Waterfall project delivery and business-led manual testing timescales (yes, I know!)
- Azure DevOps hosted git repositories
- Undecided repository structure/ branching strategy/ deployment mechanism and little time to implement

## Requirement consideration

- common upgrade mechanism for all products (1 product == 1 website == 1 project == 1 team)
  - choose monorepo - this way only one version of the solution needs upgrading
- Independent development of different products
  - use git branches to keep products separate without the need for synchronous communication between teams
  - standardise where possible for a consistent history and to aid centralised governance
- Independent deployment of different products to the same environment
  - partial deployments from independent pipelines/branches proved too difficult to manage
  - merging both products to a common branch and deploying using a master pipeline is more reliable (if merge conflicts can be handled)
- Decoupled products which can be deployed in different orders to different environments
  - we need to merge products together for deployment but must not couple, so don't pull code down from this "environment" branch
- With all of these independently developed branch merging together we need to avoid merge conflicts
  - identify the shared elements and see how best to manage each

## The solution

- Deployment through Azure DevOps pipelines
  - yaml release pipelines provide better audit trail
  - entire solution built and deployed together, ensuring that all products build when combined
- Environment branches used to join different products together for deployment
  - _never_ merge these back down into product branches to avoid coupling.
  - only release branches ever merged (PR) to environment branches. This ensures that any environment contains a known version of each product.
- Maintain a separate develop branch for each product, for the lifetime of a project
  - these branches based off a root master/main and should be pulled down regularly as usual.
  - development can loosely follow a git-flow process from here, features and fixes to the relevant develop branch, hotfixes to master
- Short-lived pieces of work can be based off master as hotfixes
- Do not change shared files within projects if possible, communicate the changes across teams if not
  - `*.csproj` project files - .NET Framework lists specific files, which causes many merge conflicts.  
    Use wildcards to avoid ever having to change this file, this is possible because Sitefinity is a consistent framework, use hotfix for adding new patterns.
  - `*.yml` pipelines - treat these as hotfixes, add check for presence of project before attempting to build
  - `Web.config` + transformations - don't make breaking changes, add redirect rules, new config values etc as hotfixes
  - `*Config.config` + transformations - Sitefinity configuration - don't make breaking changes, treat changes as hotfixes
  - `Sitefinity.lic` licence file - treat as hotfix
