// helpers.js

function receivesAFunction(callback) {
    if (typeof callback === 'function') {
      callback();
    }
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      console.log('This is a named function');
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('This is an anonymous function');
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  