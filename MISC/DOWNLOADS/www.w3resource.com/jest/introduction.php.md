 


- [Home](/index.php)
- ▼Jest
- [Introduction](/jest/introduction.php)
- [Jest Getting Started](/jest/jest-getting-started.php)
- [Using Matchers](/jest/using-matchers.php)
- [Testing Asynchronous Code](/jest/testing-asynchronous-code.php)
- [Setup and Teardown](/jest/setup-and-teardown.php)
- [Jest Platform](/jest/jest-platform.php)
- [Mock Functions](/jest/mock-functions.php)
- [Snapshot Testing](/jest/snapshot-testing.php)
- [Manual Mocks](/jest/manual-mocks.php)
- [Timer Mocks](/jest/timer-mocks.php)
- [An Async Example](/jest/an-async-example.php)
- [ES6 Class Mocks](/jest/es6-class-mocks.php)
- [Using with webpack](/jest/using-with-webpack.php)
- [Bypassing module mocks](/jest/bypassing-module-mocks.php)
- [Using with DynamoDB](/jest/using-with-dynamodb.php)
- [Using with MongoDB](/jest/using-with-mongodb.php)
- [Using with puppeteer](/jest/using-with-puppeteer.php)
- [DOM Manipulation](/jest/dom-manipulation.php)
- [Migrating to Jest](/jest/migrating-to-jest.php)
- [Watch Plugins](/jest/watch-plugins.php)
- [Testing React Native Apps](/jest/testing-react-native-apps.php)
- [Testing React Apps](/jest/testing-react-apps.php)
- [Troubleshooting](/jest/troubleshooting.php)
- [Testing Web Frameworks](/jest/testing-web-frameworks.php)
- [Expect](/jest/expect.php)
- [Globals](/jest/globals.php)
- [Mock Functions API reference](/jest/mock-functions-api-reference.php)
- [Jest Object](/jest/jest-object.php)
- [Configuring Jest compiled](/jest/jest-configuring-jest-compiled.php)
- [Jest CLI Options](/jest/Jest-cli-options.php)
- [Jest Architecture](/jest/jest-architecture.php)
- [More....]()

# Jest

Last update on May 22 2020 13:10:52 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

**Definition**

The Jest framework is a delightful JavaScript Testing Framework with a focus on simplicity. It is designed to ensure the correctness of any JavaScript codebase. Jest allows you to write tests with an approachable, familiar and feature-rich API that will give you results quickly. Jest works well with projects that uses Babel, TypeScript, Node.js, React, Angular and Vue.js.

**Brief History**

Jest was produced and is maintained by Facebook and had its initial on May 14, 2014. Since its released it has been an open sourced project. It is written in JavaScript.

**Comparism with Mocha**

Jest as a tool is very similar to Mocha, the differences between both tools are:

- Jest has a certain set of conventions, while Mocha is less opinionated.
- Jest works usually out of the box, because it is opinionated, while Mocha requires more configuration.
- Mocha is older and more established compared to Jest and has more tooling integrations

**Use Cases**

**Comparing expected results with actual results.**

Given certain parameters, you can check if the actual result is actual result is equal to the expected. As you do this over and over the function can quickly get bloated.

An example of this implementation is as given below:

    const add = (x, y) => x + y;

    describe("'add' utility", () => {
      it("given 3 and 3 as arguments, returns 6", () => {
        const result = add(3, 3);
        expect(result).toEqual(6);
      });
      it("given -3 and -3 as arguments, returns -6", () => {
        const result = add(-3, -3);
        expect(result).toEqual(-3);
      });
      it("given 3 and -3 as arguments, returns 0", () => {
        const result = add(3, -3);
        expect(result).toEqual(0);
      });
    });

- Avoiding unnecessary repetition

Jest comes in really handy when testing JavaScript applications, take for instance you have a test cases that follow a similar sequence of steps. This is common when you are unit testing helpers/utility functions.

Jest provides the test.each Jest utility.

This helper advises that you help you create the array of cases, where you can store arguments and the expected result.

    const add = (x, y) => x + y;

    const cases = [[2, 2, 4], [-2, -2, -4], [2, -2, 0]];

    describe("'add' utility", () => {
      test.each(cases)(
        "given %p and %p as arguments, returns %p",
        (firstArg, secondArg, expectedResult) => {
          const result = add(firstArg, secondArg);
          expect(result).toEqual(expectedResult);
        }
      );
    });

- Testing a component in your application

Take for instance that you want to test your React component, instead of rendering the graphical UI, which would require that you build the entire app, you can make use of a test renderer to quickly generate a serializable value for your React tree. An example is shown below:

    import React from 'react';
    import Link from '../Link.react';
    import renderer from 'react-test-renderer';

    it('renders correctly', () => {
      const tree = renderer
        .create(<Link page="http://www.example.com">Example Page</Link>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

The first time you run this test, Jest will create a snapshot file that looks like this:

    exports[`renders correctly 1`] = `
    <a
      className="normal"
      href="http://www.facebook.com"
      onMouseEnter={[Function]}
      onMouseLeave={[Function]}
    >
      Example Page
    </a>
    `;

**Next:** [Jest Getting Started](https://www.w3resource.com/jest/jest-getting-started.php)

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
