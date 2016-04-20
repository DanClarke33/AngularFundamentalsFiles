/**
 * Created by dan.clarke on 20/04/2016.
 */

// naming $exceptionHandler so that we replace the built in angular exception handler
eventsApp.factory('$exceptionHandler', function() {
   return function (exception) {
       console.log("exception handled: " + exception.message);
   }
});