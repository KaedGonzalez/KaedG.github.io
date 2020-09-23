/*
 * STRING MANIPULATION:
 *
 * String Manipulation is the process of changing a string. This can be done with arithmetic operators
 * or with the many mehtods of strings.
 */
 
 //1. WITH OPERATORS
 // You can change a string by using the + operator.
 
 //With addition
 var name = "Jack";
 var fullName = name + " Pena";
 console.log(fullName);
 
 
 //2. WITH STRING METHODS
 // There are built in methods in JavaScript that help you change strings. Here are some-
 
 //.toUpperCase(); changes the whole string to upper case.
 //.toLowerCase(); changes the whole string to lower case.
 //.concat(); combines two strings together
 //.slice(); will slice off any amount of characters you input
 //.includes(); tells you if a string includes anything
 //.repeat(); repeats the string any amount of times
 
 
 //.toUpperCase();
 //.toLowerCase();
 var dogName = "Theo";
 dogName.toUpperCase(); // returns "THEO"
 dogName.toLowerCase(); // returns "theo"
 
 
 //.concat() combines two strings together
 var dogLastName = "Pena";
 var dogFullName = dogName.concat(" ", dogLastName); 
 console.log(dogFullName); //returns "Theo Pena"
 
 
 //.slice()
 let shoe = "Nike";
 shoe.slice(1); // returns "ike";
 
 //.includes()
 let car = "Honda Civic"
 car.includes("Honda"); // returns true
 
 
 //.repeat()
 let sing = "la";
 sing.repeat(3);// returns "lalala"