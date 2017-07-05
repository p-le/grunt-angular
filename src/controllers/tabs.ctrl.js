(function() {
  'use strict';
  angular
    .module('myApp')
    .controller('TabsCtrl', TabsCtrl);

  function TabsCtrl($scope) {
    $scope.tabs = [ 
      { title: 'Tab 1', url: 'first.html' },
      { title: 'Tab 2', url: 'second.html' },
      { title: 'Tab 3', url: 'third.html' }
    ];
    $scope.currentTab = 'first.html';
    $scope.isActiveTab = isActiveTab;
    $scope.onClickTab = onClickTab;


    function isActiveTab(tabUrl) {
      return tabUrl == $scope.currentTab;
    }

    function onClickTab(tab) {
      $scope.currentTab = tab.url;
    }
  }
})();