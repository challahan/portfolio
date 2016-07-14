---
layout: post
title: "Using Craft CMS to Blog, Create Emails, Optimize for Search, Produce Responsive Images and More"
date: 2016-07-13 22:55:31.000000000 -04:00
tags: []
status: publish
type: post
permalink: /blog/:title/
published: true
author: Christopher Hallahan
---

Building our latest web project within Craft CMS allowed the team to take advantage of complex content relationships and remix content in a variety of ways beyond the web.  

I put together a 15 minute video webcast (below) demonstrating how each of the features were implemented behind the scenes.

<iframe width="560" height="315" src="https://www.youtube.com/embed/IISSWXs4mXw" frameborder="0" allowfullscreen></iframe>

Or, if you'd rather read, listed below are five features of Craft CMS that I feel helped speed up our development timeline and create an intuitive experience for our client.  The example website I'm using is from Reading Buzz, which you can visit at [www.readingbuzz.us](http://www.readingbuzz.us).

If you're not familiar with Craft, check it out on [Craft's Website](http://www.craftcms.com).  Licenses are free for personal use and start go up to $299 for professional use.

### 1.  Building Custom Posts Types, including Blogs

Like most entry types, blogs and other types of content aren't available out of the box in Craft.  However, you can easily define a new section and fields related to blog posts.  I chose to define fields for short and long descriptions (to use on the blog listing page and home page carousel, for example), categories for sorting and relating posts together, as well as a matrix field for the blog post content itself.

Using the matrix field for the blog content allows for the author to add various components in any desired order to the blog post, for example some body copy, an embedded image with caption and a pull quote.

### 2.  Using Live Preview to See Entries in Context

While editing entries, the Live Preview feature allows the author to see their edits within the web page template in real time, providing much better context to their editing experience.  Fields are shown to the left, while the page being edited is shown on the right. Authors can even grab the resize tool in the center of Live Preview to see how the post will look at different viewport sizes.

### 3.  Optimizing for Search using the Seomatic Plugin

Another advantage to Craft comes from the [Seomatic plugin](https://github.com/nystudio107/seomatic), developed by nystudio107.  Rather than attempting to roll your own SEO, social media metadata and microdata, Seomatic automates a lot of this process through the inclusion of a simple hook tag in your master layout template.  Metadata can be set on a site-wide, template-wide or entry-specific level, and can really save a lot of valuable development time.

### 4.  Handling Responsive Images Using Transforms

Responsive images are great, but they can often be difficult to implement within a content management system.  Using Craft's transforms for image fields, I was able to easily define three different crop sizes optimized for different viewports and then simply reference those crops within the Picture element when needed.  This ensures users are only downloading the images needed to fit their particular screen size.  Better yet, the author doesn't need to know any of this is happening in the background.  As long as they provide a large enough original image, the CMS takes care of the rest.

### 5.  Building for Alternate Displays, including MailChimp Email, RSS and AMP

Finally, my favorite implementation yet for this site was the use of alternate displays for content.  Craft isn't limited to only displaying HTML web pages.  After we've defined our content, we can use it to produce a variety of additional media.  I created displays for:

1. A simple RSS feed from the blog
2. An AMP-optimized version of the blog posts
3. HTML emails that work with MailChimp

By not repeating content, I was able to reuse fields to create full HTML email templates right from within Craft, and then import those templates into MailChimp using its Import from URL feature.  This integration could save my client, who would like to send out weekly emails with the latest content updates from the website, hours of time.  

If you'd like to see more about how I integrated RSS and email into Craft, be sure to check out the video above.

### Questions or Comments?

I had a lot of fun working on this latest project.  If you have any questions for me about the process of using Craft to create this website, please feel free to [email me](mailto:chris@chrishallahan.com).
