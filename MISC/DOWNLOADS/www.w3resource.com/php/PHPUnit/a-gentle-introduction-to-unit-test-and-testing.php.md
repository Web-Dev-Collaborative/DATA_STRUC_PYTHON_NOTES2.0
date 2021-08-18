 


- [Home](/index.php)
- [PHP Tutorial](/php/php-home.php)
- ▼PHPUnit
- [A gentle introduction to unit test and testing](/php/PHPUnit/a-gentle-introduction-to-unit-test-and-testing.php)
- [Installation of php unit](/php/PHPUnit/installation-of-php-unit.php)
- [Writing tests for phpunit (data providers)](/php/PHPUnit/writing-tests-for-phpunit-data-providers.php)
- [Writing tests for phpunit (outputs)](/php/PHPUnit/writing-tests-for-phpunit-outputs.php)
- [Writing tests for phpunit (exceptions and errors)](/php/PHPUnit/writing-tests-for-phpunit-exceptions-and-errors.php)
- [The command-line test runner (1)](/php/PHPUnit/the-command-line-test-runner-1.php)
- [The command-line test runner (2)](/php/PHPUnit/the-command-line-test-runner-2.php)
- [Fixtures](/php/PHPUnit/fixtures.php)
- [More on fixtures](/php/PHPUnit/more-on-fixtures.php)
- [Organizing tests in phpunit](/php/PHPUnit/organizing-tests-in-phpunit.php)
- [Risky tests](/php/PHPUnit/risky-tests.php)
- [Incomplete and skipped tests](/php/PHPUnit/incomplete-and-skipped-tests.php)
- [Test doubles](/php/PHPUnit/test-doubles.php)

# A gentle introduction to unit test and testing

Last update on February 26 2020 08:09:58 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Introduction

In our everyday life, we in one way or the other find ways to check or test out things to ensure their functionalities suits our requirements. We test gadgets before paying for them, we even test food when we are in the kitchen, testing is very essential in life.

In programming testing  is an essential part of every programming language. If we don’t test our codes, how do we verify that it works as expected? Manual testing though can be performed irregularly, and this is usually very limited. Thus, the solution to proper software testing is writing automated tests which allows our application to be extensively tested just by executing certain written codes. In PHP such tests are written usually with a unit testing framework.

Over the years, unit testing has gained popularity and it now tends to be a standard practice in PHP with many popular frameworks such as Laravel, Code Igniter and Phalcon all requiring unit test coverage of their source code.

Though unit testing is often seen as tedious and time consuming, which could be true most of the time, but spending time writing tests improves the overall quality in our code, making our program bug free, and ensuring maximum performance. Unit testing in general gives us the confidence that our programs can be depended on.

**Myths about Unit Testing**

Unit testing and virtually all other forms of testing, have some developer myths which often hinders their adoption by developers.

- Unit testing is time consuming.
- Unit testing is too hard.
- Complex codes cannot be tested.
- If my code is working, why write a test.
- Writing unit test is boring.

These are testing fallacies, excuses which appear quite reasonable but are misinformed in subtle ways. So, let’s set things right!

Is testing time consuming? This question should rather be rephrased, does testing worth the time it take? Testing should be considered an integral part of software development as it eliminates or reduces the future time that should be spent on modifying, refactoring and fixing unexpected bugs in our code. Testing may not completely eliminate bugs, but just imagine the bugs without testing.

Complex codes cannot be tested: Complex codes is made up of smaller practical parts and testing these smaller parts will sum to testing the whole complex code. If our codes can’t easily be tested, then we have failed in writing practical and well-structured flexible codes which can be easily decoupled. It is always advised to write tests alongside with our codes to prevent us having to wait for so long to start testing ‘complex’ codes.

Does the code work? Yes, our codes may be working properly, but a working code is completely different from a working tested code. Tests alleviates us from the pain encountered when making changes, refactoring and adding new features since most integration issues have already been detected during the test.

Finally, is testing really and always boring? A lot of developers will say that testing is boring, but this is not true. They may find it boring because they will always wait till the end of the development phase to start writing tests. If you constantly switch from test to code, and forth you will actually get more accomplished with less fatigue. So, to prevent the assumed boredom of testing always switch tasks and don’t  fall into the trap of having to wait till the end of the application to start writing tests.

**Unit Testing in PHP**

Like we mentioned earlier, unit testing exists in almost if not all the programming languages, but for the purpose of this tutorial, we will briefly introduce unit testing in PHP programming language.

There are many ways to perform unit testing in PHP, the three most common methods are Marcus Baker’s SimpleTest and Sebastian Bergmann’s PHPUnit and the old but reliable phpt. All three allow us to write unit test codes in php and they offer a vast lot of functionalities.

In this tutorial, we talked about Testing and Unit test, and we tried to make us see the reasons why we must write test for our codes. In the next tutorial, we will look at the things required for us to write our first PHP test.

Don’t forget to Like, Share and Comment on this tutorial. Follow us on social media for more updates, bye for now.

**Next:** [Installation of php unit](https://www.w3resource.com/php/PHPUnit/installation-of-php-unit.php)



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

 

 
