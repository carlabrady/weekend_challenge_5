console.log('js');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as ctrl'
    }).when('/rent', {
        templateUrl: 'views/rent.html',
        controller: 'RentController as ctrl'
    }).when('/sale', {
        templateUrl: 'views/sale.html',
        controller: 'SaleController as ctrl'
    }).when('/input', {
        templateUrl: 'views/input.html',
        controller: 'InputController as ctrl'
    }).otherwise({ redirectTo: '/'});
  });