var app = angular.module('portfolioModule', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/homepage', {
            controller: 'portCtrl',
            templateUrl: 'views/homepage.html'
        })

        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.hashPrefix('');

});
