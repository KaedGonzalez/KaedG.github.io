////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(begin, end, step) {
  // create a counter that will start at the argument begin and finish at the argument end
  // if there is a step argument, use that to increment
  const arr = [];                                     // create an empty array to store values
  if (begin === end || begin < end && step < 0) {     // check if the end and beginning are equal OR begining is less than end AND if step less than 0
    return [];                                        // return an empty array
  }
  let increment = step || 1;                           // the if a step is givien set that to increment else just use 1
  for (let i = begin; i <= end; i += increment) {     // use a for loop with beginning and end set as start and end value and use the increament varuable to increment
    arr.push(i);                                       // push to the array
  } 
  return arr;                                         // return the array
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  return arr.reduce((a, b) => {   // using reduce on the array and passing in a & b as the parameters
    return a + b;                  // will return sum of a + b
  }, 0);                          // with 0 as the seed
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
const revArr = [];                        // creating an empty array
for (let i = 0; i < arr.length; i++) {    // looping through the array
  revArr.unshift(arr[i]);                  // using unshift to push the next value infront
}
  return revArr;                          // returning the new reversed array
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  return arr.reverse();                  // using the arr.reverse method to return in reverse
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {
  let obj = null;                               // create the obj variable and set to null
  for (let i = arr.length - 1; i >= 0; i--) {   // loop through the array starting from the end and working backwards
    obj = {value: arr[i], rest: obj};           // adding the object with key value of the array at index [i]
    }                                           // and the key of rest, set to the object
    return obj;                                  // return the object
  }

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let array = [];                             // create an empty array to store values
  for (var i = list; i; i = i.rest)           // use a for loop to iterate throught the object
  {                                           // it will loop through until the end of the object
    array.push(i.value);                      // using the key of rest as the iterator, pushing the
  }                                           // value from the value key
  return(array);                               // returning the array  
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var prepend = function(val, list){
  var listArr = listToArray(list);        // converting the list to an array
  listArr.unshift(val);                   // using the unshift method to add new value to begining of the array
  var listArr = arrayToList(listArr);     // turn the array back to a list
  return listArr;                         // return the list
};

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, val) {
  if (!list) {                        // if the array is empty, return undefined
    return undefined;       
  } else if (val === 0) {             // if the value is 0, return zero
    return list.value;
  } else {
    return nth(list.rest, val - 1);   // using recursion to iterate through the rest key
                                      // and return the value 
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {                            // first compare if obj1 strictly equals obj2
    return true;                                  // return true
                                                  // check if both obj1 & obj2 are objects
  } else if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) { 
                                                  // if the number of keys do not match, return false
    if (Object.keys(obj1).length !== Object.keys(obj2).length) 
      return false;                     
      for (var prop in obj1) {                    // use a for in loop to iterate through the object
        if (obj2.hasOwnProperty(prop)) {          // if the key matches in both objects and
          if (!deepEqual(obj1[prop], obj2[prop])) // recurse through the object key/values getting 
            return false;                         // the values. 
      } else                                      // if they are not equal, return false
        return false;
    }                                             
    return true;                                  // else return true
  } else  
    return false;
  }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
