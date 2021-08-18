 


- [Home](/index.php)
- ▼Mocha
- [Getting started with Mocha](/mocha/getting-started.php)
- [Run Cycle Overview And Detects Multiple Calls To Done() Feature](/mocha/run-cycle-overview.php)
- [Assertions and Asynchronous codes](/mocha/assertions-and-asynchronous-code.php)
- [Synchronous code](/mocha/synchronous-code.php)
- [Delayed root suite pending tests, Exclusive tests and inclusive tests](/mocha/delayed-root-sulte-pending-tests-exclusive-tests-and-inclusive-test.php)
- [Retry test and dynamically generating tests](/mocha/retry-tests-and-dynamically-generating-test.php)
- [Timeouts and Diffs](/mocha/timeouts-and-diffs.php)
- [Command-line usage](/mocha/command-line-usage.php)
- [Interfaces](/mocha/interfaces.php)
- [Reporters](/mocha/reporters.php)
- [Running Mocha in the browser](/mocha/running-mocha-in-the-broweser.php)
- [Desktop notification support](/mocha/desktop-notification-support.php)
- [Configuring Mocha(NODE.JS)](/mocha/configuring-mocha.php)
- [Error Codes](/mocha/error-codes.php)
- [Editor Plugins](/mocha/editor-plugins.php)
- [Examples](/mocha/examples.php)
- [Testing Mocha and test duration](/mocha/testing-mocha.php)

# Introduction to Mocha

Last update on February 26 2020 08:08:49 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

Testing is an important aspect of the SDLC (software development life cycle). You really cannot say that you have developed a viable or reliable application if you have not tested it. Today we will introduce you to a very popular test framework, you most likely have seen it as a testing option when creating a Node powered application, be it Angular, Vue, Express etc.

So what is Mocha: Mocha is a feature-rich JavaScript test framework that runs on Node.js and in the browser, it makes asynchronous testing simple and fun. All Mocha test run serially, enabling flexible and accurate reporting, while at the same time mapping uncaught exceptions to the correct test cases

Mocha has lots of features which you will learn about in this tutorial series, they are:

<table><tbody><tr class="odd"><td>browser support</td><td>auto-exit to prevent "hanging" with an active loop</td></tr><tr class="even"><td>simple async support, including promises</td><td>easily meta-generate suites &amp; test-cases</td></tr><tr class="odd"><td>test coverage reporting</td><td>config file support</td></tr><tr class="even"><td>string diff support</td><td>mocha.opts file support</td></tr><tr class="odd"><td>javascript API for running tests</td><td>clickable suite titles to filter test execution</td></tr><tr class="even"><td>proper exit status for CI support etc</td><td>node debugger support</td></tr><tr class="odd"><td>auto-detects and disables coloring for non-ttys</td><td>detects multiple calls to done()</td></tr><tr class="even"><td>maps uncaught exceptions to the correct test case</td><td>use any assertion library you want</td></tr><tr class="odd"><td>async test timeout support</td><td>extensible reporting, bundled with 9+ reporters</td></tr><tr class="even"><td>test retry support</td><td>extensible test DSLs or "interfaces"</td></tr><tr class="odd"><td>test-specific timeouts</td><td>before, after, before each, after each hooks</td></tr><tr class="even"><td>Growl support</td><td>arbitrary transpiler support (coffee-script etc)</td></tr><tr class="odd"><td>reports test durations</td><td>TextMate bundle</td></tr><tr class="even"><td>highlights slow tests</td><td></td></tr><tr class="odd"><td>file watcher support</td><td></td></tr><tr class="even"><td>global variable leak detection</td><td></td></tr><tr class="odd"><td>optionally run tests that match a regexp</td><td></td></tr></tbody></table>

**Installation**

You can install mocha globally using npm by running:

    npm install --global mocha

![mocha installation ](https://www.w3resource.com/w3r_images/mocha-installation.png)

or you can add it as a development dependency for your project like this:

    npm install --save-dev mocha

It should be noted that Mocha requires Node.js V6.0.0 or newer as from Mocha v6.0.0

**Getting started**

In this section we will help you create your first test file.

    npm install mocha
    mkdir test
    //creates a folder called test
     $EDITOR test/test.js # or you open with your favorite editor

edit the test.js file in your editor to have the content below:

    var assert = require('assert');
    describe('Array', function() {
      describe('#indexOf()', function() {
        it('has to return -1 when the value is not present', function() {
          assert.equal([1, 2, 3].indexOf(4), -1);
        });
      });
    });

Back inside your terminal run:

    ./node_modules/mocha/bin/mocha

      Array
        #indexOf()
          ? has to return -1 when the value is not present


      1 passing (9ms)

Then you should set up a test script in package.json:

    "scripts": {
      "test": "mocha"
    }

Finally run tests with:

    npm test

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
