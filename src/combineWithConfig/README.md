# How to combine whole project which has config.js

## Problem

Generally we need nested `require` function to load both of `main.js` and `config.js`, because we have to load configurations before loading modules.

```javascript
// in main.js, which is loaded by 'data-main' attribute
require(['config'], function(){
  require(['dependedModule'], function(module){
    // ...
  });
});
```

In this case, `r.js` cannot conbine `main.js` and `dependedModule`. It means that we need independed HTTP/HTTPS requests to load each modules.


## Solution 1 - using `has.js` to switch loading method

`r.js` supports integration with `has.js`. See [official document](http://requirejs.org/docs/optimization.html#hasjs) to know how to use.

`has.js` allows us to switch dependency by configuration. For instance, we can code `app.build.js` like below:

```javascript
({
  baseUrl: ".",
  name: "example",
  has: {
    beenOptimized: true
  }
})
```

In this case, our main.js should be like below:

```javascript
if (has("beenOptimized")) {
  // in product environment: we do not have to load config.js
  require(["module"], main);
} else {
  // in development environment: we need nested `require` function
  require(['config', function() {
    require(['module'], main);
  });
}

function main(module) {
  // kicked when all module has been loaded
}
```

It has a little problem: we need to load `has.js` in production environment even if project does not need it.

## Solution 2 - combine config.js into main.js (no example project)

If your project has only one page, you can stop using config.js to call `requirejs.config` function.

This is very simple solution, but it is not good when your product has a lot of entry point to load (which is written in `data-main` attribute).
