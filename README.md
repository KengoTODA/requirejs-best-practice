# Best practice for RequireJS

Set of best practice for RequireJS.
You need `npm` to set up each examples.

[![Build Status](https://travis-ci.org/eller86/requirejs-best-practice.png)](https://travis-ci.org/eller86/requirejs-best-practice)

## How to build

Go to project directory like `src/mainConfigFile`, and execute `npm install` to install npm modules. It allows you to exec `grunt` to build project.

Note that this practice depends on grunt version 0.4. You have to uninstall old grunt (~0.3) and install `grunt-cli`. See also: [Getting started at gruntjs.com](http://gruntjs.com/getting-started#installing-the-cli).

## Plan

* cache bundles ([i18n](http://requirejs.org/docs/api.html#i18n) and [cache](https://github.com/jensarps/AMD-cache) plugin)


## Memo

- dividing "static" configuration and "dynamic" configuration
    - optimizer can remove "static" configuration like normal "paths"
    - it cannot remove "dynamic" configuration like "config.i18n.locale", we need decide it dynamically
