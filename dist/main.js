;(function() {
var animal, config, main;
animal = function (exports) {
  
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
  exports = Animal;  // return Animal;
  return exports;
}({});
config = function (exports) {
  
  exports.FOO = 'bar';
  return exports;
}({});
main = function (exports, _config_) {
  
  var Animal = animal;
  var config = _config_;
  var a = new Animal('sissy');
  a.communicate('yo');
  console.log(config.FOO);
  return exports;
}({}, animal);
}());