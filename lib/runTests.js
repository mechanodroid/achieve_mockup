var Mocha = require('mocha'),
    file = require('file'),
    path = require('path'),
    feather = require('./feather').getFeather();

module.exports = function() {    
  var mocha = new Mocha(),
    testPath = path.join(feather.appOptions.appRoot, 'test');

  if (typeof feather.config('test') === 'string') {
    testPath = path.join(testPath, feather.config('test'));
  }

  file.walkSync(testPath, function(dirPath, dirs, files) {

    //add the files to the test runner
    _.each(files, function(file) {
      if (/\.js$/.test(file)) {
        mocha.files.push(path.join(dirPath, file));
      }
    });      
  });

  //run the tests
  mocha.run(function() {
    feather.shutdown();
  });
}