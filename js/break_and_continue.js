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
