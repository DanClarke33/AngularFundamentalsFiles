/**
 * Created by dan.clarke on 14/04/2016.
 */
eventsApp.factory('myCache', function($cacheFactory) {
    return $cacheFactory('myCache', {capacity: 3});
});