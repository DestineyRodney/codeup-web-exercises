function tellFortune (numChildren, partnerName, location, jobTitle) {
    var output = "You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + numChildren + " kids.";
    return output;
}

console.log(tellFortune(3, "tK", "Italy", "Designer"));
console.log(tellFortune(1, "Nat", "London", "Developer"));

// console.log("Hello");

// function tellFortune(numChildren, partnerName, location, jobTitle) {
//     var output = "You will be have" + numChildren + "children.";
//
//     return output;
// }