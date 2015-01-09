define(function (require, exports, module) {
 "use strict";

 /**
  * creates a new animal
  * @param {string} name Name of the animal
  * @constructor
  */
 function Animal(name) {
   this.name = name;
 }

 Animal.prototype.communicate = function _communicate(prefix) {
   window.console.log('moo:' + prefix);
 };


 module.exports = Animal;
 // return Animal;

});
