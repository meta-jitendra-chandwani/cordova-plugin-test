var exec = require('cordova/exec');

var PLUGIN_NAME = "test"; // This is just for code completion uses.

var test = function() {}; 
test.testFun = function(onSuccess, onError) {
   exec(onSuccess, onError, PLUGIN_NAME, "testFun", []);
};
module.exports = test;