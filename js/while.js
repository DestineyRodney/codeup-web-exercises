//WHILE LOOPS



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
console.log("Yay! I sold all cones!");
