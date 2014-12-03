'use strict';


// Declare app level module whith depencies
angular.module('webplatformzApp', [
    'ngRoute',
    'ngResource',
 //    'webplatformzApp.filters',
 //    'webplatformzApp.services',
    'webplatformzApp.directives',
    'webplatformzApp.controllers'
]).
config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        });
        $routeProvider.when('/topics', {
            templateUrl: 'partials/topics.html',
            controller: 'topicsCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
}]);