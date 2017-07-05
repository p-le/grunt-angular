(function() {
  'use strict';
  angular
    .module('myApp')
    .directive('stopwatch', stopwatch);

  function stopwatch(StopwatchFactory) {
    var directive = {
      restrict: 'EA',
      scope: true,
      link: link
    };
    return directive;

    function link(scope, element, attrs) {
      if (!attrs.options) {
        throw new Error('Must pass an options object from the controller for the stopwatch to work correctly');
      }
      var stopwatchService = new StopwatchFactory(scope[attrs.options]);

      scope.startTimer = stopwatchService.startTimer;
      scope.stopTimer = stopwatchService.stopTimer;
      scope.resetTimer = stopwatchService.resetTimer;;
    }
  }

})();