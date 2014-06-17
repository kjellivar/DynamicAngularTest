var LugApp = angular.module('dynamicAngular', ['ngSanitize', 'ngAnimate', 'mgcrea.ngStrap'])
    .config(function($asideProvider) {
        angular.extend($asideProvider.defaults, {
            template: "partials/modal.html"
        });
    });