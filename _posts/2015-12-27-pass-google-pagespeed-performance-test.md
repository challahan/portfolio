---
layout: post
title: How To Get Your Jekyll + GitHub Pages Website to Pass Google's PageSpeed Tests
date: 2015-12-27 22:55:31.000000000 -04:00
tags: []
status: publish
type: post
published: true
thumbnailalt: "Google's PageSpeed Results Showing 98% Pass"
thumbnail: page-speed-results.jpg
author: Christopher Hallahan
---

I've now built three sites using the [Jekyll static site generator](http://www.jekyllrb.com) (including my personal site) and have hosted two of those sites using the free [GitHub Pages](https://pages.github.com).  Overall, I'm really happy with the amount of control and performance benefits a static site generator provides.  

With an increased focus on performance in the web industry, I wanted to see how well I could perform against [Google's PageSpeed Insights test](https://developers.google.com/speed/pagespeed/insights/).  With some minor tweaks, I was able to score a 98/100 on Mobile and 97/100 on Desktop for my personal website.  I'll explain why I couldn't receive the full 100% later.  

I like to keep my development stack as simple as possible - so I am not using any Grunt or Gulp workflows for my static sites.  The steps below won't reference any automatic image optimization or minification, although these are certainly viable options as well.  

### Use Responsive Design Best Practices + Size Tap Targets

The User Experience steps are typically the easiest to complete.  Make sure you're:

* Not using Flash or Java
* Sizing touch targets appropriately and spacing UI elements out
* Using legible font sizes
* Configured the RWD viewport

### Place JavaScript At End to Prevent Blocking

Google takes off points for any "blocking" scripts, so place your scripts at the end (before the end of the body).

Additionally, you could take advantage of the "async" attribute to ensure your script loads asyncronously, although this [may not be necessary](https://css-tricks.com/async-attribute-scripts-bottom/).

### Asyncronously Load CSS

I'm using the [loadCSS function from Filament Group](https://github.com/filamentgroup/loadCSS) to asyncronously load all of my CSS.  Otherwise, Google will dock you for blocking CSS behavior.  

### Inline Critical CSS

Inlining critical "above-the-fold" CSS ensures users can begin interacting with the page faster and also helps prevent the flash of unstyled content (FOUC).  There are of course ways to automate this, but I used this [Critical Path CSS Generator](https://jonassebastianohlsson.com/criticalpathcssgenerator/).  I did have to modify the CSS to include more styles, based on a repeat test.

### Optimize Images

From my tests, Google checks images to ensure they are both sized correctly (you're not displaying images smaller than the needed dimensions) and that they're losslessly compressed.  Again, you could do your compression and sizing with a task runner, but I opted to use the [ImageOptim app for Mac](https://imageoptim.com).  It looks like every JPEG and PNG file must be losslessly compressed in order to pass.  Additionally, you might use Responsive Images to provide multiple sizes of the same image (although I do not think this is required).

### Use a CDN (CloudFlare)

By the far the more efficient way to increase your score is to use a free content delivery network to serve your site.  I recommend the free version of [CloudFlare](http://cloudflare.com) because of its simplicity.  There are a few reasons for this:

* The CDN will automatically minify your HTML, CSS and JavaScript.  This is required by Google PageSpeed.  
* GitHub Pages by default places a caching header of 10 minutes on all resources.  Google will throw a "Leverage browser caching" error for this.  You can override this from the CDN.  On CloudFlare, I did this by creating a Page Rule (in addition to the general caching option) that sets the Cache level on everything to a minimum of 8 days (Google's recommendation).  I am not using the Rocket Loader option.  
* The CDN will automatically Gzip elements, such as SVG's (even though they're served from GitHub)

Setting up the CDN will by far increase your PageSpeed results, but it may take up to 24 hours for your CDN setting changes to propogate - you won't see them reflected in Google's results immediately.

### Locally Serve Google Analytics

If you use Google Analytics like many sites do, you'll find that Google (yes the same Google) penalizes the caching header.  You aren't able to control this caching expiration, unless you host the analytics JavaScript yourself.  Thankfully, this is entirely possible.  I used [these instructions](http://diywpblog.com/leverage-browser-cache-optimize-google-analytics/) to download the analytics JavaScript file and then reference it from my website, rather than Google's servers.  Note that this is not officially supported and you will not receive any future updates by hosting this way - but it totally works.

### TypeKit Web Fonts - An Unresolved Dilemma

Which brings me to the last challenge - hosted web fonts.  Namely Adobe TypeKit, which does not allow modification of the caching.  I was unsuccessful in trying to get TypeKit to "leverage browser caching".  Since the TypeKit JavaScript must be served from TypeKit's servers, TypeKit is stuck at 10 minutes, and therefore does not pass Google's "leverage browser caching" test.  Unfortunately I was not able to change this setting.

Web fonts should however be loaded asyncronously.  For TypeKit, I used the async JavaScript code, which is found under Advanced in TypeKit settings.

I was also able to utilize local storage using the [TypeKit Cache](https://github.com/morris/typekit-cache) utility (which also helps resolve Flash of Unstyled Text!).

In the future, I may look into using Google Fonts instead to see if I get better results.  

----

Overall, I don't think it's necessary to follow Google's PageSpeed rules verbatim or even score a passing result.  I did find it fun to try to score as high as possible while optimizing my site for these (mostly) valid performance criteria. 

If you have feedback or additional tips, be sure to [send me a message](mailto:chris@chrishallahan.com) and let me know! 
