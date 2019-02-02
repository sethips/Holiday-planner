var myApp = angular.module('myApp');

myApp.controller('DestinationsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('DestinationsController loaded...');

	$scope.getDestinations = function(){
		$http.get('/api/destinations').success(function(response){
			$scope.destinations = response;
		});
	}

	$scope.getDestination = function(){
		var id = $routeParams.id;
		$http.get('/api/destinations/'+id).success(function(response){
			$scope.destination = response;
		});
	}

	$scope.addDestination = function(){
		console.log($scope.destination);
		$http.post('/api/destinations/', $scope.destination).success(function(response){
			window.location.href='#/destinations';
		});
	}

	$scope.updateDestination = function(){
		var id = $routeParams.id;
		$http.put('/api/destinations/'+id, $scope.destination).success(function(response){
			window.location.href='#/destinations';
		});
	}

	$scope.removeDestination = function(id){
		$http.delete('/api/destinations/'+id).success(function(response){
			window.location.href='#/destinations';
		});
	}
}]);