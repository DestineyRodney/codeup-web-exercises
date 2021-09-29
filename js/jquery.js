"use strict"

$(document).ready(function() {
//
    console.log("Ready to Go!")

});

// keycodes: arrowUp=38 arrowdown=40 arrowleft=37 arrowright=39 arrowdown=40 b=66 a=65 enter=13
var userInput = [];
var konamiPasscode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];


// $(document).keyup(function(event) {
//     userInput += event.keyCode;
//     console.log(event.keyCode);
//     console.log(userInput);
//
//     if(userInput === 'konamiPasscode.length'){
//
// }
// });


$(document).keyup(function(event){
    console.log(event.keyCode);

    if (event.keyCode === konamiPasscode[0]){
        userInput.push(konamiPasscode.shift())
    }

    if (konamiPasscode.length === 0){
        alert("You have added 30 lives!!!!");
        $('body').css('background-color', 'blue');
    }
});