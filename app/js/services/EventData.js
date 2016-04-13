/**
 * Created by dan.clarke on 13/04/2016.
 */
eventsApp.factory('eventData' , function($http, $log){
    return{
        getEvent: function() {
            return $http({method: 'GET', url: '/data/event/1'});
        }
    }
});