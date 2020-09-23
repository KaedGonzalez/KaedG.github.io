/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
 * DECLARING VARIABLES:
 * 0. There are three keywords we can use to declare a variable, and each has its different uses.
 * 1. The 'var' keyword
 * 
 * Scope: 'var' is globally scoped when declared outside of a function and locally scoped when declared inside of a function. To be locally scoped means that a variable can only be accessed inside that function.
 * 
 * Variables declared with the 'var' keyword can be re-declared and updated.
 */
 var num = 10;
 console.log(num); // prints 10;
 
/* 2. The 'let' keyword
 * Scope: 'let' is block scoped which includes for/while/if statements. Variables declared with the 'let' keyword can be only be accessed inside of the code block it was declared in.
 * 
 * Variables declared with the 'let' keyword cannot be re-declared, but they can be updated.
 */
let newWords = 'uppercase';
for (let i = 0; i < newWords.length - 1; i++) {
    let upperCaseWord = newWords[i].toUpperCase();
}
 
/* 3. The 'const' keyword
 * Scope: 'const' is also block scoped - it can only be accessed inside of the code block it was declared in.
 * 
 * Variables declared with the 'const' keyword cannot be re-declared or updated.
 */
const favColor = "black";

/* 
 * HOISTING:
 *
 * 0. Hoisting is the default behavior of moving all declarations to the top of the current scope. Variables are able to be declared after they’re assigned.
 */