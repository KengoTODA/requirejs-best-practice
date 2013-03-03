requirejs.config({
  urlArgs: "bust=" +  (new Date()).getTime(),
  paths: {
    'cool': 'module'
  } 
});
