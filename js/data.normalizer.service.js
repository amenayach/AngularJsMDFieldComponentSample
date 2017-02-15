(function (angular) {
    'use strict';

    var app = angular.module('myapp');

    app.service("dataNormalizerService", function ($http) {
        return {
            get: function (url, successCallback, errorCallback) {
                return $http({
                    method: 'GET',
                    url: url
                }).then(function (response) {
                    if (successCallback) successCallback(response);
                }, function (response) {
                    if (errorCallback) errorCallback(response);
                });
            }
        }
    });

})(window.angular);