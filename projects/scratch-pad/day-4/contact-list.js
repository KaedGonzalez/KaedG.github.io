// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    
    // create an object to return (id, nameFirst, nameLast)
    return { 
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }; 
}  


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    
    var contacts = []; // create the empty array to store contacts
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {     
            contacts.push(contact);   // push the contact into the contacts array
            
        },
        findContact: function(fullName) {
            // take the given variable and spliting based on the first name at index 0
            let firstName = fullName.split(' ')[0];  
            // take the given variable and split based on the last name at index 1
            let lastName = fullName.split(' ')[1];
            
            // use a for in loop to iterate throught the contacts
            for (let key in contacts) {  
                // compare the first and last names to the contacts array with the contacts objects
                if (firstName === contacts[key].nameFirst && lastName === contacts[key].nameLast) {
                    return(contacts[key]);
                }
            }
            
            
            
        },
        removeContact: function(contact) {
            let firstName = contact.nameFirst;           // split the given contact up into a firstName
            let lastName = contact.nameLast;             // split given contact into lastName
            let fullName = `${firstName} ${lastName}`   // combine the names for a fullName
            
            // using a for in loop to iterate through contacts
            for (let key in contacts) {
                // compare the first and last names to the contacts array with the contacts objects
                if (firstName === contacts[key].nameFirst && lastName === contacts[key].nameLast) {
                    contacts.splice(key, 1); // when there is a match, delete the match with the given key index
                }
            }
            
            
        },
        printAllContactNames: function() {
            let names = ""; // creating a names variable for storage
            
            // using a for loop to iterate through contacts
            for (let i = 0; i < contacts.length; i++) {
                // if the index is the last index, do not go to next line
                if (i === contacts.length - 1) {            
                    // add the output of names to the names variable
                    names += (`${contacts[i].nameFirst} ${contacts[i].nameLast}`); 
                } 
                // if the index is not the last index, go to next line
                else {
                    // add the output of names to the names variable
                    names += (`${contacts[i].nameFirst} ${contacts[i].nameLast}\n`);
                }
            }   
            return(names);      // return the names variable
        }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
