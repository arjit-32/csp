---
layout: ../../../layouts/post.astro
title: "What are Package Managers(npm/yarn) ?"
pubDate: 2023-08-30
description: "What are Package Managers(npm/yarn) ?"
author: "arjitsharma"
excerpt: A package manager is a system that will manage your project dependencies
image:
  src:
  alt:
tags: ["archive"]
---
A **dependency** is a third-party bit of software that was probably written by someone else and ideally solves a single problem for you.

A package manager is a system that will manage your project dependencies

Npm and yarn are package managers that can be used to interact with packages. We can tell npm to grab a package from its registry of all the packages published to it. Then the package is stored inside the ***node\_modules*** folder.

We can also use ***package.json*** to list out all the dependencies our project needs and just use npm install to install all the packages at once.

Yarn came later because npm was kind of slow. Yarn sits on top of npm, adds caching and other things that were missing in npm, though npm caught up to the new features.

## Semantic Versioning(semver) to manage packages -

React 16.1.3

16 is major version change(breaking changes)

1 is minor version change(non breaking changes)

3 is a Patch, a bug fix

npm uses the tilde (~) and caret (^) to designate which patch and minor versions to use respectively.

^3.9.2 means to install 3.*\*.\**

~3.9.2 means to install 3.9.\*

## Dependency Tree

There exists a dependency tree in npm, i.e. one package is dependent on another thus creating a whole tree of dependencies.

Lock files(***package-lock.json***) are intended to pin down, or lock, all versions for the entire dependency tree at the time that the lock file is created. Lock files should be kept in your codebase.

Another interesting feature of npm is npx - We can type in a package name that can run the package manager without ever installing.

## Conclusion

In conclusion, package managers are great for maintaining and using dependencies in your project.