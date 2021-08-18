 


- [Home](/index.php)
- ▼Angular Tutorial
- [Getting started with angular](/angular/getting-started-with-angular.php)
- [Angular workspace and project file structure](/angular/angular-workspace-and-project-file-structure.php)
- [Architecture overview](/angular/architecture-architecture-overview.php)
- [Introduction to services and dependency injection](/angular/architecture-introduction-to-services-and-dependency-injection.php)
- [Introduction to components](/angular/architecture-introduction-to-components.php)
- [User input](/angular/user-input.php)
- [Introduction to modules](/angular/architecture-introduction-to-modules.php)
- [Template syntax](/angular/templete-syntax.php)
- [Component interactions](/angular/component-interactions.php)
- [Component lifecycle hooks overview](/angular/component-lifecycle-hooks-overview.php)
- [Component styles](/angular/component-styles.php)
- [Dynamic_Components](/angular/dynamic-components.php)
- [Angular elements](/angular/angular-elements.php)
- [Attributes directives](/angular/attributes-directives.php)
- [Pipes](/angular/pipes.php)
- [Reactive Forms](/angular/reactive-forms.php)
- [Template driven forms](/angular/template-driven-forms.php)
- [Form validation](/angular/form-validation.php)
- [Dynamic Forms](/angular/dynamic-forms.php)
- [Observables](/angular/observables.php)
- [The RxJS library](/angular/the-rxjs-library.php)
- [Observables in Angular](/angular/observables-in-angular.php)
- [Comparing observables with other techniques](/angular/comparing-observables-with-other-techniques.php)
- [Practical usage](/angular/practical-usage.php)
- [Bootstrapping](/angular/bootstrapping.php)
- [NgModules](/angular/NgModules.php)
- [Angular Module Vs JsModule](/angular/angular-Module-vs-JsModule.php)
- [Frequently Used Module](/angular/frequently-used-module.php)
- [Entry Components](/angular/entry-components.php)
- [Types of Feature Modules](/angular/types-of-feature-modules.php)
- [Angular Singleton Service](/angular/angular-singleton-service.php)
- [Providers](/angular/providers.php)
- [Lazy Loading Feature Module](/angular/lazy-loading-feature-module.php)
- [NgModule API](/angular/NgModule-API.php)
- [sharing modules](/angular/sharing-modules.php)
- [NgModule FAQs](/angular/NgModule-FAQs.php)
- [Dependency Injection in Angular](/angular/dependency-injection-in-angular.php)
- [Dependency Providers](/angular/dependency-providers.php)
- [Hierarchical dependency injectors](/angular/hierarchical-dependency-injectors.php)
- [Navigate the component tree with DI](/angular/Navigate-the-component-tree-with-DI.php)
- [Routing and Navigation](/angular/routing-and-navigation.php)
- [HttpClient](/angular/HttpClient.php)
- [Animation transitions and triggers](/angular/animation-transitions-and-triggers.php)
- [Introduction to Angular animations](/angular/introduction-to-angular-animations.php)
- [Complex Sequences](/angular/complex-sequences.php)
- [Reusable Animations](/angular/reusable-animations.php)
- [Security](/angular/security.php)
- [Route transition animations](/angular/route-transition-animations.php)
- [Angular service worker introduction](/angular/angular-service-worker-introduction.php)
- [Getting started with service workers](/angular/getting-started-with-service-workers.php)
- [App shell](/angular/app-shell.php)
- [Service worker communication](/angular/service-worker-communication.php)
- [Service worker configuration](/angular/service-worker-configuration.php)
- [Service worker in production](/angular/service-worker-in-production.php)
- [Authoring Schematics](/angular/authoring-schematics.php)
- [Schematics Overview](/angular/schematics-overview.php)
- [Creating Libraries](/angular/creating-libraries.php)
- [Using Published Libraries](/angular/using-published-libraries.php)
- [Structural Directives](/angular/structural-directives.php)
- [Displaying Data](/angular/displaying-data.php)
- [Upgrading for performance](/angular/upgrading-for-performance.php)
- [Upgrading from AngularJS to Angular](/angular/upgrading-from-angularjs-to-angular.php)
- [Server-side Rendering: An intro to Angular Universal](/angular/server-side-rendering-an-intro-to-angular-universal.php)
- [Internationalization (i18n)](/angular/internationalization-i18n.php)
- [Workspace and project file structure](/angular/workspace-and-project-file-structure.php)
- [Dependency Injection in Action](/angular/dependency-injection-in-action.php)
- [Angular Workspace Configuration](/angular/angular-workspace-configuration.php)
- [TypeScript Configuration](/angular/typescript-configuration.php)
- [Workspace npm dependencies](/angular/npm-dependencies.php)
- [The Ahead-of-Time (AOT) compilers](/angular/the-ahead-of-time-compiler.php)
- [Browser support](/angular/browser-support.php)
- [Building and serving Angular apps](/angular/building-and-serving-angular-apps.php)
- [Simple deployment options](/angular/deployment.php)
- [Angular Language Service](/angular/angular-language-service.php)
- [Testing](/angular/testing.php)
- [Angular versioning and releases](/angular/angular-versioning-and-releases.php)
- [Updating your Angular projects](/angular/updating-your-angular-projects.php)
- [CLI Command Reference](/angular/cli-command-reference.php)
- [ng add](/angular/ng-add.php)
- [ng build](/angular/ng-build.php)
- [ng config](/angular/ng-config.php)
- [ng analytics](/angular/ng-analytics.php)
- [ng test](/angular/ng-test.php)
- [ng generate](/angular/ng-generate.php)
- [ng update](/angular/ng-update.php)
- [ng xi18n](/angular/ng-xi18n.php)
- [ng version](/angular/ng-version.php)
- [ng run](/angular/ng-run.php)
- [ng serve](/angular/ng-serve.php)
- [ng new](/angular/ng-new.php)
- [ng e2e](/angular/ng-e2e.php)
- [ng doc](/angular/ng-doc.php)
- [ng help](/angular/ng-help.php)
- [ng lint](/angular/ng-lint.php)

# Getting started with Angular

Last update on July 16 2020 13:38:56 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

Angular! previously known as Angular JS is a JavaScript framework (though written in typescripts) used in building modern single page applications for the web, mobile, or desktop.

In this section, we will explore the world of Angular, looking at the fundamental concepts and the nitty-gritty of the framework.

In this tutorial, we will discuss the prerequisites required to get Angular running on our local system, and we will create our very first Angular project, after setting up Angular on our local machine.

**Prerequisites**

To setup Angular to run on our local machine, we need to have NodeJS installed on our machine. We must also ensure that our development environment includes Node.js and an npm package manager.

**_Node.js_**

Angular requires Node.js version 8.x or 10.x.

To check your version, run node -v in a terminal/console window.

To get Node.js, go to nodejs.org.

**_npm (Node Package Manager)_**

Angular, the Angular CLI, and Angular apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have an npm package manager.

This Quick Start uses the npm client command line interface, which is installed with Node.js by default.

To check that you have the npm client installed, run npm -v in a terminal/console window

**Install the Angular CLI**

Angular CLI is used to create angular projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment. The Angular CLI can be installed either locally or globally. But it is often recommended to install it globally, thus to install Angular CLI globally using npm, open a terminal/console window and enter the following command:

    `npm install -g @angular/cli`

**Create a workspace and initial application**

You develop apps in the context of an Angular workspace. A workspace contains the files for one or more projects. A project is the set of files that comprise an app, a library, or end-to-end (e2e) tests.

To create a new workspace and initial app project:

Run the CLI command ng new and provide the name my-app, as shown here:

    `ng new my-app`

The \`ng new\` command prompts you for information about features to include in the initial app project. Since this is our first application, accept defaults by pressing Enter/Return all through the prompts.

The Angular CLI installs the necessary Angular npm packages and other dependencies. This can take a few minutes, depending on your internet connection.

It also creates the following workspace and starter project files:

- A new workspace, with a root folder named my-app
- An initial skeleton app project also called my-app (in the src subfolder)
- An end-to-end test project (in the e2e subfolder)
- Related configuration files

The initial app project contains a simple welcome application, ready to run.

**Serve the application**

Angular includes a server, so that you can easily build and serve your app locally by going to the workspace folder (my-app). Launch the server by using the CLI command ng serve, with the --open option.

    `cd my-app`
    `ng serve --open`

The ng serve command launches the server watches your files, and rebuilds the app as you make changes to those files.

The --open (or just -o) option automatically opens your browser to http://localhost:4200. The Angular application uses port 4200 by default. On the browser, a welcome message to the Angular world as shown in the image below is shown

**Edit your first Angular component**

*Components* are the fundamental building blocks of Angular applications. They display data on the screen, listen for user input, and take action based on that input.

As part of the initial app, the CLI created the first Angular component for you. It is the root component, and it is named app-root.

Here, we are going to edit this component, thus open ./src/app/app.component.ts and change the title property from 'my-app' to “Ogbonna Vitalis, Welcome to Angular”. Here I used my name, you can change it to yours.

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      title = 'Ogbonna Vitalis, Welcome to Angular';
    }

The browser reloads automatically with the revised title. To make the look much better, we need to edit the CSS file. To do this we open ./src/app/app.component.css and give the component some style.

    src/app/app.component.css
    content_copyh1 {
      color: #369;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 250%;
    }

Congratulations, It's looking much better now! We have successfully created our first ever Angular Application. In the next tutorial, we will explore the Angular file structure in a bit.

**Next:** [Angular workspace and project file structure](https://www.w3resource.com/angular/angular-workspace-and-project-file-structure.php)

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
