 


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

# Jest Getting Started

Last update on May 22 2020 13:10:54 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

You can install Jest using yarn:

    yarn add -dev jest

Or you can use npm:

    npm install --save-dev jest

Note: this documentation will use yarn commands, however, npm will also work.

To get started we will write a test for a hypothetical function that adds two numbers. The first thing we will do is to create a sum.js file:

    function sum(first, second) {
      return first + second;
    }
    module.exports = sum;

Then, we will create a file named sum.test.js. this file contains our actual test:

    const sum = require('./sum');
    test('adds 2 + 4 to equal 6', () => {
      expect(sum(2, 4)).toBe(6);
    });

Now add the following section to your package.json:

    {
      "scripts": {
        "test": "jest"
      }
    }

Finally, you need to run yarn test or npm run test and then, Jest will print the message below:

    PASS  ./sum.test.js
    ? adds 1 + 2 to equal 3 (5ms)

**You have successfully written your first test using Jest!**

The test above used expect and toBe to test that two values were exactly identical.

**Running from command line**

You can use the CLI to run Jest (that is if it's globally available in your PATH, e.g. by using yarn global add jest or npm install jest --global) with a variety of useful options.

If you want to run Jest on files matching my-test, by using config.json as a configuration file and displaying a native OS notification after the run:

    jest my-test --notify --config=config.json

**Additional Configuration**

**Generate a basic configuration file**

Depending on your project, Jest asks you a few questions and creates a basic configuration file with a short description for each option:

    jest -init

**Using Babel**

If you want to Babel, you have to install required dependencies via yarn:

    yarn add --dev babel-jest @babel/core @babel/preset-env

You should configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:

    // babel.config.js
    module.exports = {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    };

The ideal configuration for Babel depends on your project.

**Making your babel config jest-aware**

Jest sets process.env.NODE_ENV to 'test' if it's not set to something else. This can be used in your configuration conditionally setup only the compilation needed for Jest, e.g.

    // babel.config.js
    module.exports = api => {
      const isTest = api.env('test');
      // isTest can be used to determine what presets and plugins to use.

      return {
        // ...
      };
    };

**Note: babel-jest will be automatically installed when installing Jest and automatically transforms files if a babel configuration exists in your project. To avoid the illustrated behavior, you may explicitly reset the transform configuration option:**

    // jest.config.js
    module.exports = {
      transform: {},
    };

**Babel 6 support**

Jest 24 has dropped the support for Babel 6. It is highly recommended that you to upgrade to Babel 7, which is actively in maintenance. However, if you are not able to upgrade to Babel 7, you should either keep using Jest 23 or upgrade to Jest 24 while keeping babel-jest locked at version 23, as shown in the example below:

    "dependencies": {
      "babel-core": "^6.26.3",
      "babel-jest": "^23.6.0",
      "babel-preset-env": "^1.7.0",
      "jest": "^24.0.0"
    }

Although, we recommend that you use the same version of every Jest package, this workaround allows you to continue using the latest version of Jest with Babel 6 for now.

**Using webpack**

You can use Jest in projects that use webpack to manage assets, styles, and compilation. webpack offers some unique challenges over other tools

**Using TypeScript**

Jest also supports TypeScript, via Babel. First ensure you followed the instructions on using Babel above. Next, you need to install the @babel/preset-typescript via yarn:

    yarn add --dev @babel/preset-typescript

Then you should add @babel/preset-typescript to the list of presets in your babel.config.js.

    // babel.config.js
    module.exports = {
      presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
    +    '@babel/preset-typescript',
      ],
    };

However, some caveats exist while using TypeScript with Babel. This is because TypeScript support in Babel is just transpilation, Jest will not perform type-check on your your tests as they are run. If you need that, you may use ts-jest.

**Previous:** [Jest](https://www.w3resource.com/jest/introduction.php)  
**Next:** [Using Matchers](https://www.w3resource.com/jest/using-matchers.php)

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
