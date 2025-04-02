# My dog is an agile delivery coach

## Introduction

I have a 2 year old chocolate labrador retriever.  
As the breed name suggests, he likes to retrieve, to play fetch.  

Unfortunately, he also hasn't quite grasped reality, the fact that he needs to release the ball/stick/toy before it can be thrown again.
He has instead devised a variation of the game which does not violate his key principle, that all the toys are his and he doesn't need to share.
He will carry the ball and search for a stick close to the path.  
He then swaps to carrying the stick and leaves the ball for me to throw/kick.
When I inevitably miskick and send the ball into the undergrowth, he abandons the stick in favour of rescuing the ball.

The target process is a nice relaxing pursuit that efficiently burns off latent energy and satisfies all parties.
The result is that the dog's refusal to accept reality leaks out and affects other involved parties, namely me, I end up doing the retrieving!

I couldn't help but see parallels between this behaviour and my experiences of software development over the last decade or so...

## Software Delivery

To deliver value to a business you _need_ a problem statement, a solution and the delivery of this solution, how exactly these things are presented is up for debate. 
The [agile manifesto](https://agilemanifesto.org/) gives a good grounding of the priorities to be considered when deciding how to achieve this.

How this is done in practice, however, is _very_ different.
We typically see "the business", project managers and directors refuse to accept reality, the fact that things change, all the time.
This is the first parallel with my introductory statement, where the dog refuses to let go of the ball, management refuses to let go of rigid planning.

This means that delivery teams are forced to work within sprints, committing to deliverying a fixed amount of stuff in a fixed time period, on a regular basis.
On top of that there is a push to try to predict the next several sprints too.

This has direct and tangible impacts:
- Commitment to a sprint goal requires ahead-of-time analysis and estimation
  For technical team members this means solutionising ahead of time.
  This reduces flexibility and limits opportunities for learning as you go, a key benefit of an agile approach
- Prioritisation and backlog refinement weeks ahead distracts the team from actual delivery.
  When the time comes to actual work on delivering this, the chances are the team are sick of hearing about it, or need to relearn what they previously understood.  Often there is also reluctance to reconsider what was agreed, agility is long gone at this point
- A significant proportion of time which could be spent actually delivering value is instead spent on planning _possible_ future value and writing up plans.
  There's a high chance that this time is just wasted, the further ahead you plan the more likely it is to be wasted effort.
- There is a lot of context-switching, leading to burnout and frustration within the team

Essentially this represents a process imposed on delivery teams by management, designed to allow management to plan ahead.
What it really is in practice though, is the team doing planning on behalf of management, at the expense of delivery.
Again, linking back to my analogy, team members are expending extra effort to do management work, all because management refuse to accept reality - that the plan isn't necessary (just make sure highest priority work is what is being actioned, it doesn't have to be a heavyweight process).

## Additional thoughts

### Natural instinct

Team members can be divided into 2 types of people (I'm obviously over-simplifying):

1. Naturally agile team members resent the bureaucracy, just want to get on with the job of delivering something of value, whatever is highest priority, we want to build the right thing and sees no point in trying to plan ahead
2. Naturally task-oriented team members just want to tick off tickets, look good to management and not really think too much beyond their task, but they are happy to follow admin-heavy processes.

These 2 categories of people will never understand each other which often leads to problems.

- A team made up entirely of type 2 individuals will end up performing feature factory scrum; tickets will get delivered but quality will deteriorate and there's a high chance of the wrong things being delivered altogether, there will certainly not be much in the way of innovation
- A team made up entirely of type 1 individuals may struggle to show consistent progress, sometimes nothing for a while then an incredible game changing feature, this can lead to conflict with the business for reasons covered earlier
- A team made up of a mixture of the two types has to work very hard to establish agreed ways of working.
  Without constant vigilance the process falls back to feature factory scrum processes, which infuriates type 1 individuals and eventually you end up in a situation where nobody feels engaged with the process and if left unchecked leads to people just leaving.
  
### Agile (TM) vs agile

Agile is an adjective, a descriptive word which is essentially a synonym for being flexible, adaptable to change.

Scrum, or Agile (TM), on the other hand is anything but flexible.  Yes you can pick and choose which parts of the framework to adopt and exactly how to go about it, but it is hard not to consider Scrum as a violation of "Individuals and interactions over processes and tools", especially when combined with Jira.

20-odd years ago, when the agile manifesto was published software was predominantly a waterfall process, with releases made on the order of months or even years.  By breaking a full project up into much smaller sprints with lots of mini waterfalls there were real benefits.

But it is now 2025, things have moved on a long way, especially in the world of continuous integration, delivery and DevOps.
It is very normal now to be able to publish fixes to production on the same day as a bug is raised, there's no reason why new features can't be treated in the same way, technology is not the limiting factor.

