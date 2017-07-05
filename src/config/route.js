(function() {
  'use strict';
  angular
    .module('myApp')
    .config(router);
  
  function router($stateProvider) {
    var helloState = {
      name: 'hello',
      url: '/hello',
      template: '<h3>Hello World</h3>'
    };

    var aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>UI router hello world app</h3>'
    };

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  }
})();