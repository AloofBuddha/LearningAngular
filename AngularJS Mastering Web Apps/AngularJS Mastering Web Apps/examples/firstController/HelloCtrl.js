angular.module("app", []).controller("HelloCtrl", HelloCtrl);

function HelloCtrl ($scope) {
    $scope.name = "World";
    $scope.getName = function() {
        return $scope.name;
    };
}