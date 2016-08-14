weatherApp.controller("homeController", ["$scope", "appService", "$location", function (scope, service, location) {

    scope.city = service.city;

    scope.$watch("city", function () {
        service.city = scope.city
    });

    scope.submitForm = function(){
        location.path("/forecast")
    }

}]);


weatherApp.controller("forecastController", ["$scope", "appService", "$routeParams", "apiResourceService", function (scope, appService, routeParams, apiResourceService) {

    scope.city = appService.city;
    scope.days = routeParams.days || 2;

    scope.results = apiResourceService.getResults(scope.city, scope.days);

    scope.convertToCelsius = function (tempInKelvin) {
        return Math.round(tempInKelvin - 273.15);
    }

    scope.convertToDate = function (date) {
        return new Date(date * 1000);
    }

}]);
