// // Alerts Hello every 5 seconds
//
// window.setInterval(function(){alert(‘hello’)},5000);
//
//
// // CLEARS INTERVAL
//
// Var sayHello = window.setInterval(function(){alert(‘hello’)},5000);
//
// Window.clearInterval(sayHello);

// // Mini Exercise
// //TODO: Finish coding this program. You need to stop the setInterval() method after the showTime() function has run five times
//
//
// let count = 0;
//
// function showTime() {
//
//     // return new date and time
//     let dateTime = new Date();
//
//
//     // return the time
//     let time = dateTime.toLocaleTimeString();
//
//     count += 1;
//
//     //if the count reaches 5, stop the program.
//     if(count >= 5){
//         console.log("Last time getting time stamped")
//         clearInterval(display);
//     }
//     console.log(time)
// }
//
// let display = setInterval(showTime, 5000);




// // timeout method creates a delay
//     function greet(){
//     console.log('hello world!');
//     }
//     // displays after 3 seconds
//     var displayGreeting = window.setTimeout(greet, 3000);
//     // clears window
//     window.clearTimeout(displayGreeting);
//
//
//     // or window.clearTimeout(displayGreeting);


// LOCATION

