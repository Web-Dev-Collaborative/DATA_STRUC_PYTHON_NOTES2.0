 


- [Home](/index.php)
- ▼npm
- [Getting started with npm](/npm/getting-started-with-npm.php)
- [Finding and selecting packages](/npm/finding-and-selecting-packages.php)
- [How to set up a new npm account & install npm](/npm/how-to-set-up-a-new-npm-account-and-install-npm.php)
- [How to Install Local Packages](/npm/how-to-install-local-packages.php)
- [Working with package](/npm/working-with-package.php)
- [How to install global packages, update global packages and uninstall global packages](/npm/how-to-install-update-and-uninstall-global-packages.php)
- [How to create Node.js modules and how to publish & update a package](/npm/how-to-create-node-and-how-to-publish-and-update-a-package.php)
- [How to use semantic versioning,work with scoped packages and label packages with dist-tags](/npm/how-to-use-semantic-versioning-work-with-scoped-packages-and-label-packages-with-dist-tags.php)
- [How to Use Two-Factor Authentication](/npm/how-to-use-two-factor-authentication.php)
- [How to work with security tokens](/npm/how-to-work-with-security-tokens.php)
- [How to change profile settings](/npm/how-to-change-profile-settings.php)
- [Understanding packages and modules and preventing permissions errors](/npm/understanding-packages-and-modules-and-preventing-permissions-errors.php)
- [How to run a security audit with npm audit](/npm/how-to-run-a-security-audit-with-npm-audit.php)
- [About audit reports and how to require two-factor authentication for package publishing and settings modification](/npm/more-on-audit-reports-and-requiring-two-factor-authentication-for-package-publishing-and-settings-modification.php)
- ▼Private packages
- [Working with private packages](/npm/working-with-private-packages.php)
- [Downloading packages to CI/deployment servers](/npm/downloading-packages-to-ci-or-deployment-servers.php)
- [Docker and private packages](/npm/docker-and-private-packages.php)
- ▼Using npm
- [Npm coding style](/npm/npm-coding-style.php)
- [config More than you probably want to know about npm configuration](/npm/npm-config.php)
- [developers Developer Guide](/npm/npm-developers.php)
- [disputes Handling Module Name Disputes](/npm/npm-disputes.php)
- [orgs Working with Teams & Orgs](/npm/npm-orgs.php)
- [registry The JavaScript Package Registry](/npm/npm-registry.php)
- [removing-npm Cleaning the Slate](/npm/npm-removal.php)
- [scope Scoped packages](/npm/npm-scope.php)
- [scripts How npm handles the "scripts" field](/npm/npm-scripts.php)
- [semver The semantic versioner for npm](/npm/semver.php)
- ▼CLI commands
- [access and adduser commands](/npm/npm-access-and-npm-add-user.php)
- [audit, bin and bugs commands](/npm/npm-audit-npm-bin-and-npm-bug.php)
- [build, bundle and cache commands](/npm/build-bundle-and-cache-commands.php)
- [ci, completion and config commands](/npm/ci-completion-and-config-cli-options.php)
- [dedupe, deprecate and dist-tag commands](/npm/Npm-dedupe-npm-deprecate-and-npm-dis-tag-cli-options.php)
- [docs, doctor and edit commands](/npm/npm-docs-npm-doctor-and-npm-edit-cli-options.php)
- [explore, help and help-search commands](/npm/npm-explore-npm-help-and-npm-help-search-cli-options.php)
- [hook and init commands](/npm/npm-hook-and-npm-init-cli-options.php)
- [install, install-ci-test and install-test commands](/npm/npm-install-npm-install-ci-test-and-npm-install-test-cli-commands.php)
- [link and logout commands](/npm/npm-link-and-npm-logout-cli-option.php)
- [ls and npm commands](/npm/npm-ls-and-npm-cli.php)
- [outdated and owner commands](/npm/npm-outdated-and-npm-owner.php)
- [pack, ping, prefix and profile commands](/npm/npm-pack-npm-ping-npm-prefix-and-npm-profile-cli-commands.php)
- [prune, and publish commands](/npm/npm-prun-and-npm-publish-cli-commads.php)
- [rebuild, repo, restart, root and run-script commands](/npm/npm-rebuild-repo-restart-root-and-run-script-commands.php)
- [search, and shrinkwrap commands](/npm/npm-search-and-npm-shrinkwrap-cli-commands.php)
- [star, stars, start and stop commands](/npm/npm-star-stars-start-and-stop-cli-commands.php)
- [team and test commands](/npm/npm-team-and-npm-test-cli-command.php)
- [token command](/npm/npm-token.php)
- [uninstall and unpublish](/npm/npm-uninstall-and-npm-unpublish-cli-commands.php)
- [update and version commands](/npm/npm-update-and-npm-version-cli-commands.php)
- [view and whoami commands](/npm/npm-view-and-npm-whoami.php)
- ▼Configuring npm
- [folders Folder Structures Used by npm](/npm/npm-folders.php)
- [npmrc The npm config files](/npm/npmrc.php)
- [package-lock.json A manifestation of the manifest](/npm/package-lock.json.php)
- [package-locks An explanation of npm lockfiles](/npm/npm-package-locks.php)
- [shrinkwrap.json A publishable lockfile](/npm/npm-shrinkwrap-json.php)
- ▼Troubleshooting
- [Try the latest stable version of node](/npm/try-the-latest-version-on-node.php)
- [Try the latest stable version of npm](/npm/try-the-latest-stable-version-of-npm.php)
- [Common Errors](/npm/common-errors.php)

# Getting started with npm

Last update on May 25 2020 13:25:05 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

JavaScript is a programming language with a large community support, lots has changed in JavaScript since it was released in 1995. Since the release of Node.JS the community has grown, in these series of tutorials we will be looking at a very important tool that powers this community npm.

**What is npm**

npm stands for node package manager, it opens up the entire world of JavaScript to individual JavaScript developers as well as to teams. It is currently the world's largest software registry, having approximately 3 billion downloads per week. If you have used any of the popular JavaScript frameworks, chances are that you accessed them using npm. npm enables developers from different continent to share and borrow codes and many organizations also use it to manage their private development.

There are three distinct npm components:

- The website
- The command line interface (CLI)
- The registry

You should use the website to discover packages, provides an interface for you to set up profiles, and then manage other aspects of your npm experience. For instance, you can set up Orgs (organizations) to help you manage access to public or private packages.

You run the CLI from a terminal. The CLI is how most developers interact with npm.

The npm registry is a large public database of JavaScript software and the meta-information that surrounds it.

**Use npm to:**

- Adapt packages of code to your own apps, or you can incorporate packages as they are.
- Download standalone tools that you can use right away.
- Run packages without downloading with npx.
- Share your code with any npm user, anywhere.
- Restrict your code to specific developers.
- Form Orgs (organizations) that will help you to coordinate package maintenance, coding, and developers.
- Form virtual teams by with npm organization.
- Manage multiple versions of your code and your code dependencies.
- Update applications easily when underlying code has been updated.
- Discover multiple ways you can solve the same puzzle.
- Find other developers that are working on similar problems and projects.

These are just few examples of ways developers use npm. If you would like to add a bullet point, comment here.

**Where do I Start?**

Having gotten a grasp of what npm is, and what we can use it for, let us get started.

**Your First Package Page**

First, you need to create an npm account, which is explained in another tutorial. Then, you will have your own page on npmjs.com, which will be like this http://www.npmjs.com/~yourusername.

![npm Your First Package Page ](https://www.w3resource.com/w3r_images/npm-your-first-package-page.png)

Your packages will be shown on your page, as you upload it. You can also create organizations to invite others to work with you.

Once you set up an npm account, the next step will be to use the command line interface (CLI) to install npm. We look forward to seeing what you can create!

**How do I share packages or collaborate with others?**

With npm there is no cost if you choose to share your codes publicly, but to use and share private packages, you have to upgrade your account. If you want to share with others, create organizations, that is called npm Orgs, and invite others to collaborate with you, publicly(free) or privately (for a fee). Or you may decide to sign up for a custom, private type of npm for your own company, this is called npmE for npm Enterprise.

**Next:** [Finding and selecting packages](https://www.w3resource.com/npm/finding-and-selecting-packages.php)

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
