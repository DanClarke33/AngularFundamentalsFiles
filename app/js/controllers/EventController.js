'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log){

        $scope.sortOrder = 'name';
        eventData.getEvent().success(function(data, status, headers, config) {
            $scope.event = data;
        }).error( function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    }
);
