(function() {
  'use strict';
  
})();
(function() {
  'use strict';
  angular.module('myApp', [
    'ngAnimate',
    'ngRoute'
  ]);
})();
(function() {
  'use strict';
  angular
    .module('myApp')
    .controller('LinkCtrl', LinkCtrl);

  function LinkCtrl() {
    
  }
})();
(function() {
  'use strict';
  ModalCtrl.$inject = ['$scope'];
  angular
    .module('myApp')
    .controller('ModalCtrl', ModalCtrl);

  function ModalCtrl($scope) {
    $scope.modalShown = false;
    $scope.toogleModal = toogleModal;

    function toogleModal() {
      $scope.modalShown = !$scope.modalShown;
      console.log($scope);
    }
  }
})();

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