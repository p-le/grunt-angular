(function() {
  'use strict';
  angular
    .module('myApp')
    .directive('tabContent', tabContent);

  function tabContent() {
    var direcive = {
      require: '^myTabs',
      restrict: 'E',
      transclude: true, 
      replace: true,
      scope: true,
      template: "<div class='tab-content' ng-show='showTab()' ng-transclude></div>",
      link: link
    }

    return direcive;
  }

  function link(scope, element, attrs, tabs) {
    var tabId = tabs.tabs.length;

    scope.showTab = showTab;
    tabs.tabs.push(attrs.heading);

    function showTab() {
      return tabId == tabs.currentTab;
    }
  }
})();