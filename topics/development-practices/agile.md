# Agile Development Practices

## Introduction

I've been working in software development now for a decade, using a multitude of technologies to provide solutions within many business areas.  I've been directly involved in data modelling, testing (manual and automated), technical analysis, development (UI and backend services) and DevOps environment automation.  
During this time I've picked up on a few things (in no particular order):
* Things work best in small groups.  
  * Working alone you either second guess yourself and fail to deliver or miss important factors, depending on your mentality
  * In large groups no-one takes responsibility, resulting in time wasted discussing the planning of plans
* The closer you are to the person with the requirements the better (within reason)
  * I have at times changed code while the end user is sat next to me.
  * I have also been blocked from talking to end users directly, these projects don't end well, IT-led projects rarely do.
* The earlier you can anticipate or demonstrate an issue the better
  * Code reviews are a very effective form of testing.
  * Automating unit tests can save weeks of effort down the line
  * Automating system tests is harder but essential, well worth the effort.
  * Automating integration tests is just as effective but an order of magnitude harder to do, so design for modularity and unit testing.
  * Test to an appropriate level
    * software designed for employees needn't be perfect as long as there's a bugfix process.
    * software designed for external human resources needs to be better but not perfect, apologies and incentives can fix issues.
    * software designed for customers requires more testing, or they don't re-order, you can combat through incentives though.
    * software representing your key algorithms, that underpin your reputation - test thoroughly!!!
* The second a plan is, ahem, planned, it is wrong, so don't bother
  * I firmly believe that in software development you do not need a plan if you have a prioritised list and an understanding of dependencies.
  * Another way of putting this is spend useful time understanding to avoid wasting time (re)planning.
  * An important point to make here is that delivery timescales do need to be managed, but not during day-to-day development.  
    So capture estimates and work rates and use these to predict, avoid non-delivery and support resourcing requests.
* Data is key
  * Data is at least as important as any other factor in both the software and the process of delivering it.
  * Data must be captured at a low enough level to satisfy all requirements - pre-aggregate at your peril.
  * The process of data modelling and the process of software development need to be aligned, it is surprising how often they are not.
* Writing documentation is boring, rarely appreciated but sometimes essential for shared understanding and long term support.  
  Where is is written, the closer it can live to the code (or data) the better.

---

## Agile Manifesto

It turns out that there's a term for working in the way I prefer - Agile.  
There's little to disagree with in the [Agile Manifesto](http://agilemanifesto.org/).

__Individuals and interactions__ over processes and tools  
__Working software__ over comprehensive documentation  
__Customer collaboration__ over contract negotiation  
__Responding to change__ over following a plan

It is important to note here, however, that it says __over__ not __instead of__.  It is usually important to include elements from the right hand side in moderation.

---

## Agile in practice

My experience since the agile buzzword came to my attention is that people who go around advocating it are generally the least agile of all, especially those in managerial positions.  More often than not the word is used to justify a lack of direction and ownership, both of which are essential elements for successful delivery.  

I've lost count of the number of projects I've worked on and the number of people I've worked with, but successful projects consistently demonstrate clear patterns:
* The vision is clear before any code is written.
* The status of the project is clear throughout.
* Individual responsibilities are understood by all involved.
* There is evidence of trust between team members and those they report to.
* The team is self-organising, motivated and engaged.

Ultimately, agility is a culture and buy-in can't be forced.  
In a nutshell I consider an agile approach to favour understanding over planning and verification as early as possible.

---

## Agile Methodologies

It is rare for people to advocate Agile without subscribing to a formal methodology.  This bothers me more than I like to admit, since everybody is different this seems to fly directly in the face of "Individuals and interactions over processes and tools".  That being said, many of the processes that these methodologies advocate can be useful and effective if used appropriately.

[Scrum](https://www.scrum.org/resources/what-is-scrum) - Rather controversially, I believe that Scrum is an agile anti-pattern, yet the words are used interchangeably.  
That is not to say that Scrum can't be an effective mechanism for delivering projects, but it does not feel truly agile:
* The Scrum Master is employed to facilitate Scrum, why is this needed if the team is engaged?  
  Sounds like process over people to me.
* A good product owner is hard to find because they must understand the low level detail detail and also be empowered to make project decisions.  Proxy product owners are usually worse than useless due to the Chinese whispers effect.
* Sprint planning depends upon effective backlog refinement but these are two separate tasks; refinement is about shared understanding, planning is about commitment and delivery.  All too often these processes are merged, the end result is a lack of commitment and erosion of trust.
* Personally I don't see a real benefit in sprints.  It is possible to calculate velocity without sprints as long as there are estimates.  With sprint planning there is a tendency to default to a top-down planning driven approach which demonstrates a lack of trust and is a slippery slope towards micro-management.

[Kanban](https://en.wikipedia.org/wiki/Kanban_(development)) - Managing workflow using a visible backlog of work - an information radiator.  
On the face of it this sounds great, but again there are some red flags to watch for:
* The information radiator doesn't radiate information.  
  A sign that the team haven't bought in, or that the board is incorrectly structured.
* Additional reporting is requested/ demanded.  
  This is a sign that the information radiator isn't doing its job or that there is a lack of trust.
* Lazy naming
    * tasks are actions, names should include a verb, important for estimation.
    * context is essential, if the name is too long, add a description.
* Arbitrary rules such as not being able to move tickets backwards.  
  This feels wrong to me, how often are things perfect first time?  I see no benefit in closing "ABC" just to create a new ticket "ABC extras".
* Premature allocation of work.  
  In theory anybody with the correct skillset should be able to pick up an item off the backlog, allocating work too early (usually in sprint planning) is a slippery slope towards micro-management.

---

## Red flags


### Using Agile and Scrum interchangeably.

Agile does not force any processes on the team, given a steer and some face-to-face time with the requirement holders, the team works together to get the right stuff done.  
Scrum on the other hand is very process heavy.  The team must attend stand-ups, must maintain a backlog, refine it and plan upcoming work in fixed sprints.  These aren't necessarily bad ideas, but forcing the team to follow them is fundamentally not in the spirit of agile.  
Based upon several attempts to implement Scrum, I believe that Scrum is a stop-gap between traditional delivery and true agility, there to engender trust between management and a team that cannot yet be considered self-organising.


### User stories written about a system or other technical entity (not human/role).

```
as a <system> 
I want <data> 
in order to <do some stuff>”.  
```

For example, an event management system requires some data about organisations relating to ours: 
```
as an event management system 
I require organisation data
to create a data load file
```

Systems don't want things, people do.  
This is common in integration but demonstrates a lack of understanding of what we are really trying to do, it would be far better written as:
```
as an event coordinator
I require data about organisations on our mailing list
so that I can contact them regarding potential upcoming events
```

The clue is in the name - they are stories describing a specific user’s requirements.  
The purpose is twofold:
* to succinctly describe the requirement.
* to articulate the reason for doing this piece of work.

Which aids:
* common understanding
* estimation processes
* effective prioritisation

### Information radiators which don’t radiate information.

The name of a ticket should clearly describe its purpose.  
If more context is required, then a description should also be added.  
The author should not need to be present for others to understand the ticket's purpose, this is how knowledge silos build up.  
Simple things like adding a verb can aid estimation processes and remove the need for more heavyweight acceptance criteria definition.  
Ultimately this can only be fixed by the team and only if they are engaged and empowered to do this.  
This can also be hampered by overly complicated board structures/ hierarchies, I've seen this several times.

### Sprint commitments not being understood by all team members.

If you are working in sprints, then you are required to commit to a sprint goal, in order to do this you must understand the work in the sprint, the technology involved and any dependencies.  
This is a collaboration exercise during backlog refinement, prior to sprint planning.  
Repeated failure to meet sprint goals is typically caused by:
* Backlog refinement and estimation needs improvement.
* Noise, interruption, other commitments coming from outside the team, indicating that the wider organisation hasn't embraced the Scrum ideology.
* The individual in question is not up to scratch.

### At the stand-up the focus is on people not on work

The aim of the standup is not to justify your position in the team, it is to ensure that work is progressing at an acceptable pace and that any blockers are removed.  
It can be useful to have the Kanban board visible during these, but resist the urge to filter on individuals to encourage a collective ownership.
This is especially important when trying to implement agile practices or when people each have very specific areas of work.  
Another sign here is that comments are directed to an individual, probably senior member of the group, a slippery slope towards micro-management.


### Sprint planning and backlog refinement are not treated as distinct processes

This is a big mistake, these processes serve 2 different purposes:
* Backlog refinement is about developing a common understanding, rough priority order of activities and reasoned estimates.
* Sprint planning is about establishing how much you can commit to doing in a given period, taking into account specialisms, outside commitments and historical trends.

I have found that backlog refinement often gets missed, or is quickly skimmed over during sprint planning.  What this results in is:
* A lack of shared understanding of the upcoming work
* Inaccurate estimates
* A lack of commitment to the sprint.

### Reluctance to leave behind other habits

For example, regular scheduled meetings which aren’t the standup, e.g. test triage.  
What is a bug if not a blocker on completion?  
What is the standup for?  Removing blockers.

Continued progress reporting to a non-team member, probably a senior figure with a long history.  
Agile is a culture, it isn't easy to change people's habits but well worth it in the long run.