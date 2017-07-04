(function() {
  'use strict';
  angular
    .module('myApp')
    .directive('myTabs', tabs);

  function tabs() {
    var directive = {
      scope: true,
      replace: true,
      restrict: 'E',
      transclude: true,
      template: 
        '<div class="tab-content">'+
          '<ul class="tabs-nav">' +
            '<li ng-repeat="tab in tabs" ng-class="{ active: currentTab = $index }" >' +
              '<a ng-click="selectTab($index)" >{{tab}}</a>' +
            '</li>' +
          '</ul>' +
          '<div ng-transclude></div>' + 
        '</div>',
      controller: TabsController
    };

    function TabsController($scope) {
      $scope.currentTab = 0;
      $scope.tabs = [];
      $scope.selectTab = selectTab;


      function selectTab(index) {
        $scope.currentTab = index;
      }

      return $scope;
    }

    return directive;
  }


})();