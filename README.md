# Best practice for RequireJS

Set of best practice for RequireJS.
You need `npm` to set up each examples.

[![Build Status](https://travis-ci.org/eller86/requirejs-best-practice.png)](https://travis-ci.org/eller86/requirejs-best-practice)

## How to build

Go to project directory like `src/mainConfigFile`, and execute `npm install` to install npm modules. It allows you to exec `grunt` to build project.

Note that this practice depends on grunt version 0.4. You have to uninstall old grunt (~0.3) and install `grunt-cli`. See also: [Getting started at gruntjs.com](http://gruntjs.com/getting-started#installing-the-cli).

## Plan

* judge module to load (like RWD, with [Require-is](https://github.com/guybedford/require-is) plugin)
* A/B test
* cache bundles ([i18n](http://requirejs.org/docs/api.html#i18n) and [cache](https://github.com/jensarps/AMD-cache) plugin)
* preloading for assets (?)
