var args = "bust=" +  (new Date()).getTime();
if (has("beenOptimized")) {
  args = "";
}
requirejs.config({
  urlArgs: args,
  paths: {
    'cool': 'module'
  } 
});
