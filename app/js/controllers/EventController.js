'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll){

        $scope.sortOrder = 'name';
        $scope.event = eventData.getEvent()
            .$promise
            .then(function(event) { $scope.event = event; })
            .catch(function(response) { console.log(response); }
        );

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }

        $scope.scrollToSession = function() {
            $anchorScroll( );
        }

        $scope.rank = function(session) {
            var copy = $scope.event.sessions.slice(0);
            var sorted = copy.sort(function(a, b) { return CompareRank(a, b); });
            return sorted.indexOf(session) + 1;
        }

        function CompareRank (sessionA, sessionB) {
            var valueA;
            var valueB;

            switch ($scope.sortOrder) {
                case 'name': {
                    valueA = sessionA.name;
                    valueB = sessionB.name;
                    break;
                }

                case '-name': {
                    valueA = sessionB.name;
                    valueB = sessionA.name;
                    break;
                }

                case 'upVoteCount': {
                    valueA = sessionA.upVoteCount;
                    valueB = sessionB.upVoteCount;
                    break;
                }

                case '-upVoteCount': {
                    valueA = sessionB.upVoteCount;
                    valueB = sessionA.upVoteCount;
                    break;
                }
            }

            return valueA > valueB;
        }
    }
);
