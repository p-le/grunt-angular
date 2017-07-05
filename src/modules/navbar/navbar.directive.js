(function() {
  'use strict';
  angular
    .module('myApp')
    .directive('navbar', navbar);

  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'navbar.html',
      controller: NavbarController
    }

    return directive;
  }

  NavbarController.$inject = [ '$scope', '$location' ];
  function NavbarController($scope, $location) {
    $scope.isActive = isActive;

    function isActive(path) {
      
      var currentPath = $location.path().split('/')[1];
      if (currentPath.indexOf('?') !== -1) {
        currentPath = currentPath.split('?')[0];
      }

      return currentPath === path.split('/')[1];
    }
  }
})();