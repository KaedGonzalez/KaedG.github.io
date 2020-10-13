// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) { 
  if (n < 0) {                    // working bacwards from n to zero
    return null                   // if n is negative, return null
  }                   
  if (n === 0) {                  // if n = 0, return 1
    return 1;
  }
  return n * factorial(n-1)       // multiply n by n - 1

};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  if (!array.length) {                      // Conditional when the length of the array reaches zero to return 0
    return 0
  }
  return sum(array.slice(1)) + array[0]     // Recursion expression that will return last n indexes starting from 1st index and adding that
};                                          // return to the 1st index of the array

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  
};

// 4. Check if a number is even.
var isEven = function(n) {                
      if (n === 0) {                      // conditional if n = 0 return true
        return true;
      } 
      if (n === -1 || n === 1) {          // if n is 1 or -1, return false     
        return false;
      } 

      return isEven(Math.abs(n) - 2);     // expression that will take the absolute value of n and subtract 2 until
  };                                      // it reaches 1 or 0

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n <= 0) {                           // checking to see if the number is negative or positive
    if (n === 0) {                        // if negative and n = 0, return 0
      return 0
    }
    return sumBelow(n + 1) + (n + 1);     // since n is negative count up to reach zero and add each number to itself
  } else {                                // along the way
  if (n === 0) {                          // if n is positive and n reaches 0, return 0
    return 0;                   
  } 
  return sumBelow(n - 1) + (n - 1);       // with a positive n, subract n to get to 0 and add intigers to itself
  }                                       // along the way
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  if( x === y || (x + 1) === y || (x - 1) === y) {    // conditional to check if x = y or x + 1/x - 1 = y
    return [];                                        // return an empty array
    } 
    else if (x < y) {                                 // if x is less than y addition will be needed to reach y
      return [x + 1].concat(range(x + 1, y));         // expression will take the return from function and concat
    }                                                 // x + 1 to each
    else if (x > y) {                                 // if x > y, subratcion to get to y 
      return [x - 1].concat(range(x - 1, y));         // expression to return result of x - 1 
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {                                // base case if exp = 0, return 1
    return 1;
  } else if (exp > 0) {                           // if exp is positive
      return exponent(base, exp - 1) * base;      // return result of exponent - 1 * the base
  } else {                                        // if exp is negatve,
    return exponent(base, exp + 1) / base;        // return result of exp + 1 divided by base
  }
}
// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {                    // base case if n = 1
    return true;                    // return true
  }
  if (n < 1) {                      // if in less than 1
    return false;                   // return false
  }
  return powerOfTwo (n / 2)         // recurse n / 2 to get to 1 or less than 1
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if (string.length === 0) {                      // base case when string.length reaches 0, 
    return "";                                    // return an empty string
  }                                               // recursive return
  return (reverse(string.slice(1))) + string[0];  // slice based off 1st index and add zero index
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if (!string.length) {                                               // base condition, if it reaches zero length
    return true;                                                      // return true
  }
  let val = string.split(" ").join("");                               // to mitigate spaces, split the string and join
  if (val[0].toUpperCase() !== val[val.length - 1].toUpperCase()) {   // if value at 1st index does not equal value
    return false;                                                     // of last index, return false
  }
  return palindrome(val.slice(1, val.length - 1));                    // recurse cutting off 0 index and last index
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

// Create a mulitply function that does not use the multply operator
// conition if y = 0, return true
// check if both x & y are negative
// return recursion expression with inverse x and add y
// if both x is positive
// return x plus recursion expression x and y - 1
var multiply = function(x, y) {
    if (y === 0){                                               
        return 0                                                
        } if (x < 0 && y < 0) {                                 
            return -x + multiply(x, y + 1);
        }
    return x + multiply(x, (y - 1));                              
    }

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (!str1.length && !str2.length) {               // conditional if both strings are empty
    return true;                                    // return true;
  }
  if (str1[0] !== str2[0]) {                        // check if string1 at index 0 = string2 and index 0
    return false;                                   // if not, return false
  }
  return compareStr(str1.slice(1), str2.slice(1))   // ruecurse by slicing of the 0 index of each string
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  if(!str.length){                                                            // when string length = 0
    return [];                                                                // return [];
  }
  return createArray(str.slice(0, str.length -1)).concat(str[str.length -1]); // recursion expression that will slice off
};                                                                            // the last index of each letter and add that 
                                                                              // last letter to the array working in reverse
// 17. Reverse the order of an array
var reverseArr = function (array) {
  if(!array.length) {                                       // when array is empty
    return [];                                              // return []
  }
  return reverseArr(array.slice(1)).concat(array[0]);       // recurse expression to return the 0 index of the array
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {                 
  if (length === 0) {                                     // while the array is empty
    return [];                                            // return [];
  }
  return buildList(value, length - 1).concat([value]);    // return the value in an array using the length as a counter
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {          
  if(!array.length) {                                   // if array is empty
    return 0;                                           // return 0
  }
  if (array[0] === value) {                             // if the array at zero index equals the value arguement
    return countOccurrence(array.slice(1), value) + 1;  // add 1 to the return
  }
  return countOccurrence(array.slice(1), value);        // else continue with the recursion but return previous value
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if(!array.length) {                     // if array is empty
    return [];                            // return []
  }                                     // recursion to slice up to and not includeing the last element of the array
                                        // and concat with the last element run throught the callback function
  return rMap(array.slice(0, array.length - 1), callback).concat(callback(array[array.length - 1]));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};


// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }
  if(n <= 1) {
    return n;
  }
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  if (!input.length) {                  // when array is empty
    return [];                          // return []
  }                               // slice from 0 up to length - 1 and concat that with the uppercase version of 
                                  // the last index
  return capitalizeWords(input.slice(0, input.length - 1)).concat(input[input.length - 1].toUpperCase())
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  if(array.length === 0) {                    // when array is empty
    return [];                                // return []
  }
  return capitalizeFirst(                     // recursive expression will slice from 0 up to the end of the array
    array.slice(0, array.length - 1))         // (not including end) and concat that with the first element of
  .concat(array[array.length - 1][0]          // the last index of the array and it's 0 index uppercase
  .toUpperCase() + array[array.length - 1]
  .slice(1));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  if(!str.length) {                         // assigning the obj variable to  equal {}        
    return obj;                             // when the string has no length return that obj
  }
  if(!obj[str[0]]) {                        // if the string at 0 index does not exist
    obj[str[0]] = 1;                        // create the key and add value of 1
  } else {
    obj[str[0]] ++;                         // if it does exist, add to the preexisting value
  }                                     
  return letterTally(str.slice(1), obj);    // recurse by sliceing off the 0 index of the str
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
    if (!list.length) {                                     // if list is empty
      return [];                                            // return []
    }
    let numBase = compress(list.slice(0, list.length - 1))  // assign the recursion array to a variable
    let num = list[list.length - 1]                         // assigning the number to a variable
    if (numBase[numBase.length - 1] === num){               // check if the number equals to the last index of the 
        return numBase                                      // recursed array. If so, move to the next
    }
    return numBase.concat(num);                             // return with the number added
  };
// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if(!array.length) {                               // when array is empty
    return [];                                      // return []
  }
  for (let i = array.length - 1; i >= -1; i--) {    // use a for loop to check if the previous value is = 0
    if(array[array.length - 1] !== array[i]) {
      return minimizeZeroes(array.slice(0, i + 1)).concat(array[array.length - 1]) // return recursive expression
    }                                                                             
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    if(!array.length){                      // if array is empty
      return [];                            // return []
    }
    if ((array.length - 1) % 2 === 0) {     // if the index of the array is even, return the number as a positive
    return alternateSign(array.slice(0, array.length - 1)).concat(Math.abs(array[array.length - 1]));
    }                                       // if the index is odd, return the number as a negative
    return alternateSign(array.slice(0, array.length - 1)). concat(-(Math.abs(array[array.length - 1])));
  };

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

var numToText = function(str) {
  // create a numbersArray to check for the number within the given string
  const numberArray = ['0','zero','1', "one",'2', 'two', '3','three','4','four','5', 'five','6','six', '7','seven','8', 'eight', '9', 'nine']
  if (!str.length) {                                // when str is empty                  
    return "";                                      // return ""
  }
  for (let i = 0; i < numberArray.length; i++) {    // loop through the numbers array and check if it is included
    if(str[str.length - 1] === numberArray[i]) {    // within the string
      return numToText(str.slice(0, str.length - 1)) + numberArray[i + 1]; // recurse through each of the string and 
    }                                                                     // if it's included replace the string in
  }                                                                       // text with the number(string)
  return numToText(str.slice(0, str.length - 1)) + str[str.length - 1];   // return text and recurse splicing the strign
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
