/*
* DATATYPES: 
* 
* 0. There are various data types that are seperated in two categories - Simple (Primitive) and Complex.
* Difference between primitive and complex datatypes:
* Primitive, or simple, values include numbers, strings, boolean values, null, and undefined
* Primitve values are considered immutable because they cannot be changed once created
* Complex values include objects, arrays, and functions
* Complex values are considered mutable because these values can be changed after creation
*/

/* 1. NUMBERS:
 * In javascript, numbers cover all integers and fractional numbers
 */

var number = 5;
console.log(number);
number = 5.00001;
console.log(number);

/* 2. STRINGS:
 * Strings are encapsulated with a set of quotes - single or double quotes are fine.
 * Strings are zero-indexed by character, with the first character of a string at index zero
 * Individual characters can be accessed using bracket notation
 * Strings can be maninpulated using a variety of methods, operators, and properties
 */

var dogName = 'Milo';
console.log(dogName);
dogName = 'Buddy';
console.log(dogName);
dogName = dogName.concat(' and Milo');
console.log(dogName);
console.log(dogName[4]);                  // accesses individual character at 4th index

/* 3. BOOLEANS
 * A boolean datatype has two distinct possible values - true or false
 * Conditional expressions are a common use of booleans, as condition expressions will coerce an expression to a boolean value
 */

    console.log(1 > 2);              // => false
    console.log(1 >= 1);             // => true
    console.log(1 > 0 || 1 > 10);    // => true
    console.log(1 > 0 && 1 > 10);    // => false
    
/* 4. UNDEFINED:
 * Indicates a variable that has not been assigned a value.
 */
    let nothing;
    console.log(nothing);                // => undefined
    console.log(nothing === undefined);   // => true
    console.log(typeof nothing);         // => "undefined"
    console.log(typeof undefined);       // => "undefined"
    
/* 5. NULL:
 * Represents the intentional absence of an object value. null must
 * be assigned as a value to a variable. When looking at the typeof null, it
 * returns a value of'object'. This is a bug that has been around since the creation of JS but never fixed.
 */
    console.log(nothing);                // => undefined (still because we have not yet assigned it a variable
    nothing = null;                      // assigning null as the value to nothing
    console.log(nothing);                // => null
    console.log(typeof nothing);         // => "object"    


/* 6. ARRAYS:
 * Arrays are complex datatypes - they can hold any number and type of values
 * The values in an array are accessed by index using bracket notation, with the first value of an array at index 0
 * Arrays can even have other arrays inside of them!
 */

var exampleArray = [27, 'hello, john', false, null, ['dog', 'cat', 'bird']];

console.log(exampleArray);
console.log(exampleArray[0]);
console.log(exampleArray[exampleArray.length - 1]);
console.log(exampleArray[4][1]);

/* 7. OBJECTS:
 * Objects are another type of complex datatype.
 * Objects hold values in key/value pairs, and are accessed by key using dot or bracket notation to access the value.
 */

var exampleObject = {
  species: 'human',
  canSwim: true,
  fasterThanCheetah: false,
  population: 8000000000
};

console.log(exampleObject);
exampleObject.genders = ['male', 'female', 'agender', 'non-binary', 'many others'];
console.log(exampleObject);
console.log(exampleObject.species);
let objValue = exampleObject.species;                 // Value of species accessed using dot notation and assigned to variable <objValue>
console.log(objValue);                                // Logs value associated with key <species>
console.log(exampleObject['fasterThanCheetah']);

/* 8. FUNCTIONS:
 * Functions are really objects that can be called that execute a block of code because functions are objects, 
 * they can be assigned to variables, and used anywhere that other values can be used.
 * Functions can be stored in objects or arrays, and can also be passed into other functions.
 */
 
 const calculator = {                 // creating a variable calculator and assigning it an object
        add: function(a, b) {         // using the add key to assign a function with paramaters of a, b
            console.log(a + b);       // returning the sum of a & b
        },
        subtract: function (a, b) {   // new key of subtract
            console.log(a - b);       // will print out the value of a - b
        }
    };
            // Calling the method
    calculator.add(1, 1);             // => 2 
                                      // calling the function with the object-dot and then the method
                                      // passing in 2 arguments for the function. In this case 1 & 1    
    calculator.subtract(2, 1);        // => 1
    
/* 9. NAN:
 * NaN stands for 'not a number'
 * NaN is the return value of an operation which does not result in a defined numberical result
 */

console.log(0/0);
console.log(Math.floor(Math.random * 6));     // returns NaN because expects there to be a set of parentheses after Math.random and cannot properly evaluate expression due to this


/* 10. INFINITY AND NEGATIVE INFINITY:
 * In javascript, infintiy and negative infinity are constants used to represent the highest and lowest possible numerical values, respectively
 *evaluating a mathematical expression whose limit would evaluate to inf5inity (using calculus) would result in a value of infinity in javascript.
 */

console.log(5 / 0);                   // Infinity
console.log(-5 / 0);                  // -Infinity
console.log(Infinity + Infinity);     // Infinity
console.log(Infinity + -Infinity);    // NaN
   
   
/* 11. COPY AND REFERENCE:
 * Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. 
 * What does that mean, and how are they different?  

 * Passed by copy means that a variable being assigned any primitive value 
 * simply copies the primitive value. The value changing later will have no 
 * effect on the copied value.
 * 
 * Passed by reference means that a variable being assigned a complex value 
 * takes on the 'address' of the value. If the value changes, it will update all references to that value. 
 */

