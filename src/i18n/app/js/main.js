require(['config'], function(){
  require(['i18n!nls/word'], function(word) {
    alert(word.greeting);
  });
});
