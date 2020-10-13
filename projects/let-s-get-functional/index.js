// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-kgonzalez");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    return _.filter(array, (customerObj) => {   // invoke my filter function using array as my first argument 
        return customerObj.gender === 'male';   // passing the array into the callback and give all the
    }).length;                                  // objects that are male
};

var femaleCount = function (array) {
    // I: array
    // O: number
    // C: use reduce
    
    // invoke reduce function with collection, function and an optional seed
    // will need a seed as 1st element of the array is an object and not a number
    // datatype
    return _.reduce(array, (counter, customerObj) => {  // using the reduce function to return a count of
        if(customerObj.gender === "female") {           // all the objects whereby the gender is female
            counter ++;                                 // if the object.gender equals female, increase the counter
        }                                               
        return counter;                                 // return the counter
    }, 0);
};
    

var oldestCustomer = function (arr) {
    // I: array
    // O: string
    // C: none
    
   return _.reduce(arr, function(oldest, customerObj) { // using the reduce function comparing the age of each object.
         if (customerObj.age > oldest.age) {            // and returning the object that has the oldest age
             oldest = customerObj;                      // setting the oldest to the object with oldest age
         }
        return oldest;                                  
    }).name;                                            // returning the object.name
};

var youngestCustomer = function (arr) {
    // I: array
    // O: string
    // C: none
    return _.reduce(arr, function(youngest, customerObj) {  // now using the reduce function comparing
        if (customerObj.age < youngest.age) {               // the ages and returning the customer with the
            youngest = customerObj;                         // object containing  the youngest age
        }
        return youngest;
    }).name;                                                // returning the name of the object
};

var averageBalance = function (arr) {
    // I: array
    // O: number
    // C: none
   return _.reduce(arr, function(sum, customerObj) {                        // using the reduce function to get an average balance
        let balance = Number(customerObj.balance.replace(/[^0-9\.]+/g,""));  // of all the objects. 
        sum += balance;                                                      // converting the balance into a number from a string using
        return sum;                                                          // the replace method and regular expression by replacing anything
    }, 0)/arr.length;                                                       // not a number or decimal with "" and converting that to a Number
} ;                                                                          // using the sum paramter to tally the total and return the array of numbers
                                                                            // divided by length for the average

var firstLetterCount = function (arr, letter) {
    // I: Array, String
    // O: Number
    // C: None
    return _.filter(arr, function(obj){                                 // The filter function to count all the names that begin with a given letter
        if (obj.name[0].toLowerCase() === letter.toLowerCase()) {       // conditional if the object name at 0 index equals the given letter
            return true;                                                 // both converted to lower case, return true and store within an array
        }                                                           
    }).length;                                                           // return the length of the array
};

var friendFirstLetterCount = function (arr, customer, letter) {
    // I: array, customer, letter
    // O: Number
    // C: None
    let customerObj;                                // Because we are accesing an array of objects within an array of objects, we first need
    for (let i = 0; i < arr.length; i++) {          // to create an object of just the array of the object given the specific name
        if (arr[i].name === customer) {             
            customerObj = arr[i];
        }
     }
    return _.filter(customerObj.friends, function(obj) {            // with the object of the specified customer, 
        if (obj.name[0].toLowerCase() === letter.toLowerCase())     // use the filter function to go throught just the customer.friends array
        return true;                                                 // and return true if the given letter matches the 0 index of each of the friends
    }).length;                                                      // and store in a seperate array. 
};                                                                   // return the length

var friendsCount = function (arr, customer) {
    // I: Array, Name
    // O: Array
    // C: None
   let result = _.filter(arr, function (object) {                   // Again trying to reach an inner arry of objects within an array of objects
      for (let i = 0; i < object.friends.length; i++) {             // using the filter function to get an end array and a for loop to loop within
          if (object.friends[i].name === customer) {                // the inner array of friends. 
              return true;                                          // if any name within the friends object matches the given customer name
            }                                                       // store within the the results array the object containing the customer name
        }
   });
    return _.pluck(result, 'name');                                  // using pluck to pull the name of each of the arrays that the friends name was contained within
  };                                                                 // note to use string for accessing the property values within the object

var topThreeTags = function (array) {
    // I: Array
    // O: Array
    // C: None
    
    // this function will return the top three most used tag words within an array of objects
    
    let tagsArr = [];                                                   // Start by creating a tagsArr to store all of the tags in
    for (let i = 0; i < array.length; i++) {                            // Loop through the array 
        tagsArr = tagsArr.concat(array[i].tags);                         // To return a single array and not multiple arrays, use concat 
    }                                                                   
    const wordCount = _.reduce(tagsArr, function (wordsObj, words) {    // Store in the wordCount variable the return from the reduce funtion
            if (wordsObj[words]) {                                      // passing in the just created tagsArr and a callback to count the 
                wordsObj[words] ++;                                     // individual words. Converting each key to equal that of each word
            } else {                                                    // if the key already exists add 1 to the value
                wordsObj[words] = 1;                                    // if the key does not exist create it with the word and give it a value of 1
            }
            return wordsObj;                                             // return the words object.
        }, {})                                                          // remember when using reduce, you can pass an empy {} to create a single object
    
    const arrOfWordCount = [];                                          // create an array of the word count
    
    for (let key in wordCount) {                                        // iterate over the object of wordCount and store the array of the key value pair
        arrOfWordCount.push([key, wordCount[key]]);                      // inside the new arrayOfWordCount
    }
    arrOfWordCount.sort(function(a,b) {                                 // Sort through the array by returning true if the second element is greater than the 
        return b[1] - a[1];                                             // first element. This will have the higher key/values in the beginning of the array
    });
    const top3Words = arrOfWordCount.slice(0,3);                        // store the top 3 arrays in a variable named top3Words
    return _.map(top3Words, function (arr) {                            // use the map function to return the 0 index (the word) of each of the arrays
        return arr[0];
    });
};

var genderCount = function (arr) {
    // I: Array
    // O: Object
    // C: reduce
    const genderArr = [];                                               // creating an array to store the gender values within each of the objects
    for (let i = 0; i < arr.length; i++) {
        genderArr.push(arr[i].gender);
    }
    return _.reduce(genderArr, function (gender, cat) {                 // using reduce to return an object seperating the genders
        if (gender[cat]) {                                              // if the gender exists within the object, add 1 to it
            gender[cat]++;
        } else {                                                        // if the gender does not exist, add it and give it a value 
            gender[cat] = 1;                                             // of 1
        }
        return gender;
    }, {});                                                              // return the object of genders and the count
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
