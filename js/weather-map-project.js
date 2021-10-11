"use strict";
//

$.get('https://api.openweathermap.org/data/2.5/weather', {
    appid: weatherKey,
    q: "San Antonio, US",
    lat: 29.7030,
    lon: -98.1245,

    units: 'imperial'

})
    .done(function(data) {
        console.log(data) ;
        //
        var iconcode = data.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

$(".icon").attr('src', iconurl);
$(".weather").html( "Current Weather: " + data.weather[0].description.toUpperCase());
$(".temperature").html("Current Temperature: " + data.main.temp + " °F");
$(".temp-high-low").html("Low: " + data.main.temp_min+ " °F" + "  High: " + data.main.temp_max+ " °F");
$(".location").html(data.name);
$(".wind-speeds").html("Current Wind Speed: " + data.wind.speed + " mph");
$(".date").html(data.dt)
    });


function getWeather (forecast) {

}

