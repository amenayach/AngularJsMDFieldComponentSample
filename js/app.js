(function(angular) {
  'use strict';

var app = angular.module('myapp', ['ngMaterial']);//, 'ngMessages', 'material.svgAssetsCache']);

app.controller('mainCtrl', function ($scope) {

    var vm = this;

    vm.data = {
        name: 'Tester',
        id: 1
    };

    vm.filterData = [{
        name: "Username",
        type: "text",
        label: 'User name'
    },
    {
        name: "Count",
        type: "number",
        label: 'The count'
    },
    {
        name: "todos",
        type: "select",
        label: 'Tasks',
        dataUrl: "js/todos.json"
    },
    {
        name: "Categ",
        type: "select",
        label: 'Category',
        data: [{ key: "1", value: "Categ1" }, { key: "2", value: "Categ2" }, { key: "3", value: "Categ3" }]
    }];


});

})(window.angular);