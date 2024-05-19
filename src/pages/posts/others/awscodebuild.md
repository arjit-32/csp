---
layout: ../../../layouts/post.astro
title: "What is AWS Codebuild ?"
pubDate: 2022-06-27
description: "What is AWS Codebuild ?"
author: "arjitsharma"
excerpt: A cloud based application builder, that comes pre installed softwares to run your code(something like Docker)
image:
  src:
  alt:
tags: ["archive"]
---
TLDR;

A cloud based application builder, that comes pre installed softwares to run your code(something like Docker)

It is a quick and easy way to build and test your code, your team simply ***commits code changes(github,bitbucket etc)*** and we can trigger that to build & test our code in Codebuild.(Supports webhooks, so rebuilds everytime code changes are pushed to a repo).

---

AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy. Codebuild scales continuously to handle concurrent jobs, eliminating queue time. On top of that you only pay for build minutes and dont have to pay for idle time.

## Terminology -

**BuildSpec** - a YAML file that defines the build activities and settings

**Codebuild Project** - Ties BuildSpec in AWS environment

**Report** - test results made available after the build

**Artifact** - A built object that can be later used.(in CodePipeline or S3)

## Benefits over Jenkins or CircleCI ?

AWS CodeBuild supports building Docker images out-of-the-box in minutes while the Jenkins setup takes a lot longer, since you’re the one managing the underlying infrastructure. Ultimately this gives you more control but similarly you have to pay for that architecture 24/7.

## Use-Case

We can use Codebuild to build our Angular projects, and then deploy it in serverless manner


![image.png](Upload failed. Please re-upload the image align="left")
https://blog.shikisoft.com/assets/images/post_imgs/20190711/bitbucket-codebuild-angular.webp](https://blog.shikisoft.com/assets/images/post_imgs/20190711/bitbucket-codebuild-angular.webp)

This is what our process would look like - 

- We push code to github
- Use Codebuild to build our Angular application
- Push the result or the Artifacts to **S3 (which we will configure as static website hoster)**
- Use CloudFront as a CDN(Content Delivery Network) to deliver website.

### Referrences

[CodeBuild you can digest in an hour](https://www.youtube.com/watch?v=yCVR-uqc4qk)

[Angular Application Deployment with Github, AWS CI/CD CodeBuild & S3— The Step by Step guide.](https://medium.com/geekculture/angular-application-deployment-with-github-aws-ci-cd-codebuild-s3-the-step-by-step-guide-8893777104da)

[Building Angular Apps with AWS CodeBuild upon Bitbucket Pushes/](https://blog.shikisoft.com/bitbucket-aws-codebuild-angular/)