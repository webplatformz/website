'use strict';

/* Services */


// Register services
angular.module('webplatformzApp.services', []).factory('webplatformzAPIService', function ($resource) {

    var webplatformzAPI = {};

    /*
    zoinAPI.Hero = $resource('/zoin/rest-prefix/heroes/:heroId/', {heroId:'@id'});
    zoinAPI.Mission = $resource('/zoin/rest-prefix/missions/:missionId/', {missionId:'@id'});
    zoinAPI.MissionByLcu = $resource('/zoin/rest-prefix/missions/lcu/:lcuId/', {lcuId:'@id'});
    zoinAPI.Lcu = $resource('/zoin/rest-prefix/lcus/:lcuId/', {lcuId:'@id'});
    zoinAPI.Match = $resource('/zoin/rest-prefix/matches/', {});
    zoinAPI.Want =  $resource('/zoin/rest-prefix/wants/', {});
    zoinAPI.CreateWant = function(missionId, heroId)
    {
        return {"missionId": missionId, "heroId": heroId};
    };
    */

    return webplatformzAPI;
});