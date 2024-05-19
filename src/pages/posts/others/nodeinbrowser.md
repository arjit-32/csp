---
layout: ../../../layouts/post.astro
title: "Node in the browser! Whaaaat ?"
pubDate: 2023-09-02
description: "Node in the browser! Whaaaat ?"
author: "arjitsharma"
excerpt: Yes, you heard that right, now we can run server side code in the browser itself. Web IDEs, Stackblitz released Web containers while Code Sandbox released NodeBox that lets us use node in browser experience.
image:
  src:
  alt:
tags: ["archive"]
---

## Introduction

Yes, you heard that right, now we can run server side code in the browser itself. Web IDEs, *Stackblitz* released Web containers while Code Sandbox released *NodeBox* that lets us use node in browser experience.

## Background

Well, technically we had these online IDEs that could run node on browser but in reality they will spin up a server somewhere which is 1) Very Expensive and 2) has safety concerns (imagine letting someone run a node code on some remote server), but now for the first time ever we can run node purely through our browsers

The advent of WebAssembly and new **[capabilities APIs](https://web.dev/fugu-status/)** made it seem possible to write a WebAssembly-based operating system powerful enough to run Node.js, entirely inside your browser.

## What are the advantages ?

- **Faster than your local environment**
- **Node.js debugging in-browser**
- **Secure by default**
- **Works Offline** *(Whaaaaat !!)*

> WebContainers include a virtualized TCP network stack that's mapped to your browser's ServiceWorker API, enabling us to instantly create live Node.js servers on-demand that continue to work even when you go offline. Because it runs entirely within the browser security sandbox, server responses have *less latency than localhost*
 (!) and protects your web servers from localhost scraping attacks
> 

## But Why would we need it ?

- Coding Demos and Educational sites
- Rapid prototyping or trying a library
- Creating a bug reproduction in order to collaborate with someone.

## Conclusion

Web is moving at a rapid pace, and with advent of node in browser experience maybe a future where developers wont have to worry about setting up a dev environment is’nt far away. Imagine having cloud based developer experience where we wont have to do anything locally.

---

Resources - [https://blog.stackblitz.com/posts/introducing-webcontainers/](https://blog.stackblitz.com/posts/introducing-webcontainers/)