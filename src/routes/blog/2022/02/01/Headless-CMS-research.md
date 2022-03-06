# Headless CMS

I've been working on a 100% data-driven, low code solution using SvelteKit.  
I've been debating rolling my own highly specialised CMS admin pages vs using an off the shelf headless CMS.

## The requirements

1. Data structure

Must support a data structure similar to the below.  
All levels in the hierarchy can repeat, components of any type can be swapped in and out and everything can be reordered.
```
- journey
  - page
    - section
      - component
    - repeating group
      - section
        - component
```

2. REST API

GraphQL may be better, but it adds complexity and security concerns, I want this to be as simple as possible.
The data structure should look similar to above without requiring significant knowledge of the inner workings of the CMS.

4. Ease of use

The content editor needs to understand context at all times.  
e.g. We are editing a section within page X, journey A, not editing a section then going to find a page to link it to.  
This is important for scalability and to reduce human errors.  

5. Safety

Developers must be able to edit content types, and content editors must be able to edit content using these types, without ever losing data.  
This is important for deployment and publishing purposes.  

6. Versioning

Relating to safety but more about compliance; we must be able to view the change history for content and rollback if necessary.  

1. Lightweight

I want a pure headless solution, not a full solution that I'm only using the headless features of.  
This is for security, upgrade, complexity reasons but should also keep costs down.  

8. Hosting

I know how to host .NET and Node apps, either will suffice.  As long as it is secure.  No PHP.  


# The contenders

Starting with free options, because why wouldn't you?  
I deliberately timeboxed this work to a few hours per option.  
If a competent developer can't get to grips with managing a basic structure in a few hours then content editors won't be able to work with it.  

## Strapi

Pros:
- Top of the most popular list on [Jamstack](https://jamstack.org/headless-cms/).
- Free (until you want granular controls or SSO)
- Open Source MIT licence
- Very easy to get started, up and running in under 20 minutes from nothing but a node command line
- REST API extremely easy to use, up and running locally in under an hour with token authentication allowing me to grab a draft page by url and related journey.
- Easy to see what's going on with the content types appearing in the code as JSON schemas with boilerplate API wrappers

Cons:
- Can only nest components one deep using the dynamic zone feature.  
  This means that managing components within sections is nice, but linking these back up to pages and those back up to journeys is cumbersome.  
  The relationship feature can make this work, but it seems you have to manage the one-to-many side of the relationship and also the many-to-one side, i.e. list pages within journey and link page back to parent journey.
- Search filters are lost during navigation.
  I'm not sure if this is a bad thing, but it frustrated me during my brief trial.
- Interface is clunky.  It never let me break anything or lose changes, but I had to try, see the popup and remember to save rather than this being immediately apparent.
- The first thing I tried to do was create a component with an id.  
  This clashed with the id added by default, something of an oversight if you ask me.
- Creating content types writes JSON files to disk, in the solution, so presumably I'd deploy this the way I would any other web app, from git.
  Content writes to database.
  I fail to see the connection between these which makes me worry about deployment safety.  
  This correlates with many comments regarding Strapi too; deployments breaking sites.

Conclusion:

Nice try but not good enough yet.
I like how it feels, I like the simplicity, but it needs that extra depth in the hierarchy and some refinements.


## OrchardCore

Pros:
- Free
- Open source BSD3 licence
- Written in .NET which is in my tech stack already
- Once I figured out the built in Bag and Title content parts it was very easy to get exactly the structure I was looking for
- Security taken seriously, countless authentication options with details of openid
- I already know how to implement SSO with Azure AD in .NET Core so that's one problem I don't have to worry about.

Cons:
- Documentation is thorough yet many broken links, including the video to getting started with headless CMS in OrchardCore.
  I didn't see [this](https://docs.orchardcore.net/en/latest/docs/getting-started/) at first.  
  Why they'd make download more prominent I have no idea, I ended up just taking full latest source code as my basis for trial.
- Headless content APIs not as easy to use as Strapi, nor as easy to integrate with.
  Just for trial purposes I set up token authentication and this achieved my goal of pulling down some content.
- REST APIs rather limited, only allowing reference by ID at first glance.
  Possible to use Queries instead of going straight to content, but this requires configuring Lucene indexes etc (TODO)

Conclusion:

I like it at a glance, have no concerns about scalability or usability.  
The API/Query complexity makes me wary - anytime there's an index/cache involved things start getting complicated.  
I will complete the API PoC work, use the NuGet-driven setup process and re-evaluate.

