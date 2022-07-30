# Azure Traffic Manager

Traffic manager works on DNS level so simply provides the caller with the IP address to route to, complete with required headers.  
Traffic manager does not have an IP itself, just a DNS name, you cannot navigate to subdomain.domain.trafficmanager.net, only to a CNAME configured to point to this.  
The benefit this gives over simply DNS is that you can do more sophisticated routing such as geographic routing or load balancing.  
Traffic manager routes on HTTP by default so when configured on top of one of more application gateways

# Azure Application Gateway

Listener (HTTP) -> Rule (redirect) -> Listener (HTTPS) -> Rule (backend) -> HTTP Setting + Backend pool

SSL offloading.
