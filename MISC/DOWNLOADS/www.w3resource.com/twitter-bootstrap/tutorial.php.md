 

 

- [Home](/index.php)
- [Twitter Bootstrap Examples](/twitter-bootstrap/examples.php)
- ▼Twitter Bootstrap Tutorials
- [Introduction](/twitter-bootstrap/tutorial.php)
- [CSS overview](/twitter-bootstrap/CSS-overview.php)
- [Grid system tutorial](/twitter-bootstrap/grid-system-tutorial.php)
- [Layout tutorial](/twitter-bootstrap/layout-tutorial.php)
- [Responsive Design](/twitter-bootstrap/responsive-design.php)
- [Disable Responsiveness](/twitter-bootstrap/disable-responsiveness.php)
- [Typography tutorial](/twitter-bootstrap/typography-tutorial.php)
- [Glyphicons tutorial](/twitter-bootstrap/glyphicons.php)
- [Customize Glyphicons](/twitter-bootstrap/3/glyph-customization.html)
- [Tables tutorial](/twitter-bootstrap/tables-tutorial.php)
- [Forms tutorial](/twitter-bootstrap/forms-tutorial.php)
- [Button tutorial](/twitter-bootstrap/button-tutorial.php)
- [Image tutorial](/twitter-bootstrap/image-tutorial.php)
- [Icons Tutorial](/twitter-bootstrap/icons.php)
- [Tabs and pills based navigation tutorial](/twitter-bootstrap/nav-tabs-and-pills-tutorial.php)
- [Navbar Tutorial](/twitter-bootstrap/navbar-tutorial.php)
- [Inline labels and badges](/twitter-bootstrap/inline-labels-and-badges.php)
- [Thumbnails Tutorial](/twitter-bootstrap/thumbnails-tutorial.php)
- [Progress bars](/twitter-bootstrap/progress-bars-tutorial.php)
- [Breadcrumbs Tutorial](/twitter-bootstrap/breadcrumbs-tutorial.php)
- [Pagination Tutorial](/twitter-bootstrap/pagination-tutorial.php)
- [Alerts and Errors tutorial](/twitter-bootstrap/alerts-and-errors-tutorial.php)
- [List group/Pricing table tutorial](/twitter-bootstrap/list-group.php)
- [Center a div](/twitter-bootstrap/center-a-div.php)
- [Twitter Bootstrap with Less](/twitter-bootstrap/twitter-bootstrap-with-less.php)
- [Variations with Bootstrap Material Design](/twitter-bootstrap/variations-using-bootstrap-material-design.php)
- ▼JavaScript Plugins
- [Modals](/twitter-bootstrap/modals-tutorial.php)
- [Popover](/twitter-bootstrap/popover-tutorial.php)
- [Dropdown](/twitter-bootstrap/dropdown.php)
- [scrollspy](/twitter-bootstrap/scrollspy-tutorial.php)
- [Carousel](/twitter-bootstrap/carousel-tutorial.php)
- [Typehead](/twitter-bootstrap/typehead.php)
- [Button](/twitter-bootstrap/button.php)
- [Collapse](/twitter-bootstrap/collapse.php)

# Twitter Bootstrap tutorial

Last update on February 26 2020 08:08:55 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Objective

The most popular of the front end frameworks, Twitter Bootstrap, has come to its third version (v3.0.0). This _Twitter Bootstrap Tutorial for beginners_ will get you started with Twitter Bootstrap 3. If you have already used Bootstrap before, this will introduce you with new features came with the version.

You will also see how to customize the out of the box features of the framework, using grids to creating a layout, creating navigation with nav, creating dropdowns, using carousal, adding third party staff like embedding social plugins and Google Map and more. We will end up creating a working responsive website and in the way will explore some of the nuances of the framework.

[View Demo](new.html)

[Download Source Code](https://www.w3resource.com/twitter-bootstrap/demo-v3.zip)

**Bootstrap Examples**

To provide you with Better understanding, we have explicitly compiled a good amount of [Bootstrap Examples](examples.php) besides the ones included with the tutorials. You can view code, view a live demo, and play around with the code online by yourself.

**What is twitter bootstrap**

Twitter Bootstrap is a front end framework to develop web apps and sites fast. In modern web development, there are several components which are required in almost all web projects. Bootstrap provides you with all those basic modules - Grid, Typography, Tables, Forms, Buttons, and Responsiveness. Besides, there are a plethora of other useful front-end components like Dropdowns, Navigation, Modals, Typehead, Pagination, Carousal, Breadcrumb, Tab, Thumbnails, Headers etc. With these, you can make a web project up and running quickly and easily.

Moreover, since the entire framework is module based, you can customize it with your own bit of CSS or even go for a complete overhaul after getting started.

It is based on the several best practices and we believe it is a very good point to start learning modern day web development with HTML, and JavaScript/Jquery once you know the basics.

Though there are criticisms, that all Bootstrap made projects looks same and you can make a website up without much of HTML+CSS knowledge, we need to understand that Bootstrap is a generic framework and like any other generic stuff, you need to customize it to look it exclusively. And you need to delveloped when you are on your way to customizing it and that is not feasible without a well understanding of HTML+CSS.

There are of course very good front-end frameworks available beside bootstrap and it's completely a developer's choice who wants which. But it is definitely worth trying.

Why do you use Twitter Bootstrap [in your projects](https://plus.google.com/115926626994522158963)? And if you are using it for the first time, explore it with us and [let us know your take](#disqus_thread).

W3resource has an existing series of Twitter Bootstrap Tutorial discussing the framework in detail. We will update the entire series with the latest version 3.0.0 and will add more useful content and examples. Please [subscribe to our Feed](https://feeds.feedburner.com/W3resource) to stay tuned.

**Download and understand file structure**

You can download Bootstrap Version 3.0.0 from *https://github.com/twbs/bootstrap/archive/v3.0.0.zip* (full) or *https://github.com/twbs/bootstrap/releases/download/v3.0.0/bootstrap-3.0.0-dist.zip*(short). We have used the first one, but you may use the second one too.

Moreover, our code which has given to be downloaded contains a bootstrap code folder downloaded from the first link. This also contains the custom.css file we have used to _customize Bootstrap's original css_.

Once unzipped, you would find that there are several files and folders are available within the root folder bootstrap-3.0.0.

The main CSS files - bootstrap.css and minified version of it bootstrap-min.css are available within 'css' folder which is placed within 'dist' folder under bootstrap-3.0.0.

Within 'dist' there is a 'js' folder, which contains the main JavaScript file bootstrap.js and a minified version of it.

There is a separate 'js' folder within the root, which contains different JavaScript plugins in separate files.

Another 'js' folder is found within 'assets' folder within the root. This holds html5shiv.js which is HTML5 shim, used for IE8 support. There is also respond.min.js file, used for supporting media queries in IE8. This folder also contains jquery.js on which Bootstrap's js plugins depends.

There is an 'ico' folder within the same containing icons for favicon and icons for various mobile devices.

'css' folder in the same path contains css files for documentation.

'\_includes' and '\_layouts' folder contains some default layout structure files which may be useful for rapid prototyping.

'less' folder within root contains several .less files. If you are going for less based development, these files are useful for you.

Within the root folder. there are lies several files. Some of them are HTML files which can be used for basic prototyping. Besides, there is bower.json, browserstack.json used for Bower based compilation. There is also composer.json and a YAML file \_config.yml.

Besides downloading from the link given, you may also compile all CSS, js files with the following command -

    $ bower install bootstrap

You may clone the Bootstrap's Git repo

    git clone git://github.com/twbs/bootstrap.git

For this tutorial, we have simple downloaded the Zip file and will be working out of that.

Once you finish this tutorial, we encourage you to install with bower and let us know how it works.

NetDNA hosts compiled and minified version of Bootstrap CSS, Js, and optional theme css. You may include them like following

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-theme.min.css">

    <!-- Latest compiled and minified JavaScript -->
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>

**Develop with Bootstrap v3.0.0**

**Basic HTML**

Following is the basic HTML structure we will be using for our project

    <!DOCTYPE html>
    <html>
      <head>
        <title>Bootstrap V3 template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
        <!-- Bootstrap -->
        <link href="bootstrap-3.0.0/dist/css/bootstrap.min.css" rel="stylesheet" media="screen">

        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="bootstrap-3.0.0/assets/js/html5shiv.js"></script>
          <script src="bootstrap-3.0.0/assets/js/respond.min.js"></script>
        <![endif]-->
      </head>
      <body>
        <h1>Hello, world!</h1>

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="//code.jquery.com/jquery.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="bootstrap-3.0.0/dist/js/bootstrap.min.js"></script>
      </body>
    </html>

Note that _html5shiv.js and respond.min.js are added in this template for IE8 support. Adding these files are to Bootstrap version 3._

We have placed the bootstrap-3.0.0 folder within twitter-bootstrap folder which is placed within our web server's root. All html files we will be creating will be placed within twitter-bootstrap folder. The purpose of stating this is nothing but to ease your deployment process.

**Customization**

We are going to _customize the out of the box styles of the Bootstrap's CSS_. So, without disturbing the original CSS file, which is within dist folder of the bootstrap-3.0.0, we are going to create a separate CSS file called custom.css in the same folder. We will then include that CSS file within our HTML files just bellows the original CSS file. This way, we will be able to override the default styles when you want, but, if Bootstrap upgrades itself, the original CSS file can also upgrade without disturbing our own customization. We suggest you to follow this method in your development process also.

**Creating navigation**

For creating navigation will add the following code in our HTML file, just after the opening body tag.

    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <ul class="nav navbar-nav">
      <li><a href="new.html" class="navbar-brand">
    <img src="logo.png"></a></li>
      <li class="active"><a href="#">Home</a></li>
      <li><a href="price.html">Price</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Social<b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li class="socials"><g:plusone annotation="inline" width="150"></g:plusone></li>
              <li class="socials"><div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="The pixel width of the plugin" data-height="The pixel height of the plugin" data-colorscheme="light" data-layout="standard" data-action="like" data-show-faces="true" data-send="false"></div></li>
              <li class="socials"><a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></li>
           </ul>
          </li>
      </ul>
    </nav>

For navigation, Bootstrap uses 'navbar' class in the container level. So, it is assigned to the nav element which holds the entire navigation.

We have used 'navbar-inverse' class along with to change the default color of the navigation bar dark instead of the default lighter one. 'navbar-fixed-top' class makes sure that the navbar stays fixed in the top position when we scroll down our HTML page.

_Using role="navigation" is new in Bootstrap V3.0.0 while creating navigation_. Bootstrap recommends to use this for navbars for _accessibility purpose_.

At this point, we have added 'padding-top: 80px;' to the body in the custom.css file. Number pf pixels you add as top padding to the body may vary, but unless you do so, the top part of our content after navbar will be hidden.

Within the container nav, we have an unordered list with class 'nav' and 'navbar-nav'. Within this unordered list. each list item holds a link in the navigation.

'navbar-brand' class is used to present the brand name. We have used an image for that. Since our image's height is more than the line height of the navbar, we made some customization here. We have increased the 'line-height' property of the '.navbar-nav&gt;li&gt;a' to 50px instead of default 20px. We have also made the font size 16px.

For the right most link, we have added dropdown. For that 'dropdown' class is added to the associated li, just after that, an anchor is added having two classes 'dropdown-toggle' and 'caret'. This anchor actually holds the anchor text social in our project. This li then holds an unordered list within this and again each list item of that nested list holds a link presented in the dropdown.

We have added social plugins in the dropdown. The first li holds a markup for Google Plus, the second li holds a markup for Facebook and third li holds markup and some js script for displaying Twitter button.

Additionally, you have to add the following markup and script just after the opening body tag, to make the Facebook button to work

    <div id="fb-root"></div>

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

To make Twitter Button work, we have added the following script just before the closing body tag

    (function() {
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
      })();


We used the following style to add some adding to the social buttons with 'socials' class

    .socials {
    padding: 10px;
    }

This completes our navigation.

**Creating slideshow with carousal**

For creating a slideshow just below the navbar, on the home page of our project. we will use the following markup

    <div id="carousel-example-generic" class="carousel slide">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <div class="item active">
          <img src="computer.jpg" alt="...">
          <div class="carousel-caption">
            <h1>Large Desktops are everywhere</h1>
            <p><button class="btn btn-success btn-lg">Try 30 day trial now</p>
          </div>
        </div>
        <div class="item">
          <img src="mobile.jpg" alt="...">
          <div class="carousel-caption">
            <h1>Mobiles are outnumbering desktops</h1>
            <p><button class="btn btn-success btn-lg">Try 30 day trial now</p>
          </div>
        </div>
    <div class="item">
          <img src="cloud1.jpg" alt="...">
          <div class="carousel-caption">
            <h1>Enterprises are adopting Cloud computing fast</h1>
            <p><button class="btn btn-success btn-lg">Try 30 day trial now</p>
          </div>
        </div>
      </div>
      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
        <span class="icon-prev"></span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
        <span class="icon-next"></span>
      </a>
    </div>
    </div>

There are four parts in the Carousal. The main container is defined using a div tag and 'carousel slide' class is assigned to it.

Then there is an ordered list having 'carousel-indicators' class associated with it. Each of the list item in this ol refers to a slide. class 'active' is assigned to the slide which loads by default when the page loads. When rendered, you can see them as tiny circles just below the caption.

Then, each slide (image) is placed within a div tag and class 'item' is assigned to it. Each of these items again nests a div with class 'carousel-caption' assigned to it. carousel-caption holds some markup which is displayed as captions along with the image. We have an h1 and a button wrapped in a paragraph here, but you may have your own markup.

The last part is for next previous and slide/slide by control. This is defined using 'left' and 'carousel-control' for previous and 'right' and 'carousel-control' classes for next.

'icon-prev' and 'icon-next' classes are used for next and previous icons.

We have made some _customization in the default carousal_. We wanted the captions, indicators, and next/previous icons to be rendered some pixels above its default position.

For that, we have added the following styles in our custom.css file

    .carousel-inner .item .carousel-caption {
    position:absolute;
    top: 200px
    }
    .carousel-indicators {
    position: absolute;
    top: 400px;
    }
    .navbar {
    margin-bottom:0;
    }
    .navbar-nav>li>a {
    line-height: 50px;
    font-size: 16px
    }

We have also customized h1 by adding a bottom margin of 30 pixels to it.

    h1 {
      margin-bottom: 30px
      }


**Responsive Image**

You might have already noticed that for each of the images in the slideshow, we have used 'img-responsive' class. This is a new feature in Bootstrap v3.0.0. _Using the 'img-responsive' class along with img tag, Bootstrap makes the images responsive_.

**Creating Grid**

Below the slideshow, we have placed our content using grids. We opened the grid with a div with 'container' class. Note that we are going to develop a responsive website and unlike previous versions of Bootstrap, here, we have a single class for container and the is responsive by default.

Container div nests number of divs (three in the first row and six in the second row) with class 'row' associated with them to create rows of the Bootstrap's grid.

Each row then holds divs with class 'col-x-y' to create columns. The value of x can be xs for mobile devices, sm for tablets, md for laptops and smaller desktop screens, and lg for large desktop screens. it takes a mobile first approach. The value of y can be any positive integer but a total number of columns in a grid must not exceed 12. In our project, we have used lg for the sake of simplicity but since we have done so, you may have a stacked experience while watching the project site in mobile or tablets.

In a couple of days we will have a complete tutorial on Grid system of Twitter Bootstrap V3.0.0 and there we will explore its awesomeness of the responsive capabilities.

In this example, we have wanted three equal width columns in our first row, so we used 'col-lg-4' for all of the columns. In the second row, we have made it 'col-lg-2' since we wanted six columns.

Following is the markup for grid containing two rows, the first row has three columns and the second row has six columns.

    <div class="row barone">
    <div class="col-lg-2">
    <p><img src="https://www.w3resource.com/images/w3resourcelogo.gif"></p>
    </div>
    <div class="col-lg-2">
    <p><img src="https://w3resource.com/update-images/php.png"></p>
    </div>
    <div class="col-lg-2">
    <p><img src="https://w3resource.com/update-images/mysql-logo.jpg"></p>
    </div>
    <div class="col-lg-2">
    <p><img src="https://w3resource.com/update-images/javascript-logo.png"></p>
    </div>
    <div class="col-lg-2">
    <p><img src="https://w3resource.com/update-images/java.png"></p>
    </div>
    <div class="col-lg-2">
    <p><img src="https://w3resource.com/update-images/postgresql.png"></p>
    </div>
    </div>

We ended up the grid with a hr and a footer with following markup

    <hr>
    <p>[email protected] by ToDo App.</p>

**Using tables**

In the price.html page of our project, we are using a table to render a price table. We used the following markup

    <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Individual</th>
                  <th>Small Team</th>
                  <th>Medium Team</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><h3>No. Of users</h3></td>
                  <td><span class="badge">One</span></td>
                  <td><span class="badge">Five</span></td>
                  <td><span class="badge">Fifteen</span></td>
                  <td><span class="badge">Unlimited</span></td>
               </tr>
                <tr>
                  <td><h3>Pro training</h3></td>
                  <td><span class="badge">No</span></td>
                  <td><span class="badge">Yes</span></td>
                  <td><span class="badge">Yes</span></td>
                  <td><span class="badge">Yes</span></td>
               </tr>
                <tr>
                  <td><h3>Forum Support</h3></td>
                  <td><span class="badge">Yes</span></td>
                  <td><span class="badge">Yes</span></td>
                  <td><span class="badge">Yes</span></td>
                  <td><span class="badge">Yes</span></td>
               </tr>
        <tr>
                  <td><h3>In person support</h3></td>
                  <td><span class="badge">No</span></td>
                  <td><span class="badge">No</span></td>
                  <td><span class="badge">Yes</span></td>
                  <td><span class="badge">Yes</span></td>
               </tr>
           <tr>
                  <td><h3>Weekly webinars</h3></td>
                  <td><span class="badge">No</span></td>
                  <td><span class="badge">No</span></td>
                  <td><span class="badge">Yes</span></td>
                  <td><span class="badge">Yes</span></td>
               </tr>
         <tr>
                  <td><h3>Price</h3></td>
                  <td><button type="button" class="btn btn-warning btn-lg">$9/Month</button></td>
                  <td><button type="button" class="btn btn-warning btn-lg">$19/Month</button></td>
                  <td><button type="button" class="btn btn-warning btn-lg">$49/Month</button></td>
                  <td><button type="button" class="btn btn-warning btn-lg">$99/Month</button></td>
               </tr>
            <tr>
                  <td></td>
                  <td><button type="button" class="btn btn-success btn-lg">Buy now</button></td>
                  <td><button type="button" class="btn btn-success btn-lg"">Buy now</button></td>
                  <td><button type="button" class="btn btn-success btn-lg"">Buy now</button></td>
                  <td><button type="button" class="btn btn-success btn-lg"">Buy now</button></td>
               </tr>
              </tbody>
            </table>


Two classes 'table' and 'table-bordered' are used which are default form Bootstrap's original css file. But we have made some _customizations to make the table heads look different_ by adding following css in our customize.css file

    th {
    background-color: #428bca;
    color: #ec8007;
    z-index: 10;
    text-shadow: 1px 1px 1px #fff;
    font-size: 24px;
    }

**Using badges**

We have used class 'badge' for displaying some texts within our table. We have customized badge class also with following css

    .badge {
    background-color: #428bca;
    color: #fff;
    font-size: 22px;
    }

For this and contact.html page, we have added another css rule in customize.css

    .container > h1 {
    text-align: center;
    }

This makes the h1 aligned center.

**Using form**

In the contact.html file we have created three columns and in the first column, we have embedded a from. We have used default styles for this.

    <form class="form-horizontal" role="form">
      <div class="form-group">
        <label for="email" class="col-lg-2 control-label">Email</label>
        <div class="col-lg-10">
          <input type="email" class="form-control" id="email" placeholder="Email">
        </div>
      </div>
      <div class="form-group">
        <label for="name" class="col-lg-2 control-label">Name</label>
        <div class="col-lg-10">
          <input type="text" class="form-control" id="name" placeholder="Name">
        </div>
      </div>
       <div class="form-group">
        <label for="country" class="col-lg-2 control-label">Country</label>
        <div class="col-lg-10">
          <select>
          <option>USA</option>
          <option>India</option>
          <option>UK</option>
          <option>Autralia</option>
          </select>
        </div>
      </div>
    <div class="form-group">
        <label for="desc" class="col-lg-2 control-label">Message</label>
        <div class="col-lg-10">
          <textarea rows="5" cols="50"></textarea>
        </div>
      </div>

      <div class="form-group">
        <div class="col-lg-offset-2 col-lg-10">
          <button type="submit" class="btn btn-default">Submit</button>
        </div>
      </div>
    </form>

'form-horizontal' class places the form controls horizontally. _Note that there is role="form" added for accessibility. This is anew feature of version 3.0.0._

_For placing each of the form control Bootstrap 3.0.0 uses a new 'form-group' class._

In the second column of the grid in this page, we have placed some text simply.

**Adding Google map**

In the third column of the grid in the contact.html page, we have added Google Map. For that, we have used the following markup

    <div id="map_canvas"></div>
      </div>


And the following js, which has been added at the top the HTML file within head

    function initialize() {
            var map_canvas = document.getElementById('map_canvas');
            var map_options = {
              center: new google.maps.LatLng(23.244066, 87.861276),
              zoom: 8,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(map_canvas, map_options)
          }
          google.maps.event.addDomListener(window, 'load', initialize);


And you must add the following script tag before the said js

    <script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>

You have to add following style in custom.css for the map to be rendered properly

    #map_canvas {
            width: 400px;
            height: 400px;
    }

This is how we have created our first simple project based on Twitter Bootstrap V3.0.0. But we have just scratched the surface. This series will update all the Twitter Bootstrap Tutorial we have to version 3.0.0 exploring new techniques and customizations.

Questions? Suggestions? Bragging? Join the discussion below. For the upcoming tutorials, please subscribe to our [Feed](https://feeds.feedburner.com/W3resource).

**Next:** [Twitter Bootstrap 3 CSS Overview](https://www.w3resource.com/twitter-bootstrap/CSS-overview.php)

---

<span class="underline"></span>

 

---

<span class="underline"></span>

<span class="underline"></span>

<span class="underline"></span>

 
