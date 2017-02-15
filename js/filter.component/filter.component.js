(function (angular) {
    'use strict';

    var app = angular.module('myapp');

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

})(window.angular);