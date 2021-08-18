 

 

- [Home](/index.php)
- ▼Ajax
- [Introduction](/ajax/introduction.php)
- [Working with Ajax, PHP and MySQL](/ajax/working-with-PHP-and-MySQL.php)
- [Using XML](/ajax/using-XML.php)

# Introduction to Ajax

Last update on February 26 2020 08:08:49 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Preface

This is the first tutorial of the series of Ajax tutorials which covers the introduction to Ajax. The tutorial will help you to get started with Ajax.

## What is Ajax

Ajax is a collection of several technologies aiming to provide a better user experience compared to traditional web applications. End to end implementation of Ajax includes HTML, CSS, DOM, JavaScript, a Server Side Language, and XMLHttpRequest which is also called as XHR.

In traditional web applications, the browser sends a request to server, server processes, send some data back to the browser and then it is rendered by the browser. But meanwhile, when the server is processing, the user has to wait. This, needless to say, does not provide the user with a good experience. Ajax helps to get rid of the issue. It makes the user's interaction with the application asynchronous. User interface and communicating to the server goes hand in hand and without waiting for the server to come with the processed data or without reloading the webpage, the user interface responds to user's action; greatly improving the user experience.

![A diagram explaining Ajax](ajax.png)

Ajax stands for Asynchronous JavaScript and XML. Though, often JSON is also used while working with Ajax.

In a moment, we will see a live demo to get you a feel of how Ajax works.

## A live demo

In this live demo, we have a text input field, where you may enter any of the words of PHP, MySQL, SQL, PostgreSQL, HTML, CSS, HTML5, CSS3, JSON. Once you start typing the input field guides you. When finished typing, press enter and press a tab, you may see some text associated is displayed below. This text is stored in a PHP file. And all that happens without reloading the page.

## HTML & JavaScript code of live demo

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Demo of introduction to Ajax by w3resource</title>
        <link href="../includes/bootstrap.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
    <div class="well">
    <input type="text" class="span3" id="search" data-provide="typeahead" data-items="4" tabindex="1" onblur="select_topic()" />
    </div>
    <p id="found" tabindex="2"></p>
    <script src="/twitter-bootstrap/twitter-bootstrap-v2/docs/assets/js/jquery.js"></script>
    <script src="/twitter-bootstrap/twitter-bootstrap-v2/docs/assets/js/bootstrap-typeahead.js"></script>
    <script>
     var subjects = ['PHP', 'MySQL', 'SQL', 'PostgreSQL', 'HTML', 'CSS', 'HTML5', 'CSS3', 'JSON'];
    $('#search').typeahead({source: subjects})
    </script>
    <script>
        function select_topic(){
         var search_term = document.getElementById("search").value;
         var xhr;
         if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 8 and older
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
         var data = "search_string=" + search_term;
         xhr.open("POST", "introductory-demo.php", true);
         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
         xhr.send(data);
         xhr.onreadystatechange = return_data;
        function return_data() {
         if (xhr.readyState === 4) {
          if (xhr.status === 200) {
           //alert(xhr.responseText);
           document.getElementById("found").innerHTML = xhr.responseText;
          } else {
            alert('There was a problem with the request.');
          }
         }
        }
        }
     </script>
    </body>
    </html>

## PHP code of live demo

    <?php
    $search_value = $_POST['search_string'];
    $languages = array(
        "PHP" => "PHP, an acronym for Hypertext Preprocessor, is a widely-used open source general-purpose scripting language.",
        "MySQL" => "MySQL is a open source Relational Database Management System developed by Michael Widenius and David Axmark in 1994",
        "SQL" => "SQL stands for Structured Query Language. It is used for managing data in relational database management system which stores data in the form of tables and relationship between data is also stored in the form of tables.",
        "PostgreSQL" => "PostgreSQL is claimed to be the most advanced open source database solution. PostgreSQL is an object-relational database management system (ORDBMS).",
        "HTML" => "HTML, stands for Hyper Text Markup Language is used to create web pages as well as other types of documents viewable in a web browser.",
        "HTML5" => "HTML5 is the fifth revision of HTML, a markup language to present and structure web document.",
        "CSS" => "CSS, stands for Cascading Style Sheet is a computer language to describe presentation (for example width, height, color, background color, alignment etc.) of HTML and XML (and XML based languages like XHTML, SVG) web documents.",
        "CSS3" => "Third version of CSS. Introduced many new concepts and commands which enhanced the web design landscape.",
        "JSON" => "JSON is a lightweight text-based open standard data-interchange format.",
    );
    if (array_key_exists($search_value, $languages)) {
       $found = $languages[$search_value];
       echo $found;
    }
    ?>

## How Ajax works

Hopefully, the following slideshow will help you to understand the working of Ajax better.

**First step:**

Data is collected and XMLhttpRequest object is created.

![First step - How Ajax works](how-ajax-works-step1.png)

**Second step:**

How data is sent to the the server side file for processing.

![Second step - How Ajax works](how-ajax-works-step2.png)

**Third step:**

Data is received from server.

![Third step - How Ajax works](how-ajax-works-step3.png)

## A bit of history

In 1996, Microsoft introduced iframe tag in Internet Explorer to load content asynchronously.

In 1998, Microsoft Outlook Web Access team applied XMLHTTP by client script.

In 1999, the default page of Internet Explorer, i.e. http://home.microsoft.com was started to be updated to load news stories and stock quoted asynchronously by Microsoft.

Again in 1999, Microsoft created XMLHTTP ActiveX control in Internet Explorer 5. Other browsers like Mozilla, Safari and Opera adopted the technology to create XMLHttpRequest JavaScript object.

Again in 1999, Microsoft created XMLHTTP ActiveX control in Internet Explorer 5. Other browsers like Mozilla, Safari and Opera adopted the technology to create XMLHttpRequest JavaScript object.

When Internet Explorer is updated to version 7, Microsoft adopted the native version of XMLHttpRequest, retaining the legacy support for ActiveX version of it.

Based on technologies used by Google Pages, Jesse James Garrett wrote an article called "Ajax: A New Approach to Web Applications" on 18 February 2005. This where the term 'Ajax' is first used.

World Wide Web Consortium (W3C) released the first draft of XMLHttpRequest on 5 April 2006.

On 17 January 2012, W3C created the Working Draft of XMLHttpRequest Level 2 which promises to overcome many of the limitations of the first draft.

## What you will learn in this series of tutorial

An introduction to Ajax with a live demo.

How to use Ajax along with PHP.

How to use Ajax along with PHP fetching data from MySQL.

How to use Ajax with Jquery.

How to work with Ajax and XML.

How to work with Ajax and JSON.

Detail of XMLHttpRequest specification.

Detail of XMLHttpRequest level 2 specification.

How to use XMLHttpRequest level 2 to overcome caveats of level 1.

**Next:** [Working with Ajax, PHP and MySQL](https://www.w3resource.com/ajax/working-with-PHP-and-MySQL.php)

<img src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />

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

 

[This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.](https://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US)

©w3resource.com 2011-2021

- [Privacy](https://www.w3resource.com/privacy.php)
- [About](https://www.w3resource.com/about.php)
- [Contact](https://www.w3resource.com/contact.php)
- [Feedback](https://www.w3resource.com/feedback.php)
- [Advertise](https://www.w3resource.com/advertise.php)
