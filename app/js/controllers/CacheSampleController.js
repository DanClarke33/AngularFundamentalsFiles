/**
 * Created by dan.clarke on 14/04/2016.
 */
eventsApp.controller('CacheSampleController',
function CacheSampleController($scope, myCache) {
    $scope.addToCache = function(key, value) {
        myCache.put(key, value);
    }

    $scope.readFromCache = function (key) {
        return myCache.get(key);
    }

    $scope.getCacheStats = function () {
        return myCache.info();
    }
})