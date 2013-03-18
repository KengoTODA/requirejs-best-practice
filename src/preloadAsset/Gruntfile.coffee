module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-exec'
  grunt.initConfig
    exec:
      optimize:
        command: 'node ../../lib/r.js -o app/app.build.js'

  grunt.registerTask 'default', ['exec:optimize']
