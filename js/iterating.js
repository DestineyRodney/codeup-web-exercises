(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Destiney", "Aniya", "Miranda", "Elexius"]
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]); //Destiney
    console.log(names[1]); //Aniya
    console.log(names[2]); //Miranda
    console.log(names[3]); //Elexius
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var i = 0; i < names.length; i += 1) {
        console.log(names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name, index, array){

        console.log("Element " + name + " is at index " + index);
        console.log(names);
        console.log(array);

    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


   function first (number) {
       return number[0]
   }
console.log(first([1,2,3,4,5]));

   function second (number) {
       return number[1]
   }
console.log(second([1,2,3,4,5]));
    function last (number) {
        return number(number.length - 1)
    }

    // first.forEach(function(element, index, array){
    //
    //     console.log(array[0]);
    //
    // });
    //
    // second.forEach(function(element, index, array){
    //
    //     console.log(array[1]);
    //
    // });
    //
    // last.forEach(function(element, index, array){
    //
    //     console.log(array[4]);
    //
    // });


})();