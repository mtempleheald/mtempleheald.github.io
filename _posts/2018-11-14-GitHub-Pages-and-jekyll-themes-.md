```
As a software professional with a limited public presence
I require a public area in which to capture technical notes, investigations and anything else worth sharing
In order to reduce time wasting and search repetition
```

I've got code and technical documentation all over the place:
* Google drive
* OneNote
* An ancient php blogging platform I wrote and forgot about, inspired by WordPress 
* External hard drives
* GitHub
* BitBucket
* Email
* Private Slack channels

I needed to consolidate in such a way as to make it future proof, it must also be easy and consistent or else I'll stop using it.  
When I found out about [GitHub Pages](https://pages.github.com/) I was almost excited; automated deployment, version control built in, I get to write in markdown in my favourite editor (VS Code), this could work...

I'm trying to address only the public stuff here, but there are 2 elements to consider:
* Structured store of useful information - to replace bookmarks, reduce search repetition and consolidate thoughts
* Blogging - time-dependent information, written for an external audience, or just don't know where else to put it
I see no reason why these 2 elements can't co-exist, so that's what I'm working towards, a structure platform of information with an attached blog.  


### Initial Setup

So I followed the basic instructions:  

1. Create github repository mirroring my username, followed by .github.io
2. Install [Ruby](https://www.ruby-lang.org/en/) (dependency of Jekyll)
3. Install [Jekyll](https://jekyllrb.com/) Ruby Gem
4. Selected a GitHub Pages theme, specifically [Midnight](https://github.com/pages-themes/midnight)

And I had a formatted static website running based on the [default project structure](https://jekyllrb.com/docs/structure/), testable locally.  


### Customisation

I started migrating existing blog entries and creating new structures for my personal data store.  
It didn't take too long before the theme started irritating me, starting with the padding around lists of lists.  
Also I didn't like the link back to GitHub or the author's account, this is MY blog.  

So I started customising, firstly by overriding the CSS:
* create style.css file in /assets/css
* include the standard theme css as a starter for ten ```CSS (@import "{{ site.theme }}";```

Next I wasn't happy with the HTML itself, so I made a copy of the theme's [default layout](https://github.com/pages-themes/midnight/blob/master/_layouts/default.html) and put it in the _layouts directory.  
I was then able to tweak it to my heart's content, but I was effectively no longer using the theme, so it made little sense to keep it as a dependency.  

Digging into the source code of the theme, I could see that the theme itself subscribed to a theme, namely [jekyll-theme-primer](https://github.com/pages-themes/primer).  I switched to this to see what would happen:  
* open _config.yml
* alter the theme entry to jekyll-theme-primer

I was happy with the results, basically normalised CSS added and not much else, a bit more going on if you browse the source code but it wasn't affecting me so I left it and just tweaked the CSS to my liking.  

I'm no web designer, more technical back end stuff and integration, but I know enough not to just wing it here.  So I went looking for colour combinations that work and stuck to the standard centred blog layout.  

I ended up opting for the VS Code dark+ colour scheme, since I'm used to staring at it, I found enough information in [dunstontc's GitHub project](https://github.com/dunstontc/dark-plus-everywhere) to get this done.  

### Becoming Productive

By now I had a reasonable grasp of how Jekyll works, where to find things and how to reference [variables](https://jekyllrb.com/docs/variables/).  
I had created a menu bar with a basic structure which I'll tweak as and when, including a link to the Blog.  

I decided to opt for a data-driven menu:
* create a _data folder
* add a [toc.yml](https://jekyllrb.com/tutorials/navigation/) file containing the data I'm interested in

This way I can write a document at my leisure and nobody will see it until I'm good and ready to add a link to it (unless they're looking at my source code).  

Finally, I had blog pages but nothing pointing to them, so I have added blog.md containing a loop through the site.posts variable as per the [Jekyll documentation](https://jekyllrb.com/docs/posts/).  

So now I've got a static web page running, which is:
* easy to maintain using simple markdown
* easy to restructure information
* blog-ready, with %seo% Jekyll tags, I've not spent any time on this for RSS feeds etc
* Public so that I can link to it from LinkedIn and my CV
* A home page referencing all public projects I've been working on, in a manner of my choosing.

The future's bright, the future's GitHub Pages.
