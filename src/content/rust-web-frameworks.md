# Rust Web Frameworks

- [tokio](https://tokio.rs) - Asynchronous runtime suite of libraries providing safety, flexibility and speed.
  - Runtime - safe abstractions over low level OS basics such as I/O, file system, timer and scheduling, the foundation of asyncronous applications
  - [Hyper](https://hyper.rs/) - HTTP client/server library supporting both HTTP1 and HTTP2 protocols
  - Tonic - gRPC client/server library
  - [Tower](https://docs.rs/tower/latest/tower/) - Modularity through reliability - components for retry, load balancing, filtering, rate limiting... Can think of as middleware stack.
  - Mio - minimal abstraction on top of OS I/O
  - Tracing - utilities for observability
  - Bytes - utilities for data manipulation
- [Axum](https://github.com/tokio-rs/axum) - web framework built by the same team who built the tokio stack. Uses Tower services directly rather than creating its own middleware.
- [Warp](https://docs.rs/warp/latest/warp/) -
  - based upon tokio, implements its powerful filters as Tower services.
- [Actix-web](https://actix.rs/) - Typesafe, extremely fast, mature web framework
  Originally based on actix, a general purpose actor based framework, now defers this to newer async/await ecosystem. Actix-web is now independent, 3.3.3 latest version but v4 is based on tokio v1.
  There was a community issue where actix was taken offline for a while, since resolved with new ownership.
- [Rocket](https://rocket.rs) - well documented, focuses on developer experience, heavy use of macros to reduce boilerplate.
  - great for everyday use cases, e.g. simplifying dependencies by wrapping them
  - harder to get into the weeds if required as the framework abstracts this away from you
- [Reqwest](https://docs.rs/reqwest/latest/reqwest/) - easy HTTP client for very simple use cases, often used in tests

The above is based on collating summaries, reviews, comparisons, not real world experience.  
I have dabbled in Rust before, when [Iron](https://github.com/iron/iron) was one of the leading rust web frameworks.
The key takeaway for me is that almost everything is based on hyper or other elements of the tokio stack, so there has to be an element of trust for the tokio-rs team, it might as well be part of the standard library.

## Conclusion

My goals are, in no particular order:

- Building my own microservice platform in Rust, which I am confident to support long term as if it were a production environment which people rely on
- High performance/ low energy use/ low cloud infrastructure bills
- Flexibility but not at the expense of simplicity

Instinctive thoughts are:

- Axum is definitely one to watch but it might be too early for adoption, the clue being that it isn't mentioned on actix.rs.
- Rocket may be best for prototyping/ speed to market and documentation/community seems to be there for support. I do worry about the way it wraps dependencies, e.g. JSON caused issues on my gRPC experiment. This may be a non-issue when I move code to libraries as appropriate.
- Warp may be a happy medium between the highly modular low-level axum and the highly opinionated rocket, but it is also quite new.
- Actix web has a chequered history but is way ahead on maturity amongst supported frameworks at v3.3.3, it doesn't seem to top the benchmarks anymore but still fastest afaik. Realistically for my typical use cases the performance differences aren't that important - data lookup will be the likely bottleneck.

Initial decision:

- Give Axum a chance first - I already have to trust tokio-rs regardless of library choice, this option doesn't add another dependency, let's see what it has to offer. This may simplify dependencies and maximise flexibility, as I can just reference the same underlying components that Axum is built on.
- Keep Rocket in reserve, possibly build some PoCs for self learning but a few lines of boilerplate is a perfectly acceptable compromise for now versus adopting a whole suite of opinionated dependencies.
- Actix-web in reserve if performance issues are encountered. I find this extremely hard to believe for my use cases, benchmarks have to be taken with a pinch of salt.
