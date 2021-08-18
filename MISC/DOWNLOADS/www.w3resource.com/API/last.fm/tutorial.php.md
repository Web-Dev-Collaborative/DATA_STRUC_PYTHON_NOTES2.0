 


- [Home](/index.php)
- ▼API
- [Google Plus](/API/google-plus/tutorial.php)
- [YouTube](/API/youtube/tutorial.php)
- [Google Maps API](/API/google-maps/index.php)
- [Flickr API](/API/flickr/tutorial.php)
- [Last.fm API](/API/last.fm/tutorial.php)
- [Twitter REST API](/API/twitter-rest-api/)
- [jQuery Plugin for Twitter API](/API/twitter-rest-api/jquery-plugins.php)

# Get the top artists and their playcounts with last.fm API

Last update on February 26 2020 08:09:07 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Introduction

Using last.fm API, developers may create applications to fetch and sort from a huge collection of music. In this tutorial, we will create a simple application using last.fm API. We will fetch top artists and their playcount and will render those, ordered by playcount in an HTML page.

[Live demo of your last.fm App](example.html)

**Obtaining an API key**

Go to http://www.last.fm/api. Click on the link "Get an API account". Login to last.fm if you have an account there. Optionally you may login using your Facebook account.

![Create API account link](https://www.w3resource.com/w3r_images/create-api-account-link.png)

Once logged in, it will ask to select kind of application you are going to create. For now, we select Non-Commercial. Also, provide the form with Application/Device Name, Application, description and Application homepage. Click on Create account.

At the end of the process, you will end up creating an app with an API KEY.

![Demo app](https://www.w3resource.com/w3r_images/demo-app.png)

**Outline of our app**

In this app, we will fetch top artists and their playcounts and render those within an HTML page.

**Code and explanation**

last.fm API offers several Methods by using which you can retrieve data. In this example, we will use 'user.getTopArtists' method. We will use 'http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=test&api\_key=4a9f5581a9cdf20a699f540ac52a95c9&limit=10&format=json&callback=?' url for fetching data. This returns JSON data. We then use Jquery to get data from that JSON and render. Code for the app as follows:

    <!doctype html>
    <html>
    <head>
    <title>Get the top artists and their playcounts using last.fm API</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    </head>
    <body>
    <script>
    $(document).ready(function() {
        $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=test&api_key=4a9f5581a9cdf20a699f540ac52a95c9&limit=10&format=json&callback=?", function(json) {
            var html = '';
            $.each(json.topartists.artist, function(i, item) {
                html += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>";
            });
            $('#result').append(html);
        });
    });
    </script>
    <div id="result"></div>
    </body>
    </html>

Download your last.fm App

**Previous:** [Creating your first app with Flickr API](https://www.w3resource.com/API/flickr/tutorial.php)  
**Next:** [Twitter REST API Tutorial](https://www.w3resource.com/API/twitter-rest-api/)

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
