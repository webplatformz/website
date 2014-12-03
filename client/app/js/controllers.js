'use strict';

/* Controllers */

angular.module('webplatformzApp.controllers', [])
    .run(function ($rootScope) {
        /*$rootScope.heroId = 100;
        $rootScope.missionId = 10001;
        $rootScope.lcu = 1;
        $rootScope.pagereload = true;*/
    })
    .controller('homeCtrl', function ($scope, $rootScope) {
        $scope.init = function () {
            // Nothing here for now
        }
    })
    .controller('topicsCtrl', function ($scope, $rootScope) {
        $scope.init = function () {
            // Nothing here for now
        }
    });