
describe('Stopwatch Factory', function() {
  var scope, ctrl, $compile, $locale, $interval, stopwatchService;
  beforeEach(module('myApp'));
  
  beforeEach(inject(function(_$rootScope_, _$interval_, StopwatchFactory) {
    scope = _$rootScope_.$new();
    $interval = _$interval_;
    scope.options = {
      interval: 100,
      log: []
    };
    stopwatchService = new StopwatchFactory(scope.options);
  }));

  it('should call update time when the timer is started', function() {
    jasmine.clock().install();
    spyOn(stopwatchService, 'updateTime');
    stopwatchService.startTimer();
    expect(stopwatchService.running).toBe(true);
    jasmine.clock().tick(1000);
    $interval.flush(1000);
    expect(stopwatchService.updateTime.callCount).toBe(10);
    jasmine.clock().uninstall();
  });

});