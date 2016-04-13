/**
 * Created by dan.clarke on 13/04/2016.
 */
eventsApp.controller('EditProfileController',
    function EditProfileController ($scope, gravatarUrlBuilder) {
        $scope.user = {};

        $scope.getGravatarUrl = function (email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        }
    })