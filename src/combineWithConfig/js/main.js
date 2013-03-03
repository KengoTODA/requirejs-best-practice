function main(cool) {
  console.log(cool);
}

if (has('beenOptimized')) {
  console.log('optimized');
  require(['cool'], main);
} else {
  console.log('not optimized - using nested `require` function');
  require(['config'], function() {
    require(['cool'], main);
  });
}
