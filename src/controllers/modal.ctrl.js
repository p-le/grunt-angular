(function() {
  'use strict';
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