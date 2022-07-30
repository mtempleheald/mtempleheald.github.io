---
title: Continuous Integration (CI), Delivery (CD), Deployment (CD)
last-updated: 2018-11-26
---

Continuous Integration (CI) is almost a mandatory requirement for modern software development.  
Simply put it means commit changes to main branch as often as possible, this then triggers automatic build and test for early verification and feedback.

Continuous Delivery (CD) is an extension to handle releases to higher environments following on from successful build/ test.  
This can be a fully automated, or semi-automated process requiring manual testing and user signoff gateways.

Continuous Deployment (CD) is a step further, where there is no human intervention at any step, all code changes get pushed to production, assuming that all builds, unit test, system tests etc are successful.  
This isn't feasible in all companies and unless working in a greenfield environment it may never be possible, the test confidence might just not be there.

A better, more detailed summary available [here](https://www.atlassian.com/continuous-delivery/ci-vs-ci-vs-cd)

There are hundreds of tools available for the purpose of CI/CD.  
If you want to stick with a single integrated stack:

- Atlassian [Bamboo](https://www.atlassian.com/software/bamboo)
- Microsoft [Azure Pipelines](https://github.com/marketplace/azure-pipelines)
- Amazon [AWS CodePipeline](https://aws.amazon.com/codepipeline/)
- Google [Google Cloud Build](https://cloud.google.com/cloud-build/)
- [GitLab](https://about.gitlab.com/)

Open source and/or popular:

- [Jenkins](https://jenkins.io/) has origins with the Hudson project, built in Java, popular and award winning
- [Concourse AI](https://concourse-ci.org/) - written in Go, requires explicit state management so that even the integration server is disposable
- [CircleCI](https://circleci.com/)
- [Travis CI]() - Free for open source repositories
- [TeamCity](http://www.jetbrains.com/teamcity/) - good integration with Visual Studio and dynamic cloud scaling
- [GoCD](https://www.gocd.io/)

Others detailed [here](https://stackify.com/top-continuous-integration-tools/) in more detail, I've just grabbed those that are referenced from the key players.
