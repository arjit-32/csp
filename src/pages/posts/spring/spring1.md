---
layout: ../../../layouts/post.astro
title: "Overview of Spring Framework [Spring Basics-1]"
pubDate: 2021-12-20
description: "Overview of Spring Framework"
author: "arjitsharma"
excerpt: Spring is one of the most popular Java framework and has made development of Enterprise Applications very easy. It uses POJO's(Plain Old Java Objects) which is quite lightweight than J2EE's EJB(Enterprise Java Beans).
image:
  src:
  alt:
tags: ["archive", "spring"]
---

According to Spring.io website - 
" Spring makes programming Java quicker, easier, and safer for everybody. Spring’s focus on speed, simplicity, and productivity has made it the world's most popular Java framework. "

Before discussing about Spring's features, I'd like to tell you that surprisingly enough Java is still the OG, and many big tech giants use Spring framework to fulfill its needs. Few of them are - Netflix, Flipkart, Trivago and Ibibo to name a few.
Also here is a interesting website to know details about different frameworks - [StackShare](https://stackshare.io/spring-boot)


## Why Spring ? 
Spring is one of the most popular Java framework and has made development of Enterprise Applications very easy. It uses POJO's(Plain Old Java Objects) which is quite lightweight than J2EE's EJB(Enterprise Java Beans). 
Spring is _Flexible_, _Fast_ and most importantly it has _Supportive Community_

### Spring Framework Features 

1. _Web Applications :_ We can use Spring MVC out of the box, without worrying about background details like lifecycle methods or model mappings.

2. _RESTful service :_  Again using Spring MVC we can create REST apis with ease.

3. _Database connectivity :_ Using Spring JDBC or Spring JPA or my favorite one Spring Data(no need to write queries)

4. _Microservice :_ Build micro services application with Spring cloud.

5. _Security & Testing _ 


## Spring Boot Overview
Spring Boot is a module within Spring framework with a bunch of features and minimal bootstrapping, it lets us focus on writing applications fast.

### Spring Boot Features - 
 
- Enable building production ready application quickly.

- Provide common non-functional features(metrics, health checks, externalized config)

- It has starter projects(web, jpa)

- It has embedded servers(tomcat, jetty). It can bundle server with application.

- It has Autoconfiguration - looks at Frameworks in classpath & existing configuration and then configures it for us.

## Getting started ? Use Spring Boot !

In order to follow this series, I recommend you to use Spring Boot.
All you need to do is, head on to [Spring Initializer site](https://start.spring.io/), add the dependencies you need and then get rolling.

---

<center>Article by - [Arjit Sharma](https://linktr.ee/arjitsharma)<center>

