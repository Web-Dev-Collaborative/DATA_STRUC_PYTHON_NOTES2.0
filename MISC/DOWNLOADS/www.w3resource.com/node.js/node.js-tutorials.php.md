 


- [Home](/index.php)
- ▼Node.js
- [Introduction](/node.js/node.js-tutorials.php)
- [Installing node.js on Windows and Linux](/node.js/installing-node.js-windows-and-linux.php)
- [Programming Model](/node.js/nodejs-programming-model.php)
- [Node.js REPL](/node.js/nodejs-repl.php)
- [Node Package Manager](https://www.w3resource.com/slides/node-package-manager-commands-slides-presentation.php)
- [Global Object](/node.js/nodejs-global-object.php)
- [Http Module](/node.js/nodejs-http-server.php)
- [Util Module](/node.js/nodejs-utility.php)
- [Console Logging](/node.js/nodejs-console-logging.php)
- [Buffer](/node.js/nodejs-buffer.php)
- [OS Module](/node.js/nodejs-os.php)
- ▼Database
- [Node-MySQL](/node.js/nodejs-mysql.php)
- [Node-SQLite3](/node.js/nodejs-sqlite.php)
- [---More---]()

# node.js tutorials

Last update on February 26 2020 08:07:30 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Introduction to Node.js

This is a Node.js Tutorial from w3resource. You will learn About What Node.js is, History, Features,How to install Node in Windows and in Linux, Followed by a comprehensive discussion of each of the modules of Node.js API. By the end of this Tutorial, you will be able to develop and deploy Node.js Applications by yourself.

## What is Node.js

Node.js is a framework to develop highly-scalable applications which can handle tens of thousands of simultaneous client connections efficiently.

It is intended to build scalable network programs easily. So, it can be used to develop web applications accountable to high traffic.

Node.js is based on V8 JavaScript Engine.

## History

At the European JSConf 2009, Ryan Dahl introduced a project he has been working on. The aim of the project was to create a framework to build scalable network applications easily. The platform he used is V8 JavaScript Engine. Rayn first tried C, then Lua programming language, before he used JavaScript. for this project. Unlike other Server-Side JavaScript implementations (Jaxer for example), Ryan used event driven programming model (we will see what it is soon). The project was named as Node.js and popularly known as Node.

The project received huge appreciation immediately after the demonstration and did not look back since then. It achieved exponential growth as well as adoption within a short span of time.

## Core concept

## Event Driven / Asynchronous over Thread based

Unlike traditional server programs (like PHP, Java), each client connection creates an OS thread (smallest unit of processing scheduled by an operating system) which takes approximately 2Mb of memory with it. So, if you are using a system with say 4GB of RAM, a maximum number of possible concurrent connections are 2000 (i.e. 4000/2). To support more simultaneous connections, you need to increase the amount of RAM or number of systems. Which increases cost. Technically also it becomes tedious, since if you are using multiple systems to run an application, shared resources must be shared across all of the systems.

Node instead, uses event-driven programming. Each connection uses a short memory storage when the connection is requested. Node uses callbacks (a reference to an executable code or a piece of executable code) to inform the OS that a new connection is being requested. Rest of the time it does not disturb the OS. So, usage of memory is much more efficient than thread based model.

## No locks over Deadlocks

When two or more processes (an instance of a computer program that is being executed) share the same resource, one has to be locked to allocate the resource (like memory) to another. This can either lead to a situation where each waiting for another to free resource (i.e. deadlock) or you need to do write highly efficient code to manage this. Node is free from this. It does not perform (almost) any input-output operations directly. So, there are no locks. This makes writing codes for Node easier.

## Event loop as a language construct than a library

The design of Node is influenced by Twisted of Python and Event Machine of Ruby. But unlike these, Node does not use Event Loop (is a software pattern that facilitates non-blocking I/O) as a library. It is very  much  part of the  language  itself.  And  there  is  no call to start and end the event loop also.

## Real world usage of Node.js

Though pretty young, Node.js is already being used by a lot of Organizations, Projects, and Applications. The following list is an indication of, for what kind of applications Node is being used :

- HTTP Proxy
- IRC Bot / Chat / Messaging
- Web service (data)
- real time analysis (data, email)
- Client of another web service (Like Twitter client)
- real time collaboration
- Log and log monitoring
- Web-based software to serve a specific client requirement (like reservations book for restaurateurs, Grade book)
- Application server

## Advantages of using Node.js

- Event driven and Non-Blocking, so handles concurrent connections efficiently than it's counterparts.
- It's great to have common language on both client and server.
- Event better, if used with Databases like MongoDb, then it's 100% JavaScript, From DataBase to Server to Client.
- Clean, Functional API.

## Disadvantages of using Node.js

Since Node is very young, lots of database drivers (required to connect to databases) and modules (for adding some specific functionality), are unstable. It is still unstable on Windows platform. But Node has a very active and responsive community and hope that these problems will be marginalized in near future.

**Next:** [Installing node.js on Windows and Linux](https://www.w3resource.com/node.js/installing-node.js-windows-and-linux.php)

---

<span class="underline"></span>

- **New Content published on w3resource:**
- [Scala Programming Exercises, Practice, Solution](https://www.w3resource.com/scala-exercises/index.php)
- [Python Itertools exercises](https://www.w3resource.com/python-exercises/itertools/index.php)
- [Python Numpy exercises](https://www.w3resource.com/python-exercises/numpy/index.php)
- [Python GeoPy Package exercises](https://www.w3resource.com/python-exercises/geopy/index.php)
- [Python Pandas exercises](https://www.w3resource.com/python-exercises/pandas/index.php)
- [Python nltk exercises](https://www.w3resource.com/python-exercises/nltk/index.php)
- [Python BeautifulSoup exercises](https://www.w3resource.com/python-exercises/BeautifulSoup/index.php)
- [Form Template](https://www.w3resource.com/form-template/)
- [Composer - PHP Package Manager](https://www.w3resource.com/php/composer/a-gentle-introduction-to-composer.php)
- [PHPUnit - PHP Testing](https://www.w3resource.com/php/PHPUnit/a-gentle-introduction-to-unit-test-and-testing.php)
- [Laravel - PHP Framework](https://www.w3resource.com/laravel/laravel-tutorial.php)
- [Angular - JavaScript Framework](https://www.w3resource.com/angular/getting-started-with-angular.php)
- [React - JavaScript Library](https://www.w3resource.com/react/react-js-overview.php)
- [Vue - JavaScript Framework](https://www.w3resource.com/vue/installation.php)
- [Jest - JavaScript Testing Framework](https://www.w3resource.com/jest/jest-getting-started.php)

---

<span class="underline"></span>

<span class="underline"></span>

<span class="underline"></span>

[This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.](https://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US)

©w3resource.com 2011-2021

- [Privacy](https://www.w3resource.com/privacy.php)
- [About](https://www.w3resource.com/about.php)
- [Contact](https://www.w3resource.com/contact.php)
- [Feedback](https://www.w3resource.com/feedback.php)
- [Advertise](https://www.w3resource.com/advertise.php)
