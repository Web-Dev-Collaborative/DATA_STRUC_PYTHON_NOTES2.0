 


- [Home](/index.php)
- ▼API
- [Google Plus](/API/google-plus/tutorial.php)
- [YouTube](/API/youtube/tutorial.php)
- [Google Maps API](/API/google-maps/index.php)
- [Flickr API](/API/flickr/tutorial.php)
- [Last.fm API](/API/last.fm/tutorial.php)
- [Twitter REST API](/API/twitter-rest-api/)
- [jQuery Plugin for Twitter API](/API/twitter-rest-api/jquery-plugins.php)

# Twitter REST API Tutorial

Last update on February 26 2020 08:09:10 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Introduction

Twitter REST API allows you to retrieve tweets and related information from Twitter. This tutorial will unleash how to get started with Twitter REST API. We will work with Twitter REST API V1.1

**Obtain Keys**

Point your browser to http://apps.twitter.com, login with your Twitter username and password and then from the dropdown menu under your username, click on create a new application.

![Create an Application - twitter REST API](https://www.w3resource.com/w3r_images/auth2.jpg)

After you fill the details required here and hot submit, you will end up with following.

![Application Settings - twitter REST API](https://www.w3resource.com/w3r_images/auth3.jpg)

You also need to generate Access keys from this page.

**Download Authentication library**

Download Twitter API authentication library from Github with the following command.

    git clone https://github.com/abraham/twitteroauth.git

**Creating a application**

Following code is used to create the application(in PHP).

    <?php
    session_start();
    require_once("twitteroauth/twitteroauth/twitteroauth.php"); //Path to twitteroauth library you downloaded in step 3

    $twitteruser = "w3resource"; //user name you want to reference
    $notweets = 2; //how many tweets you want to retrieve
    $consumerkey = "sqrzNfTYAhdKKFe8i0jkbmfJc";
    $consumersecret = "UY4UiIjYTuB4Z09Kh5ZeC8nA1M9rPT9VNNutZa8wPivVCj6SoV";
    $accesstoken = "217674868-6jGUXSmNd1ldEgPm19Ms0sOVd1NWHlqOPOvDjD1Z";
    $accesstokensecret = "KehU1HYSmeo5JrNhlWbPrqXPaVWJMr2gi72UINuaDAufQ";

    function getToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
      $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
      return $connection;
    }

    $connection = getToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);

    $tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);

    echo json_encode($tweets);
    //echo $tweets; //testing remove for production
    ?>

Make sure your filename is the same as you mentioned in the url name when you created API keys for your application.

[You may view the live demo of the application here](introduction-example.php).

**Previous:** [Get the top artists and their playcounts with last.fm API](https://www.w3resource.com/API/last.fm/tutorial.php)  
**Next:** [Jquery plugins for Twitter API](https://www.w3resource.com/API/twitter-rest-api/jquery-plugins.php)

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
