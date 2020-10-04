////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(x, y) {
  return Math.min(x,y);   // using the Math.min method to return the lowest argument
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(n) {
  if (n < 0){                 // using recursion, you need conditional statments or else you will get a stack error
    n = -n;                   // Testing if the number is negative, to make it a positive 
  } if (n === 0) {            // If the number is equal to zero then that is true
    return true;               //
  } else if (n === 1) {       // And if the number is euqal to 1, it will return false
    return false;              //
  } else {                    //
     return isEven(n - 2);    // This will conntinue to invoke the isEven function and subtract 2 from each subsequent pass
  }                           // until it reaches 0 or 1. 
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(characters, letter) {
    let charCounter = 0;                  // create a character counter to store the number of characters
    for (let i in characters) {           // using a for in loop to access the string of characters
      if (characters[i] === letter) {     // Conditional, if the given character matches a character from the string
        charCounter ++;                   // increase the character counter
      }                                   //
    }                                     //
    return(charCounter);                   // return the number of characters 
  }

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(characters) {
let charBCount = 0;                 // creating a 'B' character variable to store the count
    for (let i in characters) {     // using a for in loop to iterate through the characters string
      if (characters[i] === 'B') {  // if the character in the string matches the given 'B' character
        charBCount ++;              // increase the count
      }                             //
    }                               //
    return(charBCount);              // return the count of B's
  } 
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
