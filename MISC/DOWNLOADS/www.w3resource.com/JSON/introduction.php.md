 


- [Home](/index.php)
- ▼JSON Tutorial
- [Introduction](/JSON/introduction.php)
- [Structures](/JSON/structures.php)
- [Online JSON viewer](/JSON/online-JSON-viewer.php)
- [Validate JSON with JSONLint](/JSON/validate-JSON-with-JSONLint.php)
- [JSON Examples](/JSON/JSON-example.php)
- [PHP JSON installation and decode function](/JSON/php-json-installation-and-decode-function.php)
- [PHP JSON encode function](/JSON/php-json-encode-function.php)
- [PHP JSON last error function](/JSON/php-json_last_error-function.php)
- [Working with JavaScript](/JSON/working-with-javascript.php)
- [Working with Python](/JSON/python-json-module-tutorial.php)
- [JSONPath with JavaScript](/JSON/JSONPath-with-JavaScript.php)
- [JSONPath with PHP](/JSON/JSONPath-with-PHP.php)
- [Binary JSON - BSON](/JSON/BSON.php)
- [JSONP](/JSON/JSONP.php)

# JSON Tutorial

Last update on February 26 2020 08:08:57 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Introduction

This is an introductory tutorial on JSON - JavaScript Object Notation. As a web developer, you will find plenty of occassion when you will require applying or working with JSON in your project. This tutorial begins a set of tutorials on JSON and discusses definition, specification, What JSON looks like in real world, a bit of History of JSON, comparison between Relational Database and JSON, a brief understanding of when to elect JSON over Relational Database, XML vs JSON, Syntax of JSON, typical examples of real world uses of JSON.

The document ends with a list of what you will learn in other tutorials of this series, which is sort of a roadmap of basic things you need to learn for working with JSON and a summary of the points discussed.

Ultimately, JSON is used as a data model, but compared to other data models like Relational Database or XML, it has a low learning curve. In fact, if you are familiar with any of the modern day programming language (e.g PHP, JavaScript, Ruby) you are already familiar with the data structures used in JSON. Moreover, any modern programming language can work with JSON. May be that is why JSON has got wide acceptance from the developer community. The following visual representation from Google Trend may help you to understand the how JSON is gaining popularity over years.

## What is JSON

<a href="#h_one" class="goTop"></a>

JSON is a lightweight text-based open standard data-interchange format. It is human readable. JSON is derived from a subset of JavaScript programming language (Standard ECMA-262 3rd Edition—December 1999). It is entirely language independent and can be used with most of the modern programming languages.

JSON is often used to serialize and transfer data over a network connection, for example between the web server and a web application. In computer science, serialization is a process to transforming data structures and objects in a format suitable to be stored in a file or memory buffer or transmitted over a network connection. Later on, this data can be retrieved. Because of the very nature of the JSON, it is useful for storing or representing semi structured data

JSON is a standard and is specified on RFC4627 on IETF (International Engineering Task Force). The specification is made by Doglus Crockford on July 2006.

JSON files are saved with .json extension. Internet media type of JSON is "application/json".

## What JSON looks like

We will now look how a typical JSON looks like. The following code snippet is a valid (you will see in a later chapter what is syntactically valid JSON) JSON representing information about a book.

    {
        "Title": "The Cuckoo's Calling",
        "Author": "Robert Galbraith",
        "Genre": "classic crime novel",
        "Detail": {
            "Publisher": "Little Brown",
            "Publication_Year": 2013,
            "ISBN-13": 9781408704004,
            "Language": "English",
            "Pages": 494
        },
        "Price": [
            {
                "type": "Hardcover",
                "price": 16.65
            },
            {
                "type": "Kidle Edition",
                "price": 7.03
            }
        ]
    }

Now we will discuss what are basic constructs of JSON.

## Basic Constructs

- There four basic and built-in data types in JSON. They are strings, numbers, booleans (i.e true and false) and null. Besides, there are two data types which are structured - objects and arrays.
- Objects are wrapped within '{' and '}'. Arrays are enclosed by '\[' and '\]'. Objects are a list of label-value pairs. Arrays are list of values.
- Both objects and arrays can be nested.
- strings, numbers, booleans (i.e true and false) and null can be used as values.

The following image and then text following will be useful to get you started with how JSON data is constructed.

![A simple json file](https://www.w3resource.com/w3r_images/json-introduction.png)

So the entire content of the JSON data shown above is enclosed within an object. "Title": "The Cuckoo's Calling", "Author": "Robert Galbraith", "Genre": "classic crime novel", these are label-value pairs separated by commas. Labels and their values are separated by a colon (:). Notice that both labels and values are enclosed by quotations, since they are strings.

Notice the '"Detail"' label then. It contains another object, which again contains several label-value pairs. This is an example of how nesting (object within object in this case) is done in JSON.

Then '"Price"' label contains an array, which is turn contains two separate objects. Another example of nesting.

Also, notice that numbers are not enclosed by quotations.

## History of JSON

The name behind popularizing the JSON is Douglas Crockford. He used JSON is his company State Software around 2001.

In 2005, Yahoo started using JSON in it's web services.

In later 2006, Google started offering JSON in its Gdata web protocol.

Today, JSON is one of the most widely used data-interchange format in web, and supported by most of the Web APIs (like twitter api) to fetch public data and creating applications out of them.

## Comparison with Relational Database

Since JSON is used to host/represent data, we will discuss how it is different from the traditional Relational Database model used in RDBMS systems like MySQL, SQL Server etc. This may be useful for you to choose JSON over RDBMS or RDBMS over JSON depending upon the type and structure of data you want to deal with. Let's start with a comparison against certain features:

- **Structure** : In the relational database, these are tables, which are responsible for storing data in form of rows and columns. JSON uses objects and arrays - objects are label-value pairs and arrays are the list of values. They can be nested recursively.
- **Metadata** : In a relational database, it is a schema, which is used for storing data about the structure and type of the data to be stored and schemas are predefined, i.e. they are created at the time of creation of database and tables before you can store data. JSON also may use schema, to have a definition of the structure and type of data to represented, but it is not predefined. Most of the time it is self-describing, even if it uses a schema, it comes with much more flexibility than a schema used in relational database. But it would be judgmental to say that it is an advantage of JSON over Relational Database. Having a pre-defined schema may have several benefits depending upon the data to be dealt with.
- **Retrieving data** : Relational databases use Structured Query Language, an expressive and very powerful language, based on relational algebra to fetch data from the database. JSON does not have any widely used or accepted language to query the data stored. JAQL and JSONiq are many of the query languages which mostly are work in progress to query data from JSON.
- **Sorting** : SQL does the job in case of Relational Database. In the case of JSON, since arrays often used, in programs, arrays can be sorted.
- **Application** : There are many open-source as well as commercial Relational Database systems are available - like MySQL, POstgreSQL, SQL Server, Oracle, DB2 etc. JSON is mostly applied to programming languages. But, there is also NoSQL systems. NoSQL systems use JSON format to store data. Some of the NoSQL systems use JSON format are - MongoDB, CoucheDB etc.
- **Learning curve**: JSON is a clear winner here. Since the basic data types and structure used here are similar to those used in many programming languages, it is obvious that if you are coming from a programming background, you will pick things up in JSON pretty fast. RDBMS is a separate field of study on the other hand. But definitely, the time you invest in learning Relational database return you several opportunities and benefits.

Now let's discuss a few use cases which will be useful.

Assume that you have to store information regarding students(name, id, class) and marks obtained by them in various subjects. Relational Database is suitable here than using JSON, since here we can have one table containing student detail and another table for marks obtained by them in various subjects.

Now assume that we have to represent information regarding students(name, id, class) and various projects they have completed in different subjects along with a brief description of the project. Assume that a student may complete any number of projects and any of number subjects they choose from. Notice that, in this case, you may have any uniformity of the data to be stored. So, in this case, JSON will be preferable than using Relational Database.

## JSON vs XML

Since XML is also used as data interchange format widely, we will try to draw a comparison between them. The purpose of the comparison it's definitely not in the line of which is better, rather we will try to understand which one is suitable for storing specific kind of data.

- XML is more expressive than JSON. XML sometimes also suffers from using tags repeatedly, where as JSON is much more concise.
- XML is more complex than JSON.
- There are several specifications to define schema(metadata) for XML, for example DTD and XSD. JSON schema is there for doing the same for JSON, but it is not as widely used as XML schemas.
- XML can be used with most of the programming languages as JSON. But the point is, when you are working with XML, then you have you are actually trying match two systems those data structures are different. In the case of JSON though, since objects and arrays are basic data structures used, it is easy to work with them in programs.
- For selecting specific parts of an XML document, there is standard specification called XPath. This is widely used. In JSON, we have JSONPath to do the same, but not widely in use.
- XML has Xquery specification for querying XML data. JSON though have JAQL, JSONiq etc, but they are not in use widely.
- XML has XSLT specification which may be used to apply a style to an XML document. JSON does not have any such thing.

## Typical uses of JSON

**API** : API is the most widely used area where JSON is used for data exchange. Specially, web applications those have a social face, it has become obvious now that they have an API, so that developers can consume the huge amount of data collected by the app and then can create derivative apps. Twitter, Facebook, Linkedin, Flicker, Dribble, you name it, all the well-known apps on the internet today has an API and uses JSON as their preferred format for serving data to the developers. Out of these APIs, some have support for both JSON and XML, but some support only JSON.

We will see a simple demonstration of rottentomatoes API to get a feel of how JSON is used in APIs. In this demo, we are querying the rottentomatoes.com for name and thumbnail poster of the movie containing the string "Life is beautiful" using JavaScript and Jquery. It returns the result in JSON format and then it is displayed on the browser. Following is a screenshot of it.

![using JSON in API demo](https://www.w3resource.com/w3r_images/JSON-API.png)

**NoSQL** : This is another area where JSON is used. NoSQL databases like MongoDb, CouchDb uses JSON format to store data.

Since JSON structures can be transformed to JavaScript objects within the browser environment, it is very easy to work with. Moreover, it can be integrated with server-side JavaScript also. The following shows that in MongoDb, data is stored in JSON format (to be specific, a variant of JSON, called BSON is used). You can learn MongoDb in detail in our separate [tutorial for MongoDb](https://www.w3resource.com/mongodb/introduction-mongodb.php‎).

we select the database first. Our database name is w3r_demo here.

    > use w3r_demo
    switched to db w3r_demo

Now we will insert some data into the collection (like a table in RDBMS) books. The data we are entering is shown at the JSON data example above in this example.

    > db.books.save({
         "Title": "The Cuckoo's Calling",
         "Author": "Robert Galbraith",
         "Genre": "classic crime novel",
         "Detail": {
             "Publisher": "Little Brown",
            "Publication_Year": 2013,
             "ISBN-13": 9781408704004,
             "Language": "English",
             "Pages": 494
          },
          "Price": [
              {
                   "type": "Hardcover",
                   "price": 16.65
              },
              {
                   "type": "Kidle Edition",
                   "price": 7.03
              }
          ]
      }
    )

We will select the data insert and display now.

    > db.books.find()
    {"_id" : ObjectId("51ee7088b63a0c553918fdd3"), "Title": "The Cuckoo's Calling",  "Author": "Robert Galbraith", "Genre": "classic crime novel",
    "Detail": { "Publisher": "Little Brown", "Publication_Year": 2013, "ISBN-13": 9781408704004, "Language": "English", "Pages": 494},
    "Price": [  {  "type": "Hardcover", "price": 16.65  }, { "type": "Kidle Edition", "price": 7.03  } ] }

So this way we store data in JSON format in NoSQL database MongoDb.

**AJAX** : JSON is often used to retrieve data from the server with AJAX. This is suitable because this way, retrieved data is presented to browser environment and then using JavaScript can be manipulated and rendered.

In the following demo, we are using Jquery and AJAX to fetch the most recent 5 photographs of cats from Flicker. [We can view a live demo here](JSON-Ajax-example.html). And following is a screenshot.

![JSON Ajax demo](https://www.w3resource.com/w3r_images/json-ajax-demo.gif)

**Package Management** : Since the complexity of web development has increased a lot, developers nowadays use tools to create a package of their application. That makes the app more easily deployable and later on it is also become easy to make modifications and integrate the changes. This way, the development and maintenance process becomes easier. There are number of package management tools are available, namely Bower, Yomen , NPM (Node Package Manager) etc. Most of these tools use a package.json file where the metadata (like name, version, description, file structure, dependencies, license information etc) are written.

Bellow is the package.json file from Twitter Bootstrap.

    {
        "name": "bootstrap"
      , "description": "Sleek, intuitive, and powerful front-end framework for faster and easier web development."
      , "version": "2.3.2"
      , "keywords": ["bootstrap", "css"]
      , "homepage": "http://twitter.github.com/bootstrap/"
      , "author": "Twitter Inc."
      , "scripts": { "test": "make test" }
      , "repository": {
          "type": "git"
        , "url": "https://github.com/twitter/bootstrap.git"
      }
      , "licenses": [
        {
            "type": "Apache-2.0"
          , "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }
      ]
      , "devDependencies": {
          "uglify-js": "1.3.4"
        , "jshint": "0.9.1"
        , "recess": "1.1.8"
        , "connect": "2.1.3"
        , "hogan.js": "2.0.0"
      }
    }

So, you already might have an idea of how JSON is being used in real world and will be useful for you to learn JSON well, so that you can use it in your own projects.

## What you will learn in JSON tutorials of w3resource

Here is a brief rundown of the tutorials you will come across in our series of JSON tutorials.

- A detail discussion about [data structures and values](https://www.w3resource.com/JSON/structures.php) you can use in JSON.
- Various tools you may use to [view JSON online](https://www.w3resource.com/JSON/online-JSON-viewer.php).
- How to use JSONLint to [validate JSON](https://www.w3resource.com/JSON/validate-JSON-with-JSONLint.php).
- Some [examples with explanations of JSON](https://www.w3resource.com/JSON/JSON-example.php).
- Working with [PHP and JSON](https://www.w3resource.com/JSON/php-json-installation-and-decode-function.php). We have discussed installation, how to various PHP functions to explore the power of JSON.
- Working with [JavaScript and JSON](https://www.w3resource.com/JSON/working-with-javascript.php). JSON is a built-in object in JavaScript. We have discussed how to convert JSON to string and string to JSON.
- To select specific parts of a JSON data, you can use [JSON Path](https://www.w3resource.com/JSON/working-with-javascript.php). We have discussed how to use JavaScript and PHP to work with JSON Path.
- If you are sending a query to fetch data residing on a domain different than domain from where the request is sent, you have to use JSONP to overcome a cross-domain resource sharing bottleneck. We have discussed [JSONP](https://www.w3resource.com/JSON/JSONP.php) in a separate tutorial in this series.
- We have also discussed [BSON](https://www.w3resource.com/JSON/BSON.php), a variant of JSON, used in MongoDb to store data.

## Conclusion

It will be a good idea to have a quick recap of what we have learned in this introductory tutorial of JSON. here we go-

- JSON is a open, text-based, light-weight data interchange format specified as RFC4627, came to the developer world in 2005 and it's popularity is increased rapidly.
- JSON uses Object and Array as data structures and strings, number, true, false and null as values. Objects and arrays can be nested recursively.
- Most (if not all) modern programming languages can be used to work with JSON.
- NoSQL databases, which are evolved to get rid of the bottlenecks of the Relational Databases, are using JSON to store data.
- JSON gives developers a power to choose between XML and JSON leading to more flexibility.
- Besides NoSQL, AJAX, Package Management, and integration of APIs to the web application are the major areas where JSON is being used extensively.

Hopefully, this tutorial sets the ground well to start learning JSON through our consequent tutorials. By the way, we are in the process of going through the major update of our present JSON tutorials, more useful content is going to be added to serve a better and improved learning material to our users. [Subscribe to our RSS Feed](https://feeds.feedburner.com/W3resource) to stay updated.

**Next:** [Structures of JSON](https://www.w3resource.com/JSON/structures.php)

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
