(function() {
  'use strict';
  angular
    .module('myApp')
    .controller('LinkCtrl', LinkCtrl);

  function LinkCtrl($scope) {
    $scope.test = 'Hello';
  }
})();