weatherApp.controller("homeController", ["$scope", "appService", function (scope, service) {

    scope.city = service.city;

    scope.$watch("city", function () {
        service.city = scope.city
    });

}]);


weatherApp.controller("forecastController", ["$scope", "appService", "$resource", "$routeParams", function (scope, service, resource, routeParams) {

    scope.city = service.city;
    scope.days = routeParams.days || 2;
    scope.weatherAPI = resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
    scope.results = scope.weatherAPI.get({
        q: scope.city,
        cnt: scope.days,
        mode: "json",
        appid: "d975b92f2ac52667853673afaf17d226"
    });

    scope.convertToCelsius = function (tempInKelvin) {
        console.log(Math.round(tempInKelvin - 273.15));
        return Math.round(tempInKelvin - 273.15);
    }

    scope.convertToDate = function (date) {
        console.log(new Date(date * 1000));
        return new Date(date * 1000);
    }

}]);
