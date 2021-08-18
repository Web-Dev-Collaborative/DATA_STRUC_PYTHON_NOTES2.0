 


- [Home](/index.php)
- ▼Laravel Tutorial
- [Laravel tutorial](/laravel/laravel-tutorial.php)
- ▼Getting Started
- [Configuration](/laravel/configuration.php)
- [Directory structure](/laravel/directory-structure.php)
- [Homestead](/laravel/homestead.php)
- [Valet](/laravel/valet.php)
- [Deployment](/laravel/deployment.php)
- ▼Architecture Concepts
- [Request lifecycle](/laravel/request-lifecycle.php)
- [Service container](/laravel/service-container.php)
- [Service providers](/laravel/service-providers.php)
- [Facades](/laravel/facades.php)
- [Contracts](/laravel/contracts.php)
- ▼The Basics
- [Laravel routing](/laravel/laravel-routing.php)
- [Middleware](/laravel/middleware.php)
- [CSRF Protection](/laravel/CSRF-Protection.php)
- [Controllers](/laravel/controllers.php)
- [Requests](/laravel/requests.php)
- [HTTP Response](/laravel/HTTP-Response.php)
- [Views](/laravel/views.php)
- [URL Generation](/laravel/URL-generation.php)
- [Session](/laravel/session.php)
- [Validation](/laravel/validation.php)
- [Error Handling](/laravel/error-handling.php)
- [Logging](/laravel/logging.php)
- ▼Frontend Template
- [Blade Template](/laravel/blade-template.php)
- [Localization](/laravel/localization.php)
- [Compiling Assets](/laravel/compiling-assets.php)
- [Frontend Scaffolding](/laravel/frontend-scaffolding.php)
- ▼Security
- [Authentication](/laravel/authentication.php)
- [Authorization](/laravel/authorization.php)
- [Encryption](/laravel/encryption.php)
- [Hashing](/laravel/hashing.php)
- [API Authentication](/laravel/API-Authentication.php)
- [Email Verification](/laravel/email-verification.php)
- [Password Reset](/laravel/password-reset.php)
- ▼Digging Deeper
- [Artisan Console](/laravel/artisan-console.php)
- [Broadcasting](/laravel/broadcasting.php)
- [Cache](/laravel/cache.php)
- [Collections](/laravel/collections.php)
- [Events](/laravel/events.php)
- [File Storage](/laravel/file-storage.php)
- [Mail](/laravel/mail.php)
- [Notifications](/laravel/notifications.php)
- [Package Development](/laravel/package-development.php)
- [Queues](/laravel/queues.php)
- [Task Scheduling](/laravel/task-scheduling.php)
- [Database](/laravel/database.php)
- [Migrations](/laravel/migrations.php)
- [Pagination](/laravel/pagination.php)
- [Redis](/laravel/redis.php)
- [Seeding](/laravel/seeding.php)
- ▼Eloquent
- [Getting Started with Eloquent](/laravel/eloquent-getting-started.php)
- [Eloquent Relationships](/laravel/eloquent-relationships.php)
- [Eloquent Collections](/laravel/eloquent-collections.php)
- [Eloquent Mutators](/laravel/eloquent-mutators.php)
- [Eloquent API Resources](/laravel/eloquent-api-resources.php)
- [Eloquent Serialization](/laravel/eloquent-serialization.php)
- ▼Testing
- [Testing Getting Started](/laravel/testing-getting-started.php)
- [Console Tests](/laravel/console-tests.php)
- [HTTP Tests](/laravel/http-tests.php)
- [Database Testing](/laravel/database-testing.php)
- [Browser Testing](/laravel/browser-testing.php)
- [Mocking](/laravel/mocking.php)
- ▼Official Pakages
- [Laravel Scout](/laravel/laravel-scout.php)
- [Laravel Horizon](/laravel/laravel-horizon.php)
- [Laravel Cashier](/laravel/laravel-cashier.php)
- [Laravel Envoy](/laravel/laravel-envoy.php)
- [Laravel Socialite](/laravel/laravel-socialite.php)
- [Laravel Telescope](/laravel/laravel-telescope.php)
- [More....]()

# Laravel (5.7) Tutorial

Last update on February 26 2020 08:08:45 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

**Getting Started**

Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony. The aim of the laravel framework is to take the pain out of development by making common tasks used in web development, such as authentication, routing, sessions, and caching a much easy ride. Since it’s first beta release in 2011, the laravel framework has evolved over the years from it’s first version to it’s most recent stable version released in September, 2018. This tutorial is therefore based on the laravel version 5.7 So let’s get started by setting up laravel on our local machine with all its requirements.

Installation:

- Server Requirements
- Installing Laravel
- Configuration

**Installation:**

**Server Requirements**

Laravel has a few system requirements. Now, these requirements have been satisfied by a laravel feature known as the Laravel Homestead which is a Vagrant virtual machine that provides Laravel developers with all the tools necessary to develop Laravel straight out of the box, that is useful in developing full scale web applications. It's highly recommended that you use Homestead as your local Laravel development environment.

However, if you are not using Homestead, you will need to make sure your server meets the following requirements:

- PHP &gt;= 7.1.3
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- Ctype PHP Extension
- JSON PHP Extension
- BCMath PHP Extension

declaring, resolving and using **dependencies** required by the project in an automated fashion

**Installing Laravel**

As dependencies in Javascript based projects are managed with package managers such as npm or yarn, similarly, Laravel utilizesComposer to manage its dependencies. So, before using Laravel, make sure you have Composer installed on your machine. There are several ways to install laravel and initialize a laravel project. They are listed below;

**Via laravel installer**

You will firstly need to  download the Laravel installer using Composer:

    composer global require laravel/installer

Make sure to place composer's system-wide vendor bin directory in your $PATH . This is to ensure that laravel can be located by your system and also executed. Based on your operating system(macOS or Linux Distributions), this directory exists in different locations; however, some common locations include:

- macOS: $HOME/.composer/vendor/bin
- GNU / Linux Distributions: $HOME/.config/composer/vendor/bin

Once installed, the laravel new command will create a fresh Laravel installation in the directory you specify.

For instance, this command laravel new app will create a directory named app containing a fresh Laravel installation with all of Laravel's dependencies already installed.

**Via Composer Create-Project**

Another option is to use the composer create-project command in your terminal like this;

    composer create-project --prefer-dist laravel/laravel blog

**Via Local Development Server**

If you have PHP installed locally via the xampp development server, you can use the php artisan serve command, to serve your application. This command will start a development server at  
http://localhost:8000

**Configuration:**

**Configuration Files**

The **config** directory in your project includes various configurations and associated parameters required for the smooth functioning of a Laravel application. Various files included within the config folder are as shown in the image here. The filenames work as per the functionality associated with them

![Laravel configuration file.](https://www.w3resource.com/w3r_images/laravel-configuration-file.png)

**Web Server Configuration**

Pretty URLs

**Apache**

Laravel includes a _public/.htaccess_ file that is used to provide URL without the _index.php_ front controller in the path. Before serving laravel with Apache,enable the _mod_rewrite_ module so the _.htaccess_ file will be honored by the server.

Options +FollowSymLinks -Indexes

RewriteEngine On

RewriteCond %{HTTP:Authorization}

RewriteRule .\* - \[E=HTTP_AUTHORIZATION:%{HTTP:Authorization}\]

RewriteCond %{REQUEST_FILENAME} !-d

RewriteCond %{REQUEST_FILENAME} !-f

RewriteRule ^ index.php \[L\]

**Nginx**

If you are using Nginx, the following directive in your site configuration will direct all requests to the index.php front controller:

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

When using Laravel's Vagrant virtual machine called Homestead, these pretty URLs are automatically configured.

**Next:** [Laravel (5.7) Configuration](https://www.w3resource.com/laravel/configuration.php)

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
