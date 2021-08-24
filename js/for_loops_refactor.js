"use strict";
//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
function showMultiplicationTable (num) {
    for (var i = 1; i <= 10; i++) {
        console.log( num + " x " + i + " = " + num * i);
    }
}
showMultiplicationTable(7);

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

function randOddOrEven (){
    for(var i = 0; i < 10; i++){
        var ranNum = Math.floor(Math.random() * 180) + 20;
        var oddOrEven = ranNum % 2 == 0 ? "even" : "odd";
        console.log(ranNum + " is " + oddOrEven);
    }
}
console.log(randOddOrEven());

//Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


function numTriangle(){
    for (let i = 1; i < 10; i++) {
        console.log(i.toString().repeat(i));
    }
}

console.log(numTriangle());


// Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

function subtractByFive () {
    for (var i = 100; i >= 5; i = i -5){
        console.log(i)
    }
}

console.log(subtractByFive());