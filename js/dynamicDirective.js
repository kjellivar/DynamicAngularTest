/**
 * Created by storskel on 17.06.2014.
 */
LugApp.directive('dynamicDirective', function() {
    return {
        template: '<div bs-aside="dynamicDirective" bs-aside-properties="properties" ng-include="getTemplateUrl()"></div>',
        scope: {
            dynamicDirective: "="
        },
        controller: function($scope, Modules){

            var properties = [];
            var type = $scope.dynamicDirective.type;
            angular.forEach($scope.dynamicDirective, function(val, key){
                if(key === "type" || key === "$$hashKey"){
                    return;
                } else {
                    properties.push({
                        "inputType": Modules[type][key],
                        "key": key
                    });
                }
            });
            $scope.properties = properties;

            $scope.getTemplateUrl = function() {
                return "partials/" + angular.lowercase($scope.dynamicDirective.type) + ".html";
            };
        }
    };
})