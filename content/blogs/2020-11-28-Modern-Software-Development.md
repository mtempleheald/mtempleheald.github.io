# Modern Software Development

I've been working professionally as an Enterprise software developer for 12 years now and I've been dabbling with personal projects a lot longer than that.  I believe in well architected solutions rather than hacking things together quickly, but I'm also pragmatic.  
My motivation is to solve real business issues in an effective way, ensuring that the solution is supportable and sufficiently performant (not code for code's sake).  

At this moment I believe that the process of developing software is fundamentally broken and I'm seriously contemplating my options.  
Let's look at how we got here and where we need to be heading...  


## Loose history of programming

To understand the current state of something it is important to know how we got to this point.  
[Richard Feldman - Next Paradigm Shift in Programming](https://www.youtube.com/watch?v=6YbK8o9rZfI) provides quite a good summary of the history of programming, with a very obvious functional programming bias, in summary:

1. Imperative programming - tell the computer what to do and how to do it, there were no other options in the early days
1. Modular programming - imperative programming broken down into logical structures to make it easier to read and reuse, supported by all modern languages.
1. Functional programming - take a value (or function) and return a value (or function).  Clear separation of data from behaviour.  Hardware was not ready for the data requirements of immutability and distributed computing.
1. Object-Oriented programming - data and behaviour intrinsically linked together.  Became the top paradigm and stayed there for years, as can be seen in any list of the top programming languages.  Many people incorrectly consider OOP the only programming style.
1. Functional programming comeback - hardware now ready, addressing issues about reasoning, performance and mutability concerns.


## Loose history of the SDLC

Early on programming was difficult, time booking of hardware required, mistakes expensive, shortcuts impossible, no choice but to do things properly first time.  

Software estates become larger and more complex, the technical parts "solved" now moving onto wider business solutions.  Designs primarily led by technical team, only seen by the business owners on release, partly because tooling didn't provide any other alternatives.

Tooling evolves, the business starts to expect more visibility and accountability, "back of a fag packet" specifications no longer cut it.  
We become truly waterfall in nature as the designs must be signed off prior to development starting.  
The ownership starts to shift to the business from the technical side and a gradual reduction is seen in the respect afforded to engineers. 
Project management roles gradually become less technical and more sycophantic in nature.

Becomes obvious how time consuming and expensive the waterfall approach is, trial alternatives:

- XP - developers just get on with it, fine if the trust is there and the vision is clear but reporting is absent
- Agile - let the team decide how to do things, but set expectations around preferential behaviour
- Scrum - top-down agile - the team can't be trusted, the senior management need more visibility and control, force some ceremonies on the team.  Becomes synonymous with Agile, the beginning of the end of true agile development.  
- Lean - Scrum isn't working, we're wasting too much time on ceremonies, let's cut those out

This is all a bit tongue-in-cheek but not only is this pattern visible in articles I've read but it directly mirrors my personal experience too.


## Current state of play

The off shore model is fucked!  
Let me be very clear, I have no issues with working with individual off shore developers, I like to think I have built up reasonable relationships in this area.  
However, if you aren't supporting the production software then you shouldn't be building it and you sure as hell shouldn't be designing it!  
Typically off shore staff won't have access to an enterprise production system and there is rarely anything resembling an effective handover.
Basically the cost savings are misleading as they do not represent a holistic view of the end to end process.  If you take into account the non-tangible factors such as staff morale things get even worse.

Agile development is effective, however nobody in enterprise is doing agile development.  Typically they'll be process-less (reactive, risky), waterfall (slow, inefficient) or trying to follow some variant of ScrumBan/FrAgile, i.e another process people don't quite get but go along with and see little benefit from.  
I would describe true agile as organised chaos, everyone can do their bit their way as long as these approaches come together to meet a collective (holistic!) vision to produce an effective and supportable end result.  
This is ultimately how I like to work, I don't (can't) follow a plan, but I always refer back to the vision/goal/target.  
All too often agile is just viewed as "develop quickly" with timeboxes to keep management happy.  
Mostly I think this comes down to the lack of a clear vision.  Product owners are meant to solve this issue, however it is exceedingly rare to find someone who truly understands both the technical and the business requirements sufficiently to make informed decisions.

Project management is ineffective.  
On paper (and over-simplified) project management is the act of balancing scope, time, budget and quality.  
In my experience project managers do not understand the scope and are not interested in learning, and they have no interest in quality.  
The end result of this is that poor quality products are produced which are either late because of scope creep or delivered without important features, leading the customers to find alternative, inefficient methods to fill the void.  Again, this indicates a lack of a holistic vision.  
Oh but high level management is happy because they get green reports every week!


## Trends

Disruption is no longer the exception but the norm.  
Time and again big business gets stuck its "this is how we do things" bubble and starts to stagnate.  
Someone, somewhere sees an opportunity, perhaps they used to work in the industry and got too frustrated so they set up a competitor.  
These startups are free from the bullshit and red tape in enterprise, free from technical debt and embrace new technologies and processes.  
Yes, some of these fail, there are countless possible reasons for this, I'm confident that it is not because the enterprise responds.

OOP solved a very real problem of ever increasing software complexity.
However, in this highly distributed world where the ability to horizontally scale can be the difference between success and failure, it is no longer the most effective approach, yet adds significant complexity.
Functional programming languages (and functional extensions to OOP languages) are on the rise.
Mutability in particular is the enemy of good code, responsible for arguably the majority of live bugs, particularly around concurrency.

In my opinion one of the keys to success (in general but especially in software development) is to move the problem forwards.  
Ultimately this means prefer buildtime bugs over runtime, prefer automated testing (QA) over manual testing and avoid "happy path" bullshit.
A decade ago Java was king, production hosting in the JVM, complex build systems and still production debugging nightmares were commonplace.  
Now there is a rise in languages and compilers which move this problem back to buildtime.
[Rust](https://www.rust-lang.org/) is an extremely popular up and coming language which is built around immutability by default, type safety and the borrowchecker, which collectively make it impossible to experience certain types of bugs in production environments.

Web frameworks (Angular, React, Vue...) solve a real problem; more and more code is running on the client and hand written JavaScript quickly gets out of control.
However, these tend to be bulky bundles which bloat the website they're used on and provide a poor user experience with lazy loading causing pages to jump around.  
There is a rise in languages which compile to JavaScript in addition to TypeScript; [Elm](https://elm-lang.org/) and [Svelte](https://svelte.dev/) are two that I like the look of.  
Elm guarantees no runtime errors, in much the same way Rust eliminate concurrency bugs.  
Svelte simply enables the developer to work in the target technology (html/css/js) yet offers benefits such as consistency, modularity, scoped styling and tiny bundle sizes.
There are some great presentations on YouTube by Evan Czaplicki (Elm) and Rich Harris (Svelte) on the thought processes leading to this new way of thinking, e.g. [Rethinking Reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao).
Web assembly is also on the rise with tools like Blazor, Yew and Seed, which allow non-Node developers the option to share code between front and backend.  
These newer, more lightweight web frameworks play better with others than the large web frameworks.

I personally __hate__ modern web design; every site looks the same, I can rarely find the information I'm looking for, the cookie banners are infuriating and I have little confidence that my choice to decline is being heeded.  I would have no issue with cookies if this were a site that needed it, but I just clicked on a blog, or a homepage somewhere, I haven't seen anything yet, why do you think you deserve access to my data?  Earn it first!
I believe much of this is due to the rise of these bloated frameworks and Google/Facebook are responsible for the rest.  
New browser features such as reading view are a game changer, but marketing teams need to adapt - stop tracking people, start understanding/ tracking your product!  If I want a new doohickey I'll be searching for "doohickey" in DuckDuckGo, make sure your metadata is correct, your SEO is optimised and that the page actually gives me the information I'm looking for.  
I challenge anyone to find a carbon belt drive bicycle with enough info for comparison - it took me weeks and half the sites don't even work in Firefox!

Microservices are the norm now, but this means little if anything.  
Well written code is modularised and easy to reason about in any language/paradigm (within reason), badly written code is not.
Badly written monoliths are still supportable, as long as you're comfortable in the debugger and have sufficient computing resource.  
It takes discipline to write a monolith well and more importantly to ensure that it stays well written over the years.
Microservices are meant to solve that problem (amongst others), it becomes far harder to take shortcuts, but it still happens (sigh!).
Badly written microservices are not supportable, don't even consider microservices if you're not investing in the time to create a functional test suite.  
In this scenario all you've done is replace projects in a monolithic solution with solutions in a distributed monolith but in a far less supportable way.


## Future

I think the current trends are likely to continue:
- functional programming on the rise, it just makes sense for APIs and highly concurrent processes, which is most enterprise use cases 
- languages/ compilers to replace frameworks for all but the most complex applications
- Typesafe languages to continue to rise - TypeScript/Elm/Svelte over JavaScript
- Enterprise continuing to fuck up agile due to interference from above, hierarchy is the enemy of progress.  

My personal projects are likely to follow this pattern:
- Infrastructure - Azure/ Terraform, also consider cheaper alternatives
- Hosting - Docker/Kubernetes/FaaS
- Backend - Rust preferred, C# & maybe Go for immediate employability 
- Frontend - Svelte (static hosting NOT Sapper/node), Elm may be safer but more complex, may be an option if I want the safety guarantees.
  - Keep an eye on Rust WASM projects (Yew, Seed...), ready for when JavaScript is no longer required.  How much compute can move to the client?
  - Keep up/catch up on other web frameworks, React in particular, for employability

What I'd like to see:
- A longer term focus given to software projects.  Writing software is easy, writing good software than can be easily extended and supported is not.  I'm not advocating a return to a waterfall methodology but quality has to be baked in from the start and throughout.  Shortcuts will inevitably slow things down overall and destroy the morale of the people you least want to lose.
- Cross-departmental understanding and collaboration.  I dismiss the contributions of project managers in this very post, however I'm not naive to the burdens upon them, primarily upward reporting.  So why don't we simply fix the issue?  PMs tell dev team what information they need, dev team provides reports/dashboards containing this information.  No more imposed plans, or schedules, the information is there when you want it.  Recognise at the start of a project that this is required and put aside time for it.  If this information isn't important from the start then it isn't important at the end, DO NOT add to delivery pressure by moving the goalposts nearer to the go live date.
- Customer driven design in the frontend.  Does storing these cookies in any way benefit the customer?  Then why are we capturing this data?  Customers have been putting up with this shite for years, we can see through it, honesty will be rewarded by loyalty.  If we insist on capturing the info, be open about exactly how the info is used and why.
- Data driven design in the backend.  Get your data models correct and the code will fall into place naturally, get them wrong and you'll be fighting the code every step of the way.  _DO NOT_ reuse the same data model for different purposes.  Remember that in OOP an object is the data model and its behaviour, so we're not violating DRY principles here.
- Project Management and Architecture working with the teams, not at a distance.  An architect who no longer writes code or provisions infrastructure is no longer an architect.  A PM who doesn't understand the features of a product isn't managing the project effectively.  





