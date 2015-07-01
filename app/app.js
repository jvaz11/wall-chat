'use strict';

// Declare app level module which depends on views, and components
angular.module('wallChat', [
        'ngRoute',
        'myApp.version',
        'firebase'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/display', {
                controller: 'DisplayCtrl',
                templateUrl: 'views/display.html',
                reloadOnSearch: false
            })
            .when('/hi', {
                controller: 'FormCtrl',
                templateUrl: 'views/hi.html',
                reloadOnSearch: false
            })
            .otherwise({
                redirectTo: '/display'
            });
    }])
    .controller('DisplayCtrl', function($scope, $firebaseObject) {
        var ref = new Firebase("https://wallchat.firebaseio.com/message");

        var syncObject = $firebaseObject(ref);

        syncObject.$bindTo($scope, "message");


    })
    .controller('FormCtrl', function($scope, $firebaseObject) {
        var ref = new Firebase("https://wallchat.firebaseio.com/message");

        var syncObject = $firebaseObject(ref);

        syncObject.$bindTo($scope, "message");

        $scope.clear = function(){
            $scope.message.$value = "";
        };


    });
