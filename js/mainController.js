/**
 * Created by storskel on 17.06.2014.
 */
LugApp.controller('mainController', ['$scope', 'Modules', function ($scope, Modules) {

    $scope.document = [];
    $scope.modules = Modules;

    $scope.addModule = function(key) {
        var newModule = {};
        angular.copy(Modules[key], newModule);
        newModule.type = key;
        $scope.document.push(newModule);

    };

}]);