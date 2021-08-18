 


- [Home](/index.php)
- [PHP Tutorial](/php/php-home.php)
- ▼Composer
- [A gentle introduction to composer as a dependency manager](/php/composer/a-gentle-introduction-to-composer.php)
- [How to use composer installed packages](/php/composer/how-to-use-composer-installed-packages.php)
- [Making libraries or packages installable using composer](/php/composer/making-libraries-or-packages-installable-using-composer.php)
- [Create, publish and use your first composer package](/php/composer/create-publish-and-use-your-first-composer-package.php)
- [How to auto-update composer packages with webhooks](/php/composer/how-to-auto-update-composer-packages-with-webhooks.php)
- [How to make a package instabllable by composer](/php/composer/how-to-make-a-package-instabllable-by-composer.php)
- [Using composer to install a package in our project](/php/composer/using-composer-to-install-a-package-in-our-project.php)
- [The concept of composer packages and repositories](/php/composer/the-concept-of-composer-packages-and-repositories.php)
- [composer.json schema](/php/composer/composer-json-schema.php)
- [Composer command line interface and commands](/php/composer/composer-command-line-interface-and-commands.php)
- [Composer command line interface and commands (Part 2)](/php/composer/composer-command-line-interface-and-commands-part-2.php)
- [Composer command line interface and commands (Part 3)](/php/composer/composer-command-line-interface-and-commands-part-3.php)
- [Composer command line interface and commands (Part 4)](/php/composer/composer-command-line-interface-and-commands-part-4.php)
- [Composer command line interface and commands (Part 5)](/php/composer/composer-command-line-interface-and-commands-part-5.php)
- [Composer command line interface and commands (Part 6)](/php/composer/composer-command-line-interface-and-commands-part-6.php)
- [Composer configurations and its community](/php/composer/composer-configurations-and-its-community.php)

# A gentle introduction to composer as a dependency manager

Last update on February 26 2020 08:09:51 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Introduction

In this tutorial, we are going to look at what a composer is, and how it works as a dependency manager and how to set it up on your Machine(PC).

Most of the time, we create applications that will need to depend on some libraries that are, some already existing code written by some other developers. Since we don’t want to reinvent the wheel, we tend to consume some of these already existing codes(libraries). As our application grows bigger, the probability of reusing some of the already existing codes increases thus the need to efficiently manage these libraries commonly referred to as packages or dependencies.

The Composer as a package or dependency manager plays a vital role in helping us manage some of these dependencies which our application requires for optimal performance by saving them on a folder, most times the “vendor” folder.

This idea of dependency management is not a new concept, as composer was largely inspired by NPM a dependency manager for NodeJS and BUNDLER, a dependency manager of Ruby.

Think of it this way:

- Your project depends on this number of libraries.
- Some of these libraries/packages, depend on other sets of libraries or packages What then will composer do for you?
- Composer enables you to declare those set libraries your project will be depending on.
- It also checks for the version of these libraries best suited for your application and installs them for you by downloading them and their dependencies into your project directory.

Hence Composer eliminates that worry of having struggle to get the original library the package you intend to use in your application depends on.

**How do I get started with composer? (System Requirements)**

Composer like every other application needs some requirements for optimal performance. Thus, Composer basically requires a minimum of PHP Version 5.3.2 to run. A few other requirements may pop up as you try installing this in your machine.

**Is Composer Platform Dependent?**

Composer is a multi-platform application that runs very well on Windows, Linux and Mac Operating Systems.

**How do I then Install Composer?**

Composer can be installed mainly in two forms: Globally or Locally.

Installing Composer Globally, involves making it a system executable file, including it in your system path, thus becoming accessible via the command line while installing Composer locally implies installing composer only to a project, thus it is accessible only to this project.

\#Locally: There a lot of ways to install composer locally to your project, one of the common and fastest ways of getting composer installed locally in your system is by opening your project directory from the terminal and running the following commands as shown in the code snippet below.

    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
    php -r "if (hash_file('sha384', 'composer-setup.php') === '48e3236262b34d30969dca3c37281b3b4bbe3221bda826ac6a9a62d6444cdb0dcd0615698a5cbe587c3f0fe57a54d8f5')
    { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
    php composer-setup.php
    php -r "unlink('composer-setup.php');"

download the latest composer.phar in the current directory. Thus, the above four lines of code will:

- Download the installer to the current directory
- Verify the installer SHA-384
- Run the installer
- Remove the installer

**\#Installing Composer Globally:**

The easiest way to get composer started globally on your machine is simply by downloading and running the Composer-Setup.exe. Simply follow the installation prompts and it will successfully be installed in your machine. Remember to “thick the add to path” option as this will set up your PATH so that you can call “composer” from any directory in your command line.

After installation, close the current terminal, and test the usage of composer in a new terminal by just typing the word “composer” and taping the enter key. A description as show below will display in the terminal, telling you that composer has be successful set for use globally in your machine.

![Composer after install](https://www.w3resource.com/w3r_images/a-gentle-introduction-to-composer.png)

In the next tutorial, we will look at installing packages to our project using composer. Don’t forget to like and share this your friends, follow our twitter for more updates.

**Next:** [How to use composer installed packages in our project](https://www.w3resource.com/php/composer/how-to-use-composer-installed-packages.php)



---

<span class="underline"></span>

## PHP: Tips of the Day

**Pretty-Printing JSON with PHP**

PHP 5.4 offers the JSON_PRETTY_PRINT option for use with the json_encode() call.

http://php.net/manual/en/function.json-encode.php

    <?php
    ...
    $json_string = json_encode($data, JSON_PRETTY_PRINT);

Ref : https://bit.ly/3fPKClJ

---

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

 

 
