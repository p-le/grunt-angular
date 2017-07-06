(function() {
  'use strict';
  angular
    .module('myApp')
    .directive('gauge', gauge);

  function gauge() {
    var directive = {
      restrict: 'A',
      scope: {
        options: '=',
        currentValue: '=ngModel'
      },
      compile: compile
    };

    return directive;

    function compile(tElem, tAttrs) {
      if (tElem[0].tagName !== 'CANVAS') {
        throw new Error('Gauge-js can only be set on a canvas element. ' + tElem[0].tagName + ' will not work');
      }

      return link;
    }

    function link(scope, element, attrs) {
      var gauge;

      scope.$watch('options', function (newV, oldV) {
        setGauge(scope.options);
      }, true);

      scope.$watch('currentValue', function (newV, oldV) {
        if (scope.currentValue > scope.options.maxValue) {
          gauge.set(scope.options.maxValue);
        } else {
          gauge.set(scope.currentValue);
        }
      });

      function setGauge(options) {
        gauge = new Gauge(element[0]).setOptions(scope.options);
        
        gauge.maxValue = scope.options.maxValue;
        gauge.set(scope.currentValue);
      }
    }
  }
})();