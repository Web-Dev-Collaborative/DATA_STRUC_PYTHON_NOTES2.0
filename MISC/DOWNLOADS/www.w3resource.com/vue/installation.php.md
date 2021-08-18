 

 

- [Home](/index.php)
- ▼Vue Tutorial
- [installation](/vue/installation.php)
- [Vue Introduction](/vue/vue-introduction.php)
- [The Vue Instance](/vue/the-vue-instance.php)
- [Template Syntax](/vue/template-syntax.php)
- [Computed Properties and watchers](/vue/computed-properties-and-watchers.php)
- [Class and Style Bindings](/vue/class-and-style-bindings.php)
- [Conditional Rendering](/vue/conditional-rendering.php)
- [List Rendering](/vue/list-rendering.php)
- [Event Handling](/vue/event-handling.php)
- [Component Registration](/vue/component-registration.php)
- [Components Basics](/vue/components-basics.php)
- [Form Input Bindings](/vue/form-input-bindings.php)
- [Composition vs Inheritance](/vue/composition-vs-inheritance.php)
- [Props](/vue/props.php)
- [Custom Events](/vue/custom-events.php)
- [Dynamic & Async Components](/vue/dynamic-and-async-components.php)
- [Slots](/vue/slots.php)
- [State Transitions](/vue/state-transitions.php)
- [Enter Leave and List Transitions](/vue/enter-leave-and-list-transitions.php)
- [Handling Edge Cases](/vue/handling-edge-cases.php)
- [Custom Directives](/vue/custom-directives.php)
- [Mixins](/vue/mixins.php)
- [Render Functions and JSX](/vue/render-functions-and-jsx.php)
- [Plugins](/vue/plugins.php)
- [Filters](/vue/filters.php)
- [Single File Components](/vue/single-file-components.php)
- [Unit Testing](/vue/unit-testing.php)
- [TypeScript Support](/vue/typescript-support.php)
- [Production Deployment](/vue/production-deployment.php)
- [Routing](/vue/routing.php)
- [State Management](/vue/state-management.php)
- [Server](/vue/server.php)
- [Reactivity in Depth](/vue/reactivity-in-depth.php)
- [Migrating from Vue 1](/vue/migrating-from-vue-1.php)
- [Migrating from Vue Router 0.7.x](/vue/migrating-from-vue-router-0.7.x.php)
- [Migrating from Vuex 0.6.x to 1.0](/vue/migrating-from-vuex-0.6.x-to-1.0.php)
- [More....]()

# Installation

Last update on May 21 2020 14:03:12 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

As with other frameworks, for all the many good things they can be used for, we must first install them or have a way to link to their online location, this article will guide you through the process of installing Vue.JS.

**Compatibility Note**

Due to the fact that Vue uses ES5 (ECMAScript 5) features which do not work well with IE8 and below, Vue does not support IE8. However, you can run Vue on any browser that is ES5 complaint.

The stable version of Vue as at the time of this writing is version 2.6.10

**Vue Devtools**

When programming in JavaScript you will quickly run into troubles if you don't make the console your friend for debugging, likewise when working with Vue, it is recommended that we install the Vue Devtools. This enables us to effectively monitor and debug our applications. Much more than the normal console debugging will.

Vue provides three ways for installation namely:

- direct &lt;script&gt; include
- npm
- Vue cli

**direct &lt;script&gt; include**

To install Vue using this method all you need to do is to provide a script tag with src attribute point to a location for Vue.

There are basically two forms of this script, which are the development and production ready scripts.

When learning you could use the latest or development version like so:

    <script src="https://cdn.jsdelivr.net/npm/vue"></script>

However, when you are building a production application please link to a specific version number like so:

    <script src="https://cdn.jsdelivr.net/npm/[email protected]/dist/vue.js"></script>

Or you could use ES Modules syntax in the case where you are using native ES Modules, this is as shown below:

    <script type="module">
      import Vue from 'https://cdn.jsdelivr.net/npm/[email protected]/dist/vue.esm.browser.js'
    </script>

Vue is equally available on unpkg and cdnjs.

**NPM**

When building large applications with Vue, it is always recommended we use NPM, this is because it works well with Webpack and Browserify which are very efficient module bundlers. To get Vue using NPM just run the line below on your command line:

    $ npm install vue

**CLI**

To get up and running on a single page application, you can use Vue's official CLI. This will provide you will build setups adequate for a modern frontend workflow.

To use Vue CLI run these instructions on the Command Line

    npm install -g @vue/cli

Create a project:

    vue create my-project

Explanation of Different Builds

<table><thead><tr class="header"><th></th><th>UMD</th><th>CommonJS</th><th>ES Module (For bundlers)</th><th>ES Module (for browsers)</th></tr></thead><tbody><tr class="odd"><td>Full</td><td>vue.js</td><td>vue.common.js</td><td>vue.esm.js</td><td>vue.esm.browser.js</td></tr><tr class="even"><td>Runtime-only</td><td>vue.runtime.js</td><td>vue.runtime.common.js</td><td>vue.runtime.esm.js</td><td>-</td></tr><tr class="odd"><td>Full (production)</td><td>vue.min.js</td><td>-</td><td>-</td><td>vue.esm.browser.min.js</td></tr><tr class="even"><td>Runtime-only (production)</td><td>vue.runtime.min.js</td><td>-</td><td>-</td><td>-</td></tr></tbody></table>

**Runtime+ Compiler vs Runtime-only**

We use the compiler when we need to compile templates on the client. For instance, you will need a compiler when you wish to mount an element using the elements in-DOM HTML as the template.

    // this requires the compiler
    ```new Vue({
      template: '<span>{{ hi }}</span>'
    })```

    // the compiler is not required here
    ```new Vue({
      render (h) {
        return h('span', this.hi)
      }
    })

Whenever we are using vue-loader or vuetify, the \*.vue files conatins templates that will be pre-compiled as JavaScript at build time.

Thus because runtime-only is more light-weight compared to full-build, it is recommended that you use it whenever possible.

However, should you prefer the full build instead, then you must configure an alias for the bundler:

**Development vs Production Mode**

Usually the un-minified form of vue is for development, whereas the minified form is for production app. CommonJS and ES modules however do not come in minified versions, you have to minify these by yourself.

commons and ES Module builds helps us to preserve the raw checks for the process.env.NODE_ENV to determine the appropriate mode in which they should run. Always use the appropriate bundler configuration to replace environment variables so as to control the mode Vue should run.

When we replace process.env.NODE_ENV with string literals will allow minifiers like UglifyJS to completely drop code blocks that are development-only.

**Webpack**

With webpack 4+, the mode option can be used:

    module.exports = {
      mode: 'production'
    }

Whereas, in lower version we will need to use DefinePlugin

    var webpack = require('webpack')

    module.exports = {
      // ...
      plugins: [
        // ...
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        })
      ]
    }

**Rollup**

This is achieved using rollup-plugin-replace

    const replace = require('rollup-plugin-replace')
    rollup({
      // ...
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
      ]
    }).then(...)

**Browserify**

Simply apply envify transform to your bundle

    NODE_ENV=production browserify -g envify -e main.js | uglifyjs -c -m > build.js

**CSP environment**

There are environments like google chrome which enforce Content Security Policy(CSP), this prevents the use of new Function () as expression evaluator. Because the full build depends on new Function it cannot be used in such environments. However, runtime only builds are CSP-compliant.

**Dev Build**

You can use Vue from the its latest source code on GitHub:

    git clone https://github.com/vuejs/vue.git node_modules/vue
    cd node_modules/vue
    npm install
    npm run build

**Bower**

Vue can also be installed using Bower, using the bower install command as shown below

    $ bower install vue

**AMD Module Loaders**

You can use all U

**Next:** [Introduction](https://www.w3resource.com/vue/vue-introduction.php)

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

 

 
