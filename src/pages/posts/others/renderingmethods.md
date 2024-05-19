---
layout: ../../../layouts/post.astro
title: "Rendering Methods on the Web"
pubDate: 2023-08-27
description: "Rendering Methods on the Web"
author: "arjitsharma"
excerpt: There was a time when only static pages were served on the internet, but as time passed we started having more complex applications. So as a result, we came up with newer methods to show the websites to the end user. Some of these methods you must have heard of, one popular one as of today(2023) is Single Page Applications with web frameworks like React/Angular/Vue.
image:
  src:
  alt:
tags: ["archive"]
---

There was a time when only static pages were served on the internet, but as time passed we started having more complex applications. So as a result, we came up with newer methods to show the websites to the end user. Some of these methods you must have heard of, one popular one as of today(2023) is Single Page Applications with web frameworks like React/Angular/Vue.

### Single Page Application

A SPA (Single-page application) is a web app implementation that loads only a single web document and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.

**Advantage**\- Performance, Improved UX, Connectivity, Development Speed

**Disadvantages**\- Initial loading time, SEO limitations

### Static Site Generator

Static-site generators enable developers to create many pages all at once using templates with content plugged into them. The site is generated at **build time.** A good use case for this is blog websites

**Advantage**\- Faster load time and good for SEO.

**Disadvantage**\- The site must have the build script re-run and re-deployed whenever we make changes to the site.

### Server Side Rendering

Server-side rendering (SSR) addresses the performance and search engine optimization issues of single-page JavaScript applications. In contrast to client-side rendering, it generates static content on the server before sending it over to the user’s browser.

There is a Hydration step in SSR, as in adding interactivity of js to the page returned by the server.

Hydration is the process of restoring a server-rendered app to the state it would be if it were client-rendered.

Advantage- SEO optimization is possible, Ease of scaling, Analytics capabilities

Disadvantage- Performance speed, Cost as one needs a server

### Multi-Page Application

It is the traditional way of developing websites, where the entire page reloads per request, It is easier to scale and good for SEO.

### Island Architecture/Partial Hydration

Partial Hydration enables you to selectively add interactivity to your otherwise completely static app. This results in improved frontend performance while keeping the benefits of client-side apps

### Progressive Hydration

You are controlling the priority of component hydration

### Progressive Enhancement

*Progressive enhancement* is a strategy for building websites in which core functionality is available to all browsers, while non-critical enhancements are available to capable browsers.

### Incremental Static Regeneration

Incremental Static Regeneration (ISR) enables you to use static generation on a per-page basis, **without needing to rebuild the entire site.**

### Streaming Server Side Rendering

Streaming allows you to incrementally render parts of your UI to the client.

### Reusability

Reusability is an alternative to hydration because it can use the information the server had when it prerendered the HTML to continue executing where the server left off. Unlike Hydration in other frameworks, Qwik uses asynchronous, out-of-order component hydration to ensure that the first interaction can happen much quicker. This means that Qwik will lazy load and render only the components that are needed.

### Edge Rendering

Altering rendered HTML at the edge before sending it to the client. Edge means the server closest to your home.