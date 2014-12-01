'use strict';

/* Directives */


angular.module('webplatformzApp.directives', [])

.directive('appVersion', ['version',
    function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]).directive('header', function () {
    return {
        templateUrl: 'partials/header.html',
        replace: true,
        link: function ($scope, element, attrs) {

            /*
            $scope.toggleSubHeader = function(element, $event) {
                $($event.target).parents('.subHeader').toggleClass('open');
            }

            $scope.init();
            $scope.$watch('heroId', function() {
                $scope.init();
            });
            $scope.$watch('pagereload', function() {
                $scope.init();
            });
            */
        }
    }
});