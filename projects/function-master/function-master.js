//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
create an array to store values
use a for loop to iterate through the object
push the values using the key index to the array 
return the array in full
*/

function objectValues(object) {
    let arr = [];
    for(let key in object){
        arr.push(object[key]);
    }
  return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
create an array to store values
use a for loop to iterate through the object
use .push to add the object keys to the array
return the array as a string using .join
*/

function keysToString(object) {
    let arr = [];
    for(let key in object){
        arr.push(key);
    }
   return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
create an array to store values
use a for loop to iterate through the object
use a conditional statement to get the value if the typeof value is a string.
If the value is true, add to the array using the .push
do nothing if False.
return the array as a string using the .join method
*/

function valuesToString(object) {                   
    const arr = [];                                 
    for (let key in object) {                       
        if (typeof(object[key]) === "string") {     
             arr.push(object[key]);                  
        }                                           
    }                                               
    return arr.join(' ');                            
}    
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////


/*
test if the collection is array
return array if it is an array otherwise return object if it is an object.
*/

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {        
        return 'array';                     
    } else {
        return 'object';                    
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
use the .replace
replace string index 0 with with the uppercase character using .toUpperCase()
*/

function capitalizeWord(string) {
    return string.replace(string[0], string[0].toUpperCase());  
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {

/*
 Should take a string of one word, and return the word with its first letter capitalized
 capitalize the first letter
 concat the rest of the letters together using slice
*/
      let str = string.split(' ');                                
    for (let key in str) {                                      
        str[key] = str[key].charAt(0).toUpperCase() + str[key].slice(1); 
    }                                                          
    return str.join(' '); 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
calling the function capitalizeWord and passing in the object the function will return the
capitalized argument and use in the return statement.
*/

function welcomeMessage(object) {
    let name = capitalizeWord(object.name);
    return `Welcome ${name}!`; 

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
start by capitalizing the 2 different arguments using the capitalizeWord 
function and initilizing them to their name and species variables
return the phrase back utilizing the name and species variables
*/

function profileInfo(object) {
let name = capitalizeWord(object.name);         
    let species = capitalizeWord(object.species);   
    return `${name} is a ${species}`;              
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

/*
1st check to see if the object.noises property being returned is an array by using
Array.isArray method. If true and is not an empty value return the noises as a string,
if any of the conditions are false return that "there are no noises".
*/

  if (Array.isArray(object.noises)) {     
        if (object.noises.length > 0) {     
            return object.noises.join(' ');  
        }                                   
    }                                       
    return `there are no noises`;            

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

/*
Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
see if string has the word inside of it by "includes"
*/
 if (string.includes(word)){
      return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
using dot notation, adding the friends key to the object object and 
pusing the array of name returning the object
*/

function addFriend (name, object) {
        object.friends.push(name);       
    return object;                   

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
Conditional statment to determine if the given object has values in the friends key
If there is a value, use the includes method on the object to see if it matches the name value and return a boolean value
If there is no name return false
*/

function isFriend(name, object) {
 if (Object.keys(object).length > 0) {       
        return (object.friends.includes(name)); 
    }                                           
    return false;                                
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    
       const nonFriendsArr = [];                   // create an empty array to store the nonFriends
    for (let i = 0; i < array.length; i++) {    // Use a for loop to iterate through the array
        if (!array[i].friends.includes(name) && // Conditional statments to check if the friends array does not include the name passed as
            name !== array[i].name) {           // an argument and that the name does not also equal the name passed in the argument
            nonFriendsArr.push(array[i].name);   // add that name to the nonFriendsArr
        }                                       
    }                                           
    return nonFriendsArr;                       //  return the nonFriendsArr

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
function that takes an object, key and value. if the key exists in the object, replace it with the value, 
otherwise create the key/value pair.
*/
function updateObject(object, key, value) {
      object[key] = value; //assigns the key to given value, adds it if it isnt there
    return object; //returns object

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
     for (var i = 0; i < array.length; i++){ //loops through the array 
      delete object[array[i]]; //deletes properties in object per array index
  }
  return object; //returns object without those properties

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
     // remove all duplicates in the array
    // create an array to hold the non duplicates
    const reducedArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!reducedArr.includes(array[i])) {
            reducedArr.push(array[i]);
        }
    }
    return reducedArr;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}