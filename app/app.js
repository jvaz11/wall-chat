'use strict';

// Declare app level module which depends on views, and components
angular.module('wallChat', [
        'ngRoute',
        'myApp.version'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/display', {
                controller: 'DisplayCtrl',
                templateUrl: 'views/display.html',
                reloadOnSearch: false
            })
            .otherwise({
                redirectTo: '/display'
            });
    }])
      .controller('DisplayCtrl', function ($scope) { });
    ;
