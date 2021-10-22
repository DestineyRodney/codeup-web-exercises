"use strict"

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


let favoritesArr = [
    {
        name: "Sea Island Shrimp House",
        address: "322 W Rector, San Antonio, TX 78216;",
        coordinates : {
            lng: -98.49579788955563,
            lat: 29.523376906573283,
        },

    },
    {
        name: "Acadiana Cafe",
        address: "1289 SW Loop 410, San Antonio, TX 78227",
        coordinates: {
            lng: -98.6507735447902,
            lat:  29.424686562299478,

        }

    },
    {
        name: "Cheddar's Scratch Kitchen",

        address: "15607 I-10 West, San Antonio, TX 78249",
        coordinates: {
            lng: -98.5970514566971,
            lat: 29.595907496182296,
        }


    }
];

console.log(favoritesArr);

geocode(favoritesArr[2].address, mapboxKey).then(function(results){
    console.log(results)
    map.setCenter(results);
})

//Marker for acadiana
var marker = new mapboxgl.Marker()
    .setLngLat([-98.6507735447902, 29.424686562299478])
    .addTo(map);

//Popup for my fav rest
var acadianaPopup = new mapboxgl.Popup()
    .setHTML("<h1>Acadiana is my favorite restauraunt!</h1>")
    .addTo(map)
marker.setPopup(acadianaPopup)


// Create mapbox marker Using ForEach

favoritesArr.forEach(function(info){
    new mapboxgl.Marker({color: info.color})
        .setLngLat(info.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML("<h4>" + info.name + "</h4>" + "<p>" + info.type + "</p>" + '<img src="' + info.img +'">'))
        .addTo(map)
});





