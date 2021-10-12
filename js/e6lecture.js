console.log("Multiply");
//a & b value set in function call
function multiply(a, b) {
    return a * b
}

console.log(multiply(5, 2));  // 10
console.log(multiply(5));     // Returns NaN ! because b is not defined

console.log("<-------------->");
// console.log("Multiply1");
//
//Before e6
//we could use ternary to set b=value
//a defined in function while b is set in function body
function multiply1(a, b) {
    b = (typeof b !== 'undefined') ?  b : 1
    return a * b
}

console.log(multiply1(5, 2));
// 10
console.log(multiply1(5));     // 5


console.log("<-------------->");



console.log("Multiply2");

//Using e6
// we can now define in function head

function multiply2(a, b = 1) {
    return a * b
}

console.log(multiply2(5, 2));          // 10
console.log(multiply2(5));            // 5
console.log(multiply2(5, undefined));  // 5
console.log(multiply2(5, "")); // returns 0 because "" is falsy value
console.log(multiply2(5, NaN));
//
//
