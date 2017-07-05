(function() {
  angular
    .module('myApp')
    .factory('StopwatchFactory', StopwatchFactory);
  
  function StopwatchFactory($interval) {
    return service;

    function service(options) {
      var startTime = 0;
      var currentTime = null;
      var offset = 0;
      var interval = null;
      self = this;

      if (!options.interval) {
        options.interval = 100;
      }
      options.elapsedTime = new Date(0);
      

      self.running = false;
      self.pushToLog = pushToLog;
      self.updateTime = updateTime;
      self.startTimer = startTimer;
      self.stopTimer = stopTimer;
      self.resetTimer = resetTimer;

      return self;
      
      function pushToLog(lap) {
        if (options.log !== undefined) {
          options.log.push(lap);
        }
      }

      function updateTime() {
        currentTime = new Date().getTime();
        var timeElapsed = offset + (currentTime - startTime);
        options.elapsedTime.setTime(timeElapsed);
      }

      function startTimer() {
        if (self.running === false) {
          startTime = new Date().getTime();
          interval = $interval(self.updateTime, options.interval);
          self.running = true;
        }
      }

      function stopTimer() {
        if (self.running == false) {
          return;
        }
        self.updateTime();
        offset = offset + currentTime - startTime;
        self.pushToLog(currentTime - startTime);
        $interval.cancel(interval);
        self.running = false;
      }

      function resetTimer() {
        startTime = new Date().getTime();
        options.elapsedTime.setTime(0);
        timeElapsed = offset = 0;
      }
    }
  }
})();