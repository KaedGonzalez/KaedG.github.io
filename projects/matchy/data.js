/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//decalre variable animal and assign an empty object to it
var animal = {}; 

// use dot notation to create a key of species with a string variable
animal.species = "dog";

// use bracket notaiton to create property of name with a string value

animal['name'] = "Smitty";

// use either dot or bracket notation to add property of noises and assign to an empty array.

animal.noises = [];

// Print animal object 

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a variable noises and assign an empty array
var noises = [];

// update the array of noises at index 0 with string
noises[0] = "bork";

// update the array using the push method to add value to end of array
noises.push("woof");

// update the index 0 by using shift method with new string value
noises.unshift("snarl");

// using the length mehod to add a new string to the array
noises[noises.length] = "howl";

// print the length of the array
console.log(noises.length);

// print the last element of the array
console.log(noises[noises.length-1]);

// Print the entire array
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// using bracket notation to add the noises array to the animal object
animal["noises"] = noises;

// add a new sound to the noises array in the animal object by dot or bracket notaion
animal.noises.push("growl");

// print animal object
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create animals variable and assign it to an empty array literal.
var animals = [];

// adding our animals object to the animals array
animals.push(animal);

// print animals array console
console.log(animals);

// creating variable duck and assigning it an object
var duck = {
    species: "duck",
    name: "Jerome",
    noises:["quak", "honk", "sneeze", "woosh"]
};

// adding the object duck to the animals array
animals.push(duck);

// print animals array to console
console.log(animals);

// creating variable pig and assigning it an object
var pig = {
    species: "pig",
    name: "Porky",
    noises:["squeel", "mush", "sniff", "grunt"]
};


// creating variable squirrel and assigning it an object
var squirell = {
    species: "squirell",
    name: "Slappy",
    noises:["squeek", "chip", "chirp", "twitch"]
};

// adding the pig and squirrel objects to the animals array 
animals.push(pig, squirell);

// print animals array to console
console.log(animals);

// print the length of the animals array
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Array, its a cleaner way of forming a list with and easy to access index
var friends = [];

// defining a function to get a random number 
function getRandom (arr) { 
// using the Math.random function to get a random value times the number of our animals array
     return Math.floor(Math.random() * arr.length);   
} 
// using the random number as an index value of our animals array and adding that random animal to the friends array
friends.push(animals[getRandom(animals)].name);      
console.log(friends);                                
 // adding the random friend to our animals array at index 0
animals[0].friends = friends;                       
// print ot console
console.log(friends);                                


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}