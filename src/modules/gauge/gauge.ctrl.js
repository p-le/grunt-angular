(function() {
  'use strict';
  angular
    .module('myApp')
    .controller('GaugeController', GaugeController);
  
  function GaugeController($scope) {
    $scope.value = 1250;
    $scope.options = {
      lines: 12,
      angle: 0.15,
      lineWidth: 0.44,
      pointer: {
        length: 0.9,
        strokeWidth: 0.035,
        color: '#000000'
      },
      limitMax: true,
      colorStart: '#6FADCF',
      colorStop: '#8FC0DA',
      strokeColor: '#E0E0E0',
      generateGradient: true,
      maxValue: 3000
    };
  }
})();