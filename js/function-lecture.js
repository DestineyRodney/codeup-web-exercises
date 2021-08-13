"use strict";
(function () {
    console.log("Welcome to Functions!");
//Define name functions
    function sayHello()
{
    console.log("Hello!");
}

console.log("In the file after creating the sayHello function.");

sayHello();

//Define anonymous functions
var sayHowdy = function () {
    console.log("Howdy!");
}

sayHowdy();

//Arguments and parameters
function add(x, y) {
    return x + y;
}

console.log("add(2,3) " + add(2, 3));

// when we call a function what we put between () are called an argument

function subtract() {
    return x - y;
}

//Scope (Global)
var instructor = "Douglas";
var day = "Friday";

function tellTheDay() {
    return "Tell " + instructor + " it's " + day + "!";

}

//Scope (Local)
function greeting() {
    var username = "Kenneth";
    return "Hi, " + username;
}

console.log(greeting());

// console.log(username); //would not print because in local scope

function checkDay() {
    var day = "Monday"; //Will see its Monday because local scope overrides
    return day;
}

console.log("It's " + checkDay());

const PI = 3.14159;

//Override global cont PI
function overrideGlobal() {
    var PI = 5;
    console.log("logging out local version of PI " + PI);
}

overrideGlobal();
console.log(PI);

})();




