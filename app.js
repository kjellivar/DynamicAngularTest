angular.module('dynamicAngular', ['ngSanitize', 'ngAnimate', 'mgcrea.ngStrap'])
    .controller('MyController', ['$scope', 'Components', function ($scope, Components) {

        $scope.document = [{
            type: "header",
            title: "Dynamic directive prototype"
        }];

        $scope.components = Components;

        console.log(Components);

        $scope.addComponent = function(key) {
            var newComp = {};
            angular.copy(Components[key], newComp);
            newComp.type = key;
            $scope.document.push(newComp);
        };

    }])
    .directive('dynamicDirective', function() {
        return {
            template: '<div bs-aside="dynamicDirective" bs-aside-properties="properties" ng-include="getTemplateUrl()"></div>',
            scope: {
                dynamicDirective: "="
            },
            controller: function($scope, Components){

                var properties = [];
                var type = $scope.dynamicDirective.type;
                angular.forEach($scope.dynamicDirective, function(val, key){
                    if(key === "type" || key === "$$hashKey"){
                        return;
                    } else {
                        properties.push({
                            "inputType": Components[type][key],
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
    .factory('Components', function () {
        return {
            jumbotron: {
                title: "text",
                content: "textarea",
                btnText: "text",
                button: "checkbox"
            },
            navbar: {
                title: "text",
                linkOne: "text",
                linkTwo: "text",
                linkThree: "text"
            },
            breadcrumbs: {
                first: "text",
                second: "text",
                third: "text"
            },
            buttongroup: {
                left: "text",
                middle: "text",
                right: "text"
            },
            header: {
                title: "text"
            }
        };
    })
    .config(function($asideProvider) {
        angular.extend($asideProvider.defaults, {
            template: "partials/modal.html"
        });
    });