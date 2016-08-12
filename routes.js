weatherApp.config(function ($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "WeatherAppPages/HomePage.html",
            controller: "homeController"
        })

        .when("/forecast", {
            templateUrl: "WeatherAppPages/ForecastPage.html",
            controller: "forecastController"
        })

        .when("/forecast/:days", {
            templateUrl: "WeatherAppPages/ForecastPage.html",
            controller: "forecastController"
        })
});