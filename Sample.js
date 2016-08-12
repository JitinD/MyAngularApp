var sampleApp = angular.module("sampleApp", ["ngRoute"])

sampleApp.config(function($routeProvider){
	
	$routeProvider	

	.when('/first',{
		templateUrl: 'Pages/first.html',
		controller: 'firstController'
	})

	.when('/second',{
		templateUrl: 'Pages/second.html',	
		controller: 'secondController'
	})
})

sampleApp.service("firstService", function(){
	this.name = "Rohit"
})

sampleApp.controller("firstController", ["$scope", "firstService", function($scope, firstService){
	$scope.name = firstService.name	

	$scope.$watch('name', function(){
		console.log(firstService)
		firstService.name = $scope.name
	})

}])

sampleApp.controller("secondController", ["$scope", "firstService", function($scope, firstService){
	$scope.name = firstService.name	

	$scope.$watch('name', function(){
		console.log(firstService)
		firstService.name = $scope.name
	})
}])


sampleApp.directive("firstDirective", function(){
	return{
		template: "<h1>This is it!</h1>",
		replace: true
	}
})

