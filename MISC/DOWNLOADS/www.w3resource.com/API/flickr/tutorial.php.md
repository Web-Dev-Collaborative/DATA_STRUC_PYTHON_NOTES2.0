 


- [Home](/index.php)
- ▼API
- [Google Plus](/API/google-plus/tutorial.php)
- [YouTube](/API/youtube/tutorial.php)
- [Google Maps API](/API/google-maps/index.php)
- [Flickr API](/API/flickr/tutorial.php)
- [Last.fm API](/API/last.fm/tutorial.php)
- [Twitter REST API](/API/twitter-rest-api/)
- [jQuery Plugin for Twitter API](/API/twitter-rest-api/jquery-plugins.php)

# Creating your first app with Flickr API

Last update on February 26 2020 08:09:07 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Introduction

Using Flickr API you can retrieve a plethora of photographs and in turn, may create awesome applications. Moreover, you may upload your application to Flickr's marketplace APP Garden and make bucks and recognition too.

In this tutorial, we will see how to get started with Flickr API. We will create a simple application using Flickr API and in the course, we learn some nuances of how to unleash the potential of Flickr's awesome photo sharing services.

[Live demo of your first Flickr App](your-first-app-on-flicker-api.html)

**Obtaining an API key**

Like so many other API's, here too, you have to obtain an API key from Flickr. You must have an Yahoo! account to log in to the flickr.com or if you don't have one, you have to sign up to Flickr. Once you are within Flickr, point your browser to https://www.flickr.com/services/api/. Go to 'Create an APP' for creating an API key. Click on the link "Request an API Key".

![Obtain API key step 1](https://www.w3resource.com/w3r_images/obtain-api-key-step1.png)

This will turn up two options, whether you want to go for a commercial app or a non-commercial one. Click on the appropriate link according to your intention.

![Obtain API key step 2](https://www.w3resource.com/w3r_images/obtain-api-key-step2.png)

That you will take you to a page where you have to provide them with a name for your app and a short description.

You have to acknowledge two trivia regarding rights and terms of use also. Please, the read the Terms Of use document spending a couple of minutes because that will help you take decisions both from entrepreneurs as well as developers point of view. Once you complete, hit Submit and you will be provided with an APP Key and Secret. Preserve these properly because you will need these in future while writing your app.

![Obtain API key step 3](https://www.w3resource.com/w3r_images/obtain-api-key-step3.png)

**Outline of our app**

In this app we will fetch hundred recent photos from Flickr and then filter them according to the size(in pixels) supplied by the user. Flickr offers several sizes of a photo and users can choose accordingly.

**Which methods we will use**

Flickr offers various methods to do a certain task. When you are developing an application, first and foremost you have to find out which method will do your job. Though, there may be occasions, when you need to use more than one methods to fit the bill.

For our application, we need to things to be done. First, fetching most recent photographs and second, filtering those photos available with respect to a specific size from given option of sizes.

From the list placed under API Methods in https://www.flickr.com/services/api/, you will find 'flickr.photos.getRecent' method, which will suffice to perform former of our two requirements..

For the latter, we will use 'flickr.photos.getSizes' method.

**Understanding methods**

Flickr API's methods construct an endpoint (an url) which returns data in XML or JSON format. Once that is done, you may decode that data using many programming languages and present that to your users. Every Flickr API method has got several arguments to be passed, Some required and some optional.

Clicking on the flickr.photos.getRecent will take you to https://www.flickr.com/services/api/flickr.photos.getRecent.html. A documentation of the methods is available here. You can see that there four types of arguments can be used with this method. Among them, 'api_key' is required.

You can pass a number of optional arguments as 'extra' to fetch some very useful information like description, license, date_upload, date_taken, owner_name etc. regarding the photos returned.

'per_page another optional argument returns a number of photos to return per page, If this argument is not supplied, a hundred photos are returned by default.

To return the number of pages containing results, another optional argument 'page' may be used. If not used, only a single page of the result will be returned.

Just below this, you will find a link pointing to the API explorer of this method. You can find the structure of the endpoint in Flickr's API Explorer. Click on the link available and you will find a page with instruments to construct the endpoint. For the same of simplicity, we will take the only per_page and assign a value of 10, so ten photos from the band of recent photos will only be returned.

**Format of data returned**

Next to 'Output' in this page, you will find several options in which data may be returned. Options available are XML(REST), JSON, JSONP and PHP Serial. Selecting XML will return data in XML format, JSON will return data in JSON format, if you are using PHP Serial format i.e PHP's built-in serialized data structure format, the returned data matches JSON response format and you can use, PHP's serialize() and unserialize() functions. For this, we will select JSON.

**A bit about Sign Call**

This is the application of authentication methods while using Flickr API. If you use 'Sign call as your_username with full permissions?' or 'Sign call with no user token?', in both cases, authentication will be implied. Often, authentication methods are accompanied by a user token, if you choose the later of the two options given, no user token will be required. For both of the cases, the user has to sign in using Flickr's authentication. For the third option 'Do not sign call?', that will be not required. For now, we will be selecting this option. Hit 'Call Method' we will be provided with a set of data returned in JSON format and a url.

**Structure of the URL**

Spending a little bit of time understanding the URL will help us to understand the formation and in turn will help us to construct as well as modify the URL.

The URL looks like following: https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api\_key=your\_key&per\_page=10&format=json&nojsoncallback=1

Sp the url begins with https://api.flickr.com/services/rest/?. Note that we must have https enabled from the server we are running this URL, since FLick'r API does not support http without SSL(Secure Socket Layer). Then method keyword adds the method you want to use, 'flickr.photos.getRecent' in this case. An '&' is used to add the next part of the URL. You have to supply 'api_key' here. Then it is specified that 'format=json', i.e. we are using JSON format and then 'nojsoncallback=1' specifies that we want raw JSON with no wrapper function. If you want to use a callback function instead, you may use 'jsoncallback=name_of_your_callback_function'.

For the 'flickr.photos.getSizes' the method also we will construct the URL in the similar fashion.

**Programming and representing data**

Time for some code now. As you have a URL which may return data of your demand, in JSON format here, you have to use a programming language to decode that JSON data and present that to the user. 'https://www.flickr.com/services/api/' page provides you with a list of programming language usage under 'API Kits' section. For this application, we will use Jquery to decode the JSON data returned and then append that to the HTML page. We will also collect the size of the photos user want those to be displayed.

So, we have three steps to go. First, we have to decode JSON data returned by 'flickr.photos.getRecent' method. Second, we have to collect data from browser supplied by the user to filter the available photos according to the size user want to see and then display only photos with that size. The code for the job is given below. Download the code, replace the api_key with yours, and play around.

    <html>
    <head>
    <title>Creating your first app with Flickr API</title>
    <link rel="stylesheet" type="text/css" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <style type="text/css">
    #sq,#lg-sq,#thumb,#small,#mid,#ori {
    width: 100%
    }
    <link rel="stylesheet" type="text/css" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    </style>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script>
    var apiurl,myresult,apiurl_size,selected_size;
    apiurl = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1";
    $(document).ready(function(){
    $("#sq").click(function(){
    selected_size=75;
    })
    });
    $(document).ready(function(){
    $("#lg-sq").click(function(){
    selected_size=150;
    })
    });
    $(document).ready(function(){
    $("#thumb").click(function(){
    selected_size=100;
    })
    });
    $(document).ready(function(){
    $("#small").click(function(){
    selected_size=240;
    })
    });
    $(document).ready(function(){
    $("#mid").click(function(){
    selected_size=500;
    })
    });
    $(document).ready(function(){
    $("#ori").click(function(){
    selected_size=640;
    })
    });
    $(document).ready(function(){
    $('#button').click(function(){
    $.getJSON(apiurl,function(json){
    $.each(json.photos.photo,function(i,myresult){
    apiurl_size = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id="+myresult.id+"&format=json&nojsoncallback=1";
    $.getJSON(apiurl_size,function(size){
    $.each(size.sizes.size,function(i,myresult_size){
    if(myresult_size.width==selected_size){
    $("#results").append('<p><a href="'+myresult_size.url+'" target="_blank"><img src="'+myresult_size.source+'"/></a></p>');
    }
    })
    })
    });
    });
    });
    });
    </script>
    </head>
    <body>
    <div class="container">
    <div class="row">
    <div class="col-md-12">
    <h2>Select size of photos (in pixels) you want them to be displayed</h2>
    </div>
    </div>
    <div class="row">
    <div class="col-md-2">
    <button type="button" class="btn btn-primary" id="sq">Square [75X75]</button>
    </div>
    <div class="col-md-2">
    <button type="button" class="btn btn-primary" id="lg-sq">Large Square [150X150]</button>
    </div>
    <div class="col-md-2">
    <button type="button" class="btn btn-primary" id="thumb">Thumbnail</button>
    </div>
    <div class="col-md-2">
    <button type="button" class="btn btn-primary" id="small">Small</button>
    </div>
    <div class="col-md-2">
    <button type="button" class="btn btn-primary" id="mid">Medium</button>
    </div>
    <div class="col-md-2">
    <button type="button" class="btn btn-primary" id="ori">Original</button>
    </div>
    </div>
    <div class="row">
    <div class="col-md-12">
    <h2>Hit This button to fetch photos</h2>
    <button type="button" class="btn btn-success" id="button">Fetch Recent Photos</button>
    <hr>
    </div>
    </div>
    <div class="row">
    <div class="col-md-12">
    <div id="results"></div>
    </div>
    </div>
    </div>
    </body>
    </html>

Download your first Flickr App

**Previous:** [Map options, properties, controls](https://www.w3resource.com/API/google-maps/google-maps-class-propertes-controls.php)  
**Next:** [Get the top artists and their playcounts with last.fm API](https://www.w3resource.com/API/last.fm/tutorial.php)

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
