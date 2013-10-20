# Best practice for RequireJS

A set of best practice for RequireJS.
You need `npm` to set up each examples.

[![Build Status](https://travis-ci.org/eller86/requirejs-best-practice.png)](https://travis-ci.org/eller86/requirejs-best-practice)

## How to build

1. Go to example directory like `src/mainConfigFile`
2. Execute `npm install` to install npm modules
3. Execute `grunt` to build example
4. `build` directory will be generated at the root of project

Note that this practice depends on grunt version 0.4. You have to uninstall old grunt (~0.3) and install `grunt-cli`. See also: [Getting started at gruntjs.com](http://gruntjs.com/getting-started#installing-the-cli).

## Memo

- dividing "static" configuration and "dynamic" configuration
    - optimizer can remove "static" configuration like normal "paths"
    - it cannot remove "dynamic" configuration like "config.i18n.locale", we need decide it dynamically
