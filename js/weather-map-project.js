"use strict";
//

// $.get('https://api.openweathermap.org/data/2.5/forecast', {
//     appid: weatherKey,
//     q: "San Antonio, US",
//     lat: 29.7030,
//     lon: -98.1245,
//
//     units: 'imperial'
//
// })
//     .done(function(data) {
//         console.log(data) ;
//
//     });



// $(document).ready(function () {
//
//     $("submitWeather").click(function () {
//         var city = $("city").val();
//
//         if (city !== ""){
//             $.ajax({
//                 url: "api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=weatherKey",
//                 type: "GET",
//             dataType: "jsonp",
//             success: function(data){
//                     console.log(data);
//             }
//             });
//         }else {
//             $("error").html("Field cannot be empty");
//         }
//     });

// });

$.get("https://api.openweathermap.org/data/2.5/weather", {
    APPID: weatherKey,
    q:     "San Antonio, US",
    units: "imperial",
}).done(function(data) {
    console.log(data);
    //insert code inside the .done
    var temperatureF = data.temp;

    $("#weather").html("<p>" + data.weather[0].main + "</p>");
    $("#temperature").html(temperatureF + "&#176;" + "<span>F</span>");
    $("#icon").html('<img src="img/weather-icons/' + data.weather[0].icon + '.png" + />');
    $("#location").html(data.name);
    $("#wind-speed").html("Current Wind Speed: " + data.wind.speed);

});
//
//     // ==== Makes timestamp human readable ====
//     function getDate(timestamp) {
//         return new Date(timestamp * 1000).toLocaleDateString();
//     }
//
//
//     // === Function Call ===
//
//
