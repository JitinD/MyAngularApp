weatherApp.service("appService", function () {
    this.city = ""
});

weatherApp.service("apiResourceService", ["$resource", function(resource){

    this.apiResource = resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

    this.getResults = function(city, days){

     return this.apiResource.get({
            q: city,
            cnt: days,
            mode: "json",
            appid: "d975b92f2ac52667853673afaf17d226"
        });
    }

}]);