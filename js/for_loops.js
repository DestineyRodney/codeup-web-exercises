// 2
// function showMultiplicationTable (num) {
//     for (var i = 1; i < 10; i++) {
//         console.log( (num * i));
//     }
// }
// showMultiplicationTable(7);
// console.log(showMultiplicationTable(7));
//3

for (var i = 20; i <=200; i++){
    if (i % 2 == 0) console.log( i + " Our number is even");
    else console.log(i +" Our number is odd");
}


//4
for (a = 1; a <= 9; a++) {
    for (b = 1; b <= a; b++) {
        console.log(a);
    }
}

//5
for (var d = 100; d >=5; d = d - 5){
    console.log(d)
}


console.log("<-------------->");

//Break &Continue

var userNumber = parseInt(prompt("Please enter an odd number between 1 and 50."));

while(userNumber >= 50 || userNumber <= 1 || userNumber % 2 === 0){
    console.log("The number entered was: " + userNumber);
    if (userNumber <= 50 && userNumber >= 1 && userNumber % 2 !== 0)
        break;
}

// 3

console.log("The number to skip is: " + userNumber);

var a = 0;
while (a++ <= 50) {
    if (a === userNumber) {
        console.log("Yikes! Skipping number:" + userNumber)
    } else if (a % 2 === 0) {
        continue;
    }
    console.log("Here is an odd number:" + a);
}



WHILE LOOPS



function multiplyByTwoUntil65536 (num){

    while (num < 65536){
        num = num * 2;
        console.log(num);
    }

}

multiplyByTwoUntil65536(1)

// Do While Loop
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

do {
    var singlePurchase = Math.floor(Math.random() * 5) + 1;
    console.log("There are " + allCones + " left to sell.");
    if (allCones >= singlePurchase) {
        (allCones = allCones - singlePurchase);
        console.log(singlePurchase + " cones were sold." + allCones + "left to sell.");
    } else {
        console.log("I cannot sell you " + singlePurchase + " I only have " + allCones);
    }
}   while (allCones > 0)
console.log("Yay! I sold all " + allCones + " cones!");
