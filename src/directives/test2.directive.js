(function() {
  'use strict';
  angular
    .module('myApp')
    .directive('test2Directive', test2Directive);

  function test2Directive() {
    return {
      priority: 2,
      scope: {

      },
      restrict: 'EA',
      link: function(scope, element, attrs) {
        element.text('BBBB');
        console.log('2');
        console.log(scope.$parent);
      }
    }
  }
})();