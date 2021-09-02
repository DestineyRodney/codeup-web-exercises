// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
// timesFour(0) //0
// timesFour("5") //20
// timesFour(-5) //-20
// timesFour('Texas') //false
// timesFour([2,1,0]) //false
// timesFour(true) //false
// timesFour(null) //false

function timesFour (input) {
    if (Array.isArray(input)){
        return false;
    } else if (isNaN(parseFloat(input))) {
        return false;
    } else {
        return input * 4;
    }
}

console.log(timesFour(0));
console.log(timesFour("5"));
console.log(timesFour(-5));
console.log(timesFour('Texas'));
console.log(timesFour([2, 1, 0]));
console.log(timesFour(true));
console.log(timesFour(null));
console.log(timesFour(false));


// Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
// convertDaystoHours(0) //0
// convertDaystoHours('5') // 120
// convertDaystoHours('Texas') //false
// convertDaystoHours([2, 1, 0]) //false
// convertDaystoHours(true) //false
// convertDaystoHours(false) //false

function convertDaystoHours (days) {
    if (Array.isArray(days)) {
        return false;
    }else if(isNaN(parseInt(days))) {
        return false;
    } else {
        return days * 24;
    }
}

console.log(convertDaystoHours(0));
console.log(convertDaystoHours('5'));
console.log(convertDaystoHours('Texas'));
console.log(convertDaystoHours([2, 1, 0]));
console.log(convertDaystoHours(true));
console.log(convertDaystoHours(false));

// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.
// calculateTax(25, 8)				 // “$27.00"
// calculateTax(10, 12)             // “$11.20”
// calculateTax(120, 15.5)			 //	“$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax(“Codeup”, 100)      // false
// calculateTax()                   // false



function calculateTax (totalPaid, taxPercent) {
    if (Array.isArray(totalPaid) || Array.isArray(taxPercent)){
        return false;
    } else if (isNaN(parseFloat(totalPaid)) || isNaN(parseFloat(taxPercent))) {
        return false;
    } else {
        return totalPaid + (totalPaid * taxPercent/100)
    }
}

console.log(calculateTax(25, 8));
console.log(calculateTax(10, 12));
console.log(calculateTax(120, 15.5));
console.log(calculateTax(10, true));
console.log(calculateTax([1, 2, 3], 10));
console.log(calculateTax("Codeup", 100));
console.log(calculateTax());
