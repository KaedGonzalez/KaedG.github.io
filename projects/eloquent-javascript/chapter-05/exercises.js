// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  return array.reduce((arr, index) => { // using index and passing in an array arguement
      return arr.concat(index);         // with an index arguement. Using the concat method
  }, []);                                // to add them together 
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, testFunc, updateFunc, bodyFunc) {

  while (testFunc(value)) {           // using a while loop to test if the value is true or false
      (bodyFunc(value));              // if true, run bodyFunction with the value
      value = (updateFunc(value));    // set the new value equal to the result of the updateFunction
    }
    return false;                     // once the testFunc is false, return false to stop the loop
  }

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
    for (let i = 0; i < array.length; i++) {  // loop through the array
      if (!test(array[i])) {                  // if the test function resolves to false
        return false;                          // return false
      }
    }
    return true;                              // otherwise, return true
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  let scripts = countBy(text, char => {                     // using the previous countBy function and the characterScript function passing 
    let script = characterScript(char.codePointAt(0));      // in the text and figuring out using the character Code what script each
    return script ? script.direction : "none";              // character belongs to and returning the direction (in the name key) and the
  }).filter(({                                              // count of each
    name
  }) => name != "none");
    console.log(scripts);
  if (scripts.length === 1) {                               // if the returned scripts array has a length of 1, return the direction located
    return scripts[0].name;                                 // in the name key
  } 
  return scripts.reduce((scriptTotal, script) => {          // with more than 1 array, using reduce to return the direction by testing each of
    if (script.count > scriptTotal.count) {                 // the total count and returning the object with the highest count
      return (script.name);                                  // from that object, returning the direction
    }
    return (scriptTotal.name);
  });
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
