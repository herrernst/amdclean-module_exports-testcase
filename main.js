define(function (require, exports, module) {
 "use strict";

 var Animal = require('animal');
 var config = require('config');

 var a = new Animal('sissy');

 a.communicate('yo');
 
 console.log(config.FOO);

});