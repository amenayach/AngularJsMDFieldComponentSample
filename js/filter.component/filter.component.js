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

function nwFilterController(dataNormalizerService) {

    var ctrl = this;

    setTimeout(function () {

        if (ctrl.ngModel && ctrl.ngModel.dataUrl) {
            dataNormalizerService.get(ctrl.ngModel.dataUrl,
                function (response) {
                    ctrl.ngModel.data = response.data;
                },
                function (response) {
                    console.log(response);
                })
        }

    }, 0);

}

app.component('nwFilter', {
    templateUrl: 'js/filter.component/filter.component.html',
    controller: nwFilterController,
    bindings: {
        ngModel: '='
    }
});