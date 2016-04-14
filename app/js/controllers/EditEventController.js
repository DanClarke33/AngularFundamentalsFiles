'use strict';

eventsApp.controller('EditEventController',
    function($scope, eventData) {
        $scope.saveEvent = function(event, newEventForm) {
            if(newEventForm.$valid) {
                eventData.save(event)
                    .$promise
                    .then(
                        function (response) {
                            console.log('success', response);
                    }).catch(
                        function (response) {
                            console.log('failure', response);
                    });
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