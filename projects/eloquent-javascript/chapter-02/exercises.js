
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// create a function triangles using the parameter of num

function triangles(num) {
  for (let i = 1; i <= num; i++) {  // create a for loop to use the iteration variabe as a counter
      console.log('#'.repeat(i));    // use the .repeat method and the counter to print out 
      }                             // a consecutive number of '#' on each new line making the
  }                                 // triangle
  
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// create a function fizzBuzz taking in no arguments

function fizzBuzz() {
  for (let i = 1; i <= 15; i++){  // create a for loop to use the iteration variable as a counter
    let text = "";                // create a variable 'text' to store what to print out
    if (i % 3 === 0) {            // conditional statment so if i is divisible by 3 add 'fizz' to 
      text += 'fizz';             // the text variable
    }                             //
    if (i % 5 === 0) {            // conditional statment so if i is divisible by 5 to add 'buzz'
      text += 'buzz';             // to the text variable. Since all are if statments, the strings
    }                             // will concatinate.
    if (text === "") {            // Therfore, if neither of the previous conditional statements
      text = i;                   // are true, the iteration value will be added to the text variable
    }                             //
    console.log(text);             // print out the text string
  }
  
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Create a function drawChessboard using a num parameter

function drawChessboard(num) {                  
    let text = "";                              // Create a text variable and assign it an empty string 
    for (let i = 1; i <= num; i++) {            // Create the 1st for loop using the iteration value
        for (let j = i; j < i + (num); j++) {   // to represent each new line. Create a second for loop
            if (j % 2 === 0) {                  // using the iteration value as a counter for each
                text += '#';                     // character of each line and using the iteration variable of
            } else {                            // the 1st loop to designate if the new line is even or odd
                text += ' ';                    // Concatinating the values of '#' for even and " " for odd
            }                                   // to the variable text. 
        }                                       //
        text += '\n';                            // Concatinating the text variable with the new line character
    }                                           // at the end of each inner for loop and before beginning the 
    console.log(text);                          // outter loop. Printing the text
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
