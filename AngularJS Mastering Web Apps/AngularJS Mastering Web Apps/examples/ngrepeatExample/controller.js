(function () {
    'use strict';

    angular
        .module('app')
        .controller('WorldCtrl', WorldCtrl);

    WorldCtrl.$inject = ['$scope']; 

    function WorldCtrl($scope) {

        $scope.population = 7000;
        $scope.countries = [
            { name: 'France', population: 63.1 },
            {name: 'UK', population: 61.8}
        ];
    }
})();