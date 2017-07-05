(function() {
  'use strict';
  angular
    .module('myApp')
    .directive('testDirective', testDirective);
  
  function testDirective() {
    return {
      priority: 3,
      scope: {
        abc: '=',
        def: '&'
      },
      restrict: 'EA',
      template: '<p>abc defaaa</p>',
      link: link
    };
  }

  function link(scope, element, attrs) {
    console.log(scope.abc);
    console.log(scope.def);
  }
})();