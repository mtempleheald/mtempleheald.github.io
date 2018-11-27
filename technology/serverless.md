# Serverless architecture


Utilising PaaS offerings from cloud providers to avoid any infrastructure maintenance work.  
Key components:
* Static Hosted Websites
    * [Azure](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website)
    * [AWS](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) 
    * [GCP](https://cloud.google.com/storage/docs/hosting-static-website)
    * Keep the file structure and url in sync and avoid middleware, buttons no longer submit, they call APIs via JavaScript running client side.
* Cloud functions [Azure](https://azure.microsoft.com/en-gb/services/functions/) [AWS](https://aws.amazon.com/lambda/) [GCP](https://cloud.google.com/functions/)
    * Functions triggered via web hooks used to host API endpoints for access from client side code
    * Data transformation functions to be called from other functions or background batch jobs
* Batch jobs
  * Longer running processes not suitable for cloud functions, only use if necessary!
* Message queues
  * A good way of decoupling components to allow downtime etc, should be short lived
