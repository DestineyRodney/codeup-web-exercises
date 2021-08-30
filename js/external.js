"use strict";
console.log("Hello from external JavaScript.");
alert("Welcome to my website!");

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days,
//     they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for
//     a movie per day is $3, how much will you have to pay?

var userInput = prompt("Please enter your favorite color.");
    console.log("The user entered: " +  userInput);
    alert("Great, " + userInput + " is my favorite color too!");

var thelittleMermaid = parseInt(prompt("How many day did you rent the Little Mermaid?"));

var brotherBear = parseInt(prompt("How many days did you rent Brother Bear?"));

var hercules = parseInt(prompt("How many days did you rent Hercules?"));

var totalAmountOwed = (thelittleMermaid + brotherBear + hercules) * 3
alert(totalAmountOwed);



// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different' +
//  rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment
// for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.



var google = parseInt(prompt("How many hours did you work at Google?"));

var amazon = parseInt(prompt("How many hours did you work at Amazon?"));

var facebook = parseInt(prompt("How many hours did you work at Facebook?"));

var totalAmount = (amazon * 380 + google * 400 + facebook *350);

alert("$" + totalAmount);

// A student can be enrolled in a class only if the class is not full and the class
// schedule does not conflict with her current schedule.

var classFull = confirm("Is the class full?");

var ScheduleConflicts = confirm("Do you have schedule conflicts?");

alert("You can join the class is a " + (!classFull && !ScheduleConflicts) + " statement.");

// A product offer can be applied only if a person buys more than 2 items, and the offer has
// not expired. Premium members do not need to buy a specific amount of products.

var validOffer = confirm("Is offer still valid?");

var customerHasMoreThanTwoItems = parseInt(prompt("How many items do you have in your cart?")) >= 2;

var customerIsPremiumMember = confirm("Are you a premium member?");

var offerCanBeUsed = (customerHasMoreThanTwoItems || customerIsPremiumMember) && validOffer;

alert("You can use this offer is a " +  offerCanBeUsed + " statement.");





