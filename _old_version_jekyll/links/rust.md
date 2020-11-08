--- 
title: Links to Rust resources
last-updated: 2018-12-07
---

[Rust Home](https://www.rust-lang.org)  
[Documentation](https://doc.rust-lang.org/)  
[Standard Library](https://doc.rust-lang.org/std/)  
[Rust By Example](https://doc.rust-lang.org/stable/rust-by-example/)  
[Crate Registry](https://crates.io/)  

[Collections](https://doc.rust-lang.org/std/collections/)  
[Error Handling](http://blog.burntsushi.net/rust-error-handling/)  
[Destructuring and Pattern Matching](http://pzol.github.io/getting_rusty/posts/20140417_destructuring_in_rust/)  
[? operator in Rust - for Option and Result types](https://m4rw3r.github.io/rust-questionmark-operator)  

[Rust Containers (not those containers) Cheat Sheet](https://docs.google.com/presentation/d/1q-c7UAyrUlM-eZyTo1pd8SZ0qwA_wYxmPZVOQkoDmH4/mobilepresent#slide=id.p)  
[Rust Iterator Cheat Sheet](https://danielkeep.github.io/itercheat_baked.html)  
[Rust Traits](https://llogiq.github.io/2015/07/30/traits.html)  
[Move/Clone/Copy Stack vs Heap](http://jeenalee.com/2016/08/29/move-clone-copy.html)  

[Tips to not fighting the borrow checker (Reddit)](https://www.reddit.com/r/rust/comments/5ny09j/tips_to_not_fight_the_borrow_checker/)  
[Understanding Vec for efficiency](https://markusjais.com/unterstanding-rusts-vec-and-its-capacity-for-fast-and-efficient-programs/)  

[Rust 2018 Macros](https://l.facebook.com/l.php?u=https%3A%2F%2Fblog.rust-lang.org%2F2018%2F12%2F21%2FProcedural-Macros-in-Rust-2018.html%3Ffbclid%3DIwAR1pRgVLEt_6d9hpqvN4aHL8icgeP_v_uEJs3MrXc9JXtiXaImBw1k4Fosc&h=AT2AA8lcsV5jjUU1fy9y4ULr3kfT3DPUHUUAbYMQCantil-jcbvVeio1_vim7qw0FoIu-IPhjrscURf6jN-4rPZiMg2nqhLc7guqmQfkXF9zFNU1rX6IcEwntWJGGGfcSg)  


### Strings

*String is a growable, heap-allocated data structure whereas str is an immutable fixed-length string somewhere in memory.*  
[str vs String](http://www.ameyalokare.com/rust/2017/10/12/rust-str-vs-String.html)  
[StackOverflow String vs str](https://stackoverflow.com/questions/24158114/what-are-the-differences-between-rusts-string-and-str/24159933#24159933)  
[String vs &str in Rust Functions](http://hermanradtke.com/2015/05/03/string-vs-str-in-rust-functions.html)  
[Function accepting either String or &str](https://stackoverflow.com/questions/32723794/how-do-i-write-a-function-that-takes-both-owned-and-non-owned-string-collections/32724666#32724666)  


### Continuous Integration and Continuous Deployment

[Travis CI - Building a Rust Project](https://docs.travis-ci.com/user/languages/rust/)  
[Habitat by Chef](https://bldr.habitat.sh/#/pkgs/core/rust/latest)  

### WebServers

[Good list of web framework options in Rust](https://github.com/flosse/rust-web-framework-comparison)  
[Good intro into options available for Rust webservers](https://wiki.alopex.li/AnOpinionatedGuideToRustWebServers)  
[Web Templating in Rust](http://www.arewewebyet.org/topics/templating/)  
[Basic web server using Iron framework](https://www.jamestease.co.uk/blether/writing-a-basic-json-web-server-in-rust-using-iron)  
[Using Iron framework in practice](https://wiki.alopex.li/ActuallyUsingIron)  

### Serverless

[AWS Lambda Rust Runtime, the new way to do serverless Rust on AWS](https://github.com/awslabs/aws-lambda-rust-runtime)  
[Rust on AWS Lambda](http://julienblanchard.com/2015/rust-on-aws-lambda/)  
[Rust on AWS Lambda with Neon](https://dev.to/kayis/rust-on-aws-lambda-with-neon--cloud9--4el7)  


### Web Assembly

[Rust + WebAssembly + Webpack - getting started](https://medium.com/@ianjsikes/get-started-with-rust-webassembly-and-webpack-58d28e219635)  
[Pure Rust web application](https://medium.com/@saschagrunert/a-web-application-completely-in-rust-6f6bdb6c4471)  
[Rust + React + WebAssembly](https://www.fullstackreact.com/articles/rust-react-and-web-assembly/)  


### Libraries

[Rust](https://github.com/rust-lang/rust/)  
[Cargo](https://github.com/rust-lang/cargo/)  

[toml-rs](https://github.com/alexcrichton/toml-rs) - TOML encoding/decoding in Rust  

[Tide](https://github.com/rust-net-web/tide) - Modular web framework, bleeding edge  
[Rocket](https://rocket.rs/) - modern, lightweight web framework, requires nightly  
[Iron Framework](http://ironframework.io/) - heavyweight web framework  

[rustwasm](https://github.com/rustwasm) - Official WASM code including wasm-bindgen  
[stdweb](https://github.com/koute/stdweb/) - Rust bindings to the Web APIs for Rust-JS interoperability  

[QuickCheck](https://github.com/BurntSushi/quickcheck) - property based testing  

[Diesel](http://diesel.rs/) - ORM & query building in Rust  

[Piston](http://www.piston.rs/) - game engine  

[TensorFlow in Rust](https://github.com/tensorflow/rust)  
[Juice - The Hacker's Machine Learning Engine (formerly known as leaf) ](https://github.com/spearow/juice)  

[Android RS Glue](https://github.com/tomaka/android-rs-glue) - Rust on Android  

[rust-snake-wasm](https://github.com/yiransheng/rust-snake-wasm) - Snake game written in Rust + WebAssembly  

[Terrarium by Fastly Labs](https://www.fastly.com/blog/edge-programming-rust-web-assembly) - Edge Programming with Rust and WebAssembly  

### Other sites of use  

[A list of libraries which may be worth a look, a little out of date perhaps](http://hollaforums.com/thread/679265/technology/rust-general-1-rewrite-it-in-rust.html])  