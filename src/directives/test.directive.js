(function() {
  'use strict';
  angular
    .module('myApp')
    .directive('testDirective', testDirective);
  
  function testDirective() {
    return {
      scope: true,
      restrict: 'E',
      replace: true,
      template: '<h3>Hello BBBB Directives</h3>'
    };
  }
})();