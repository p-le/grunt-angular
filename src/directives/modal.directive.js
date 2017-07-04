(function() {
  'use strict';
  angular
    .module('myApp')
    .directive('modalWindow', modalWindow);

  function modalWindow() {

    var directive = {
      restrict: 'E',
      scope: {
        show: '='
      },
      replace: true,
      transclude: true,
      link: link,
      templateUrl: "modal.html"
    }

    function link(scope, element, attrs) {
      scope.windowStyle = {};
      scope.hideModal = hideModal;

      if (attrs.width) {
        scope.windowStyle.width = attrs.width;
      }
      if (attrs.height) {
        scope.windowStyle.height = attrs.height;
      }
    
      function hideModal() {
        scope.show = false;
      }  
    }

    

    return directive;
  }
})();