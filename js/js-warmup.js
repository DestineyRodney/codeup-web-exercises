//1.
//
function tellFortune (numChildren, partnerName, location, jobTitle) {
    var output = "You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + numChildren + " kids.";
    return output;
}

console.log(tellFortune(3, "tK", "Italy", "Designer"));
console.log(tellFortune(1, "Nat", "London", "Developer"));

console.log("<------->");

// function tellFortune(numChildren, partnerName, location, jobTitle) {
//     var output = "You will be have" + numChildren + "children.";
//
//     return output;
// }


//2. You know how old your dog is in human years, but what about dog years? Calculate it!
//     Write a function named calculateDogAge that:
//        * takes 1 argument: your puppy’s age.
//        * calculates your dog’s age based on the conversion rate of 1 human year to 7 dog years.
//        * outputs the result to the screen like so: “Your doggie is NN years old in dog years!”
//     Call the function three times with different sets of values.
//     Bonus: Add an additional parameter to the function that takes the conversion rate of human to dog years.


function calculateDogAge (pupAge){
    var dogToHuman = "Your dog is " + (pupAge * 7) + " years old in human years.";
    return dogToHuman;

    // var humanToDog = "Your dog is " + (humanAge / 7) + " years old in dog years.";
    // return humanToDog;
}


console.log(calculateDogAge(4));
console.log(calculateDogAge(9));
console.log(calculateDogAge(11));

// console.log("<----BONUS---->");

// function calculateDogAge (pupAge, conversionNum){
//     var dogToHumanYears = pupAge * conversionNum;
//     return "Hello there! This little dog is " +dogToHumanYears + " old. I arrived at that number by multiplying your dog's age of " + pupAge + " with a coverter of " + conversionNum;
// }
//
// console.log(calculateDogAge(3, 7));

