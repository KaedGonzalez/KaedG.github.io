/*CONTROL FLOW
 *
 * 0. Also known as a conditional logic. Control flows allow us to be able to run code based on logic.
 *
 */

 // 1. If  //
/* Runs code if thhe logic is true. 
 * It says "if -something- do -this-"
 */
 
 /*syntax: if (a comparison expression that will result in true or false){
  *   /run code here
  *}
  */
 
 var broadwayPlay = "Hamilton";
 
 if (broadwayPlay === "Hamilton") {
     console.log("You made the right choice");
 }

// 2. Else-if //
/* Adding another condition after the 'if statement'.
 * We are able to have multiple 'else statments', and only what is true will be what is ran.
 * If multiple statements in an if and else if statement are true, only the first statement will be ran
 */
 
 else if (broadwayPlay === "The Lion King") {
     console.log("Go to Disney World For That");
 }


// 3. Else //
/* 
 * If nothing from the 'if' or 'else if' statements have been proven true, the else will be ran by default
 */
  else {
      console.log("Do you even now broadway?");
  }
  
  
  //If statment without the comments
  var broadwayPlay = "Hamilton";
 
 if (broadwayPlay === "Hamilton") {
     console.log("You made the right choice");
 } else if (broadwayPlay === "The Lion King") {
     console.log("Go to Disney World For That");
 } else {
      console.log("Do you even now broadway?");
  }
 
 
// 4. Switch
// The switch expression is evaluated once
// Expression is compared with the values of each case
// When there is a match, the code is excuted
// If none of the cases are a match, the default is executed 
// Only the first code block of the if else statement will execute
// If two conditions are true, just the first one will run
// The break statement stops the rest of the code from running the rest of the switch statements

var oldestSchuylerSister = "Angelica";

switch (oldestSchuylerSister) {
  case "Peggy":
  console.log("this is the younger sister");
  break;

  case "Eliza":
  console.log("this is not the oldest");
  break;

  case "Angelica":
  console.log("yay, Angelica!");
  break;

  default:
  console.log("not a Schuyler Sister");
}



/* Using Switch Statements over If Statements
 *
 * Switch Statements have a cleaner look
 * Comparing multiple conditions
 * Multiple values that have the same code
 *
 */
 
 
 /* Using If Statements over Switch Statements
 *
 * Test truthy or falsey
 * Evaluate different expressions
 *
 */
 