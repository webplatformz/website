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
    }

    /*
.controller('DashboardCtrl', function ($scope, $rootScope, $routeParams, zoinAPIService) {
    $scope.init = function (selectedMission) {
    $rootScope.heroId =  Number($routeParams.heroId);
    $rootScope.pagereload = !$rootScope.pagereload;
      $scope.matches = zoinAPIService.Match.query({
            "heroId": $rootScope.heroId
        }, function () {
            if ($scope.matches.length > 0) {
                selectedMission = $scope.blaMission;
                if (selectedMission){
                    $scope.matches.forEach(function (element) {
                        if (element.mission.id == selectedMission.id){
                            element.mission.isActive = true;
                        }
                    });
                }
                else{
                    $scope.matches[0].mission.isActive = true;
                }
            }
        });
        $scope.left = 180;
        $scope.leftHero = 180;

    }

    $scope.init();
    $scope.$watch('heroId', function () {
        $scope.init();
    });
    $scope.join = function (mission, zoinValue) {
        zoinAPIService.Want.save({
            "missionId": mission.id,
            "heroId": $rootScope.heroId,
            "zoins": zoinValue
        }, function(){
            //$scope.init(mission);
            $scope.blaMission = mission;
            var id = $rootScope.heroId;
            $rootScope.heroId = undefined;
        });       
    }

    $scope.showMission = function (mission) {
        $scope.matches.forEach(function (element) {
            element.mission.isActive = false;
        });
        mission.isActive = true;
    }

    $scope.moveLeft = function () {
        $scope.left = $scope.left + 200;
    }

    $scope.moveRight = function () {
        $scope.left = $scope.left - 200;
    }

})

.controller('MissionsCtrl', function ($scope, $rootScope, $routeParams, zoinAPIService) {
    
    
    $scope.init = function () {
        $rootScope.lcu = Number($routeParams.lcu);
        $rootScope.pagereload = !$rootScope.pagereload;

        $scope.missions = zoinAPIService.MissionByLcu.query({
            "lcuId": $rootScope.lcu
        });

        $scope.left = 180;
        $scope.leftHero = 180;

    }
    
    $scope.updateHeroes = function(missionId) {
        $scope.matches = zoinAPIService.Match.query({
            "missionId": missionId
        });
        $scope.missions.forEach(function (element) {
            if(element.id == missionId) {
                element.isActive = true;
            }else{
                element.isActive = false;
            }
        });
    }

    $scope.init();

    $scope.moveLeft = function () {
        $scope.left = $scope.left + 200;
    }

    $scope.moveRight = function () {
        $scope.left = $scope.left - 200;
    }

    $scope.moveLeftHero = function () {
        $scope.leftHero = $scope.leftHero + 200;
    }

    $scope.moveRightHero = function () {
        $scope.leftHero = $scope.leftHero - 200;
    }
    $scope.moveLeft = function() {
        $scope.left = $scope.left + 200;
    }

    $scope.moveRight = function() {
        $scope.left = $scope.left - 200;
    }
}*/
);