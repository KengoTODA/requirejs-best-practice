require(['config'], function() {
  require(['is!a-type?a-type-module:b-type-module'], function(module) {
    alert(module.message);
  });
});
