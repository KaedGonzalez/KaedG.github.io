/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a function named search to take an array and a string parameter (animlasArr, name)
// Set a conditional statement to compare string value and array value, if its a a match return array value. if not return null.
function search(animalsArr, name){
    for (let i = 0; i < animalsArr.length; i++){
       if(animalsArr[i].name === name){
           return animalsArr[i];
       } 
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a function called replace and take in an array, a string and an object (animalsArr, name, replaceObj)
// Set a conditional statement to compare string value and array value, if its a a match replace with object value.
function replace(animalsArr, name, replaceObj){    
    for(let i = 0; i < animalsArr.length; i++){
        if(animalsArr[i].name === name){
         animalsArr[i] = replaceObj;   
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a function called remove and take in the paramters of an array(animalsArr) and a string(name)
// Set a conditional statement to compare string value and array value, if its a a match remove it.
function remove(animalsArr, name){
    for(let i = 0; i < animalsArr.length; i ++){
        if(animalsArr[i].name === name){
            animalsArr.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a function called add that will take in an array and an object (animalsArr, newAnimalObj)
/**Check to see if the name value in the passed
object argument and array object do not match, also check
to make sure that there is a name and species of the object
that is being passed in as an argument. If all the conditions
resolve to true, add the new object to the animalsArray
using the .push method if any of the above condition is false, return.**/ 
function add(animalsArr, newAnimalObj){
    if (newAnimalObj.species.length === 0 && newAnimalObj.name.length === 0){
        return;
    }
    for (var i = 0; i < animalsArr.length; i++){
        if (animalsArr[i].name === newAnimalObj.name) {
            return;
        }
    }
    animalsArr.push(newAnimalObj);
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
