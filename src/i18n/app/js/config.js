requirejs.config({
  "paths": {
    "i18n": "../../../../lib/i18n"

    // you cannot use "paths" configurations to shorten path
    // because i18n plugin expects that path contains "nls" string.
    // ex. "word": "nls/word"
  },
  "config": {
    "i18n": {
      // you can change here to test English or Chinese.
      // see http://requirejs.org/docs/api.html#i18n
      "locale": "zh-cn" // "ja-jp"
    }
  }
});
