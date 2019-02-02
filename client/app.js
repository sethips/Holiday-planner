var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'DestinationsController',
		templateUrl: 'views/destinations.html'
	})
	.when('/destinations', {
		controller:'DestinationsController',
		templateUrl: 'views/destinations.html'
	})
	.when('/destinations/details/:id',{
		controller:'DestinationsController',
		templateUrl: 'views/destination_details.html'
	})
	.when('/destinations/add',{
		controller:'DestinationsController',
		templateUrl: 'views/add_destination.html'
	})
	.when('/destinations/edit/:id',{
		controller:'DestinationsController',
		templateUrl: 'views/edit_destination.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});