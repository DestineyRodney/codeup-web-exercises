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

// $(".icon").attr('src', iconurl);
// $(".weather").html( "Current Weather: " + data.weather[0].description.toUpperCase());
// $(".temperature").html("Current Temperature: " + data.main.temp + " °F");
// $(".temp-high-low").html("Low: " + data.main.temp_min+ " °F" + "  High: " + data.main.temp_max+ " °F");
// $(".location").html(data.name);
// $(".wind-speeds").html("Current Wind Speed: " + data.wind.speed + " mph");
// $(".date").html(data.dt)




    });


    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        appid: weatherKey,
        lat: 29.7030,
        lon: -98.1245,
        exclude: "current,minutely,hourly,alerts",

        units: "imperial",

    })
        .done(function (data) {
            console.log(data);
            //refactor here with function
            for(let i = 0; i <= 4; i++){
                let iconcode = data.daily[i].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                //day 1
                $('.icon').eq(i).attr('src', iconurl);
                $('.dt').eq(i).html("date: " + data.daily[i].dt);
                $('.description').eq(i).html("Weather: " + data.daily[i].weather[0].description.toUpperCase());
                $('.temp').eq(i).html("Day Temperature: " + data.daily[i].temp.day + " °F" );
                $('.temphl').eq(i).html("Low: " + data.daily[i].temp.min + " °F" + " High: " + data.daily[i].temp.max + " °F");

                $('.wind-speed').eq(i).html(data.daily[i].wind_speed + " mph");
            }

            //eq goes through each item from list


        });

$("#find").click(function(e){
    e.preventDefault();
    let city = $("#search").val();
    geocode(city, mapboxKey).then((coor)=> {
        console.log(coor);
        $.get('https://api.openweathermap.org/data/2.5/onecall', {
            appid: weatherKey,
            lat: coor[1],
            lon: coor[0],
            exclude: "current,minutely,hourly,alerts",

            units: "imperial",

        }).done(function(data){
            console.log(data);

            for(let i = 0; i <= 4; i++){
                let iconcode = data.daily[i].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                //day 1
                $('.icon').eq(i).attr('src', iconurl);
                $('.dt').eq(i).html("date: " + data.daily[i].dt);
                $('.description').eq(i).html("Weather: " + data.daily[i].weather[0].description.toUpperCase());
                $('.temp').eq(i).html("Day Temperature: " + data.daily[i].temp.day + " °F" );
                $('.temphl').eq(i).html("Low: " + data.daily[i].temp.min + " °F" + " High: " + data.daily[i].temp.max + " °F");

                $('.wind-speed').eq(i).html(data.daily[i].wind_speed + " mph");
            }
        })

    })
})


//grab city value which is a string input and then using geocode
//.then same as .done

// function convertDateTime(dtNum){
//
//     var dtInMs = dtNum * 1000 //seconds * 1000= our milliseconds
//
//     Var dateObj = new Date(dtInMs); // pass in milliseconds to date(constructor)
//
//     Return dateObj.toLocalString();
//
// }

//.toLocalString returns string with date plus time




mapboxgl.accessToken = mapboxKey;
console.log(mapboxKey);

var map = new mapboxgl.Map(
    {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-98.4861, 29.4252],
        zoom: 10
    }
)



var marker = new mapboxgl.Marker({color: "orange"})
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);

marker.setDraggable(true);
