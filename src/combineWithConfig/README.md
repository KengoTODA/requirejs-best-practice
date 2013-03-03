# How to combine whole project which has config.js

## Problem

Generally we need nested `require` function to load both of `main.js` and `config.js`.

```javascript
// in main.js, which is loaded by 'data-main' attribute
require(['config'], function(){
  require(['dependedModule'], function(module){
    // ...
  });
});
```

In this case, `r.js` cannot conbine `main.js` and `dependedModule`.
