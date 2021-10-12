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


    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        appid: weatherKey,
        lat: 29.7030,
        lon: -98.1245,
        exclude: "current, minutely, hourly, alerts",

        units: 'imperial',

    })
        .done(function (data) {
            console.log(data);

            let iconcode1 = data.daily[0].weather[0].description.icon;
            var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png";
            //day 1
                $('.icon1').attr('src', iconurl1);
                $('.dt1').html("date: " + data.daily[0].dt);
                $('.description1').html("Weather: " + data.daily[0].weather[0].description.toUpperCase());
                $('.temp1').html("Day Temperature: " + data.daily[0].temp.day + " °F" );
                $('.temphl1').html("Low: " + data.daily[0].temp.min + " °F" + " High: " + data.daily[0].temp.max + " °F");

            $('.wind-speed1').html(data.daily[0].wind_speed + " mph");



            //day2

            $('.dt2').html("date: " + data.daily[1].dt);
            $('.description2').html("Weather: " + data.daily[1].weather[0].description.toUpperCase());
            $('.temp2').html("Day Temperature: " + data.daily[1].temp.day + " °F" );
            $('.temphl2').html("Low: " + data.daily[1].temp.min + " °F" + " High: " + data.daily[0].temp.max + " °F");

            $('.wind-speed2').html(data.daily[1].wind_speed + " mph");



        //    day3

            $('.dt3').html("date: " + data.daily[2].dt);
            $('.description3').html("Weather: " + data.daily[2].weather[0].description.toUpperCase());
            $('.temp3').html("Day Temperature: " + data.daily[2].temp.day + " °F" );
            $('.temphl3').html("Low: " + data.daily[2].temp.min + " °F" + " High: " + data.daily[0].temp.max + " °F");

            $('.wind-speed3').html(data.daily[2].wind_speed + " mph");

            //day4

            $('.dt4').html("date: " + data.daily[3].dt);
            $('.description4').html("Weather: " + data.daily[3].weather[0].description.toUpperCase());
            $('.temp4').html("Day Temperature: " + data.daily[3].temp.day + " °F" );
            $('.temphl4').html("Low: " + data.daily[3].temp.min + " °F" + " High: " + data.daily[0].temp.max + " °F");

            $('.wind-speed4').html(data.daily[3].wind_speed + " mph");


        //    day5

            $('.dt5').html("date: " + data.daily[4].dt);
            $('.description5').html("Weather: " + data.daily[4].weather[0].description.toUpperCase());
            $('.temp5').html("Day Temperature: " + data.daily[4].temp.day + " °F" );
            $('.temphl5').html("Low: " + data.daily[4].temp.min + " °F" + " High: " + data.daily[0].temp.max + " °F");

            $('.wind-speed5').html(data.daily[4].wind_speed + " mph");

        });








// $("#find").click(function (event) {
//     var input = document.getElementById("search").value
//     console.log(input);









// $.get('https://api.openweathermap.org/data/2.5/onecall', {
//     appid: weatherKey,
//     lat: results[1], // came from geocode function & user input
//     lon: results[0], // came from geocode function & user input
//     units: 'imperial'
// })
//     .done(function (weather) {
//         // console.log(weather)
//         var dailyWx = weather.daily; // stored daily weather data in variable to iterate easier
//         // console.log(dailyWx);
//         var userLocation = $('#location-search').val();
//         var cards = '';
//         for (let i = 0; i < dailyWx.length; i++) {
//             if (i <= 4) {
//                 // variable declarations for dates and times
//                 let dt = new Date(dailyWx[i].dt * 1000).toLocaleDateString('en-US', {
//                     weekday: 'short',
//                     day: 'numeric',
//                     year: 'numeric',
//                     month: 'long'
//                 });
//                 let sr = new Date(dailyWx[i].sunrise * 1000).toLocaleTimeString();
//                 let ss = new Date(dailyWx[i].sunset * 1000).toLocaleTimeString();
//                 let precipitation = dailyWx[i].pop * 100;
//
//
//                 $('#find').click(function (event) {
//                     alert("Your weather has been updated!")
//                     var input = document.getElementById('search').value
//                     console.log(input);