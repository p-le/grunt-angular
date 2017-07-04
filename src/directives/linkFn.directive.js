(function() {
  angular
    .module('myApp')
    .directive('linkFn', linkFn);

  function linkFn() {
    var directive = {
      restrict: 'AE',
      replace: true,
      template: '<p style="background-color:{{colorName}}">LinkFn Directive</p>',
      link: link
    };

    function link(scope, element, attrs) {

      element.bind('click', function() {
        element.css('background-color', 'white');

        scope.$apply(function() {
          scope.color = 'white';
        });
      });

      element.bind('mouseover', function() {
        element.css('cursor', 'pointer');
      });
    }

    return directive;
  }
})();