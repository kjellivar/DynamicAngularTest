angular.module('dynamicAngular', ['ngSanitize', 'ngAnimate', 'mgcrea.ngStrap'])
    .controller('MyController', ['$scope', function ($scope) {
        $scope.options = [{
            type: "jumbotron",
            properties: [],
            title: "Jumbotron of doom",
            content: "Dette er <i>skikkelig</i> digg bra mann. <b>Dette er skikkelig bold mann</b>"
        }, {
            title: "Breadcrumbs er bra",
            type: "breadcrumbs"
        }, {
            title: "Buttongroup er fint",
            type: "buttongroup"
        }, {
            title: "Navbar er digg",
            type: "navbar"
        }];
        $scope.selectedDirective = $scope.options[0];

    }])
    .directive('dynamicDirective', function() {
        return {
            template: '<div bs-aside="dynamicDirective" ng-include="getTemplateUrl()"></div>',
            scope: {
                dynamicDirective: "="
            },
            link: function(scope){

                scope.getTemplateUrl = function() {
                    return "partials/" + angular.lowercase(scope.dynamicDirective.type) + ".html";
                };
            }
        };
    })
    .config(function($asideProvider) {
        angular.extend($asideProvider.defaults, {
            template: "partials/modal.html"
        });
    });