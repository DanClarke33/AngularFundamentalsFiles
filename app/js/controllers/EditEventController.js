'use strict';

eventsApp.controller('EditEventController',
    function($scope) {
        $scope.saveEvent = function(event, newEventForm) {
            if(newEventForm.$valid) {
                window.alert('event ' + event.name + ' saved!');
            }
            else{
                window.alert('you did bad! invalid form values')
            }
        }

        $scope.cancelEvent = function () {
            window.location = "/EventDetails.html";
        }
    }
);