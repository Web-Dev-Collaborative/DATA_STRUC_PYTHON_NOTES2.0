 


- [Home](/index.php)
- [API Home](/API/google-plus/tutorial.php)
- ▼Google Maps API V 3
- [Introduction](/API/google-maps/index.php)
- [Map Options, properties, controls](/API/google-maps/google-maps-class-propertes-controls.php)
- [more..]()

# Google Maps API V 3 - Tutorial

Last update on February 26 2020 08:09:10 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Introduction

Google Maps is a web-based mapping service application and technology provided by Google. The application provides detailed information about geographical regions, sites, street maps, a route planner for traveling by foot, car, aerial and satellite views of many places in numerous countries around the world. The Google maps API, gives you the freedom to create customized maps, which can do all sorts of cool staffs.  
This tutorial is designed to show the user (familiar with [JavaScript programming](https://www.w3resource.com/javascript/javascript.php) and [object-oriented programming](https://www.w3resource.com/javascript/object-property-method/working-with-objects.php) concepts) how to create a Google Map and related application using the Google Maps JavaScript API V 3.

**Geographic latitude and longitude**

We can imagine the Earth as a sphere, so how we described where a points is on it's surface? The most common way to locate points on the surface of the Earth is described by two numbers--its latitude and its longitude. If a ship's captain or a pilot wants to specify a position on a map, they use these "coordinates". These coordinates values are measured in degrees and represent angular distances calculated from the center of the Earth.

**Latitude:**  
Imagine the Earth as a transparent sphere with an axis around which it spins. The ends of the axis are the North and South Poles. The Equator is a line which encircles the Earth at an equal distance from the North and South Poles. The latitude of a point on the Earth's surface is the angle between the equatorial plane and a line that passes through that point.  
As the equator is situated at 0°, the North Pole at 90° north or 90° (a positive latitude implies north), and the South Pole at 90° south or –90° (a negative latitude implies north). Therefore latitude measurements range from 0° to +90° or 0° to –90°.



![earth latitude longitude](https://www.w3resource.com/w3r_images/earth-latitude-longitude.png)

**Longitude:**

Lines of longitude called meridians, run perpendicular to lines of latitude, and all pass through both poles. Each longitude line is part of a great circle. There is no obvious 0-degree point for longitude, as there is for latitude. Longitude identifies the east to west location of a point on the Earth, by measuring the angular distance from the Greenwich meridian (or Prime meridian, where longitude is 0), along with equator.  
Longitude measurements range from 0° to 180° east or 180° (a positive longitude implies east) and range from 0° to -180° west or -180° (a negative longitude implies west)

**Latitude and Longitude on Google map:**

![Google map latitude longitude](https://www.w3resource.com/w3r_images/google-map-latitude-longitude.png)

**Obtaining an API Key**

Using an API key all _Maps API applications_ load the maps. The API key is free, but Google monitor your application's Maps API usage and if it exceeds the [usage limits](https://developers.google.com/maps/documentation/javascript/usage#usage_limits), you must purchase additional quota.

To create an API key:

- Go to APIs Console at [https://code.google.com/apis/console](https://code.google.com/apis/console/?noredirect) and log in with your Google Account.
- Click the **Services** link from the left-hand menu.
- Activate the Google Maps API v3 service.
- Click the API Access link from the left-hand menu. Your API key is available from the API Access page, in the Simple API Access section. Maps API applications use the Key for browser apps.

![Google maps API key access](https://www.w3resource.com/w3r_images/api_console_key.jpg)

You can use the API key on any site. But it is recommended to use your key in your own domains to prevent use on unauthorized sites. To specify your own domain to use your API key click the Edit allowed referrers... link for your key.

**Create a simple map**

Here is a simple map example which displays a map centered on Berlin, Germany.

**Code:**

    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <style type="text/css">
       html { height: 100% }
       body { height: 100%; margin: 0; padding: 0 }
       #map-canvas { height: 100% }
    </style>
    <script type="text/javascript"
    src="https://maps.googleapis.com/maps/api/js?key=API_KEY&sensor=true">
    </script>
    <script type="text/javascript">
       function initialize()
       {
          var mapOptions = {
          center: new google.maps.LatLng(52.5167, 13.3833),
          zoom: 10,
          };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
       }
    google.maps.event.addDomListener(window, 'load', initialize);
     </script>
     </head>
     <body>
     <div id="map-canvas"></div>
     </body>
     </html>



[View the example in the browser](../google-maps/tutorial-examples/simple-map.html)

**Brief explanation:**

Here we use the simple HTML5 DOCTYPE as shown below.

    <!DOCTYPE html>

Most current browsers will render content that is declared with this DOCTYPE in "standards mode" which means that your application should be more cross-browser compatible. If you don't use this doctype, the said web page will be rendered in "quirks mode" and may not be able to render some of the features available. It will also make your webpage less cross browser compatible.

This CSS declaration indicates that the map container &lt;div&gt; (named map-canvas) should take up 100% of the height of the HTML body.

    <style type="text/css">
       html { height: 100% }
       body { height: 100%; margin: 0; padding: 0 }
       #map-canvas { height: 100% }
    </style>

The following script load the Google Maps API :

    <script type="text/javascript"
    src="https://maps.googleapis.com/maps/api/js?key=API_KEY&sensor=true">
    </script>

Use of the Google Maps API requires that you indicate whether your application is using a sensor (such as a GPS locator) to determine the user's location, which is important for mobile devices. To indicate that an application is using a sensor device you must pass a required sensor parameter to the &lt;script&gt; tag. Applications that determine the user's location via a sensor must pass sensor=true when loading the Maps API JavaScript.

**Map Options:**

    var mapOptions ={
      center: new google.maps.LatLng(52.5167, 13.3833),
      zoom: 10
      };


&lt;&gt;Where LatLng object holds the latitude and longitude of Berlin and "center" is used to center the map on this specific point.  
Zoom: The zoom property sets the current zoom level.

**The Map Object:**  
The following command will create the new map object :

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

**Loading the Map:**  
The following command will load the map:

    google.maps.event.addDomListener(window, 'load', initialize);

Next: Google Maps Javascript API V3 reference.

**Previous:** [YouTube API Tutorial](https://www.w3resource.com/API/youtube/tutorial.php)  
**Next:** [Google Maps API V 3 - Tutorial](https://www.w3resource.com/API/google-maps/google-maps-class-propertes-controls.php)

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
