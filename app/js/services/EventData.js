/**
 * Created by dan.clarke on 13/04/2016.
 */
eventsApp.factory('eventData' , function($http, $log){
    return{
        getEvent: function(successCallback) {
            $http({method: 'GET', url: '/data/event/1'}).success(function(data, status, headers, config) {
                successcb(data);
            }).error( function (data, status, headers, config) {
               $log.warn(data, status, headers, config);
            });
        }
    }
});