# Sharing environments between projects in Azure DevOps

This is useful for multiple websites held in different projects hosted in the same IIS instance on the same server(s).  Alternatively, for microservices hosted on a Virtual Machine, if deployed independently.

## The issue

Azure DevOps generates the script for you to install a build/release agent on a server, within the Environments tab of the Pipelines section of the Project.

This works fine, the first time.
You can view the results of this in the DevOps portal `https://dev.azure.com/<Team>/_settings/deploymentPools`.
The default names for Deployment Groups (used by releases) is `<Project>-<Environment>`.
The default names for Environments (used by pipelines) is `environment-<environment-id>-<guid>`.
These names can be changed to aid ongoing maintenance.

If you try to create a second agent on the same VM, in the same way, it will do one of 2 things:
- Overwrite the first, meaning that any pipelines which reference this will cease to function
- Fail to create since it can't delete the first agent.
  In this case the second agent always shows as offline and the new pipeline won't run. 
  `Unable to deploy to the virtual machine 'XXX' as the machine is offline`

Others have reported [this issue](https://github.com/MicrosoftDocs/azure-devops-docs/issues/8578) and provided an alternative script.  I am not comfortable just running scripts from the web, I prefer a future proof understanding of the problem.

## The solution

The reason for this issue is that the script generates an agent with a name matching the VM by default.
The DevOps-generated script is one-lined but otherwise not hard to dissect.
In the line which calls `config` we need to change the `agent` parameter to something unique, either by appending the agent folder (`$destFolder` in the script), e.g. HOSTNAME-A3, or with something which indicates the purpose of this agent, e.g. HOSTNAME-ServiceX or HOSTNAME-WebsiteX, in which case we should probably update the script to create a folder name to match this.

## The future

A [proposal](https://developercommunity.visualstudio.com/t/can-environments-be-shared-across-team-projects/676255) has been made to Microsoft to allow environment sharing but doesn't seem active.

Interestingly this was [resolved](https://devblogs.microsoft.com/devops/sharing-of-deployment-groups-across-projects/) in the past for deployment groups, which are used by releases (as opposed to pipelines), so I'd assume that this will come eventually.

