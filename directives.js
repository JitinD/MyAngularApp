weatherApp.directive("weatherReport", function () {

    return {
        restrict: "E",
        templateUrl: "Directives/WeatherReport.html",
        controller: "forecastController",
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandardDate: "&",
            convertToStandardTemperature: "&",
            dateFilter: "@"
        }
    }

});