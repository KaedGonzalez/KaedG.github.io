/* 
* 0. Scope 
*   What is scoping?
*       Determining where variables, functions and objects are accessible in your code during runtime.
*
*   Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
*       Variables defined within a function cannot be accessed outside the function anywhere because they are defined within the scope
*       of that function (local scope). But, a function can access variables from it's parent and or global scope. If you define a 
*       function under global scope, all of the variables are accessible in global can be used by the function. If another function 
*       is defined within that function, the new function can access the variables of it's parent function and so forth. 
*
* What are the different scopes in JavaScript?
*   Global, Local and Block Scope
*
*/
    // Global Scope with Let
    let scope = "Global"                            // defining a variable scope and initalizing with the string "Global" This is      
                                                    // is considered Global Scope as it is defined outside of a function. 
    // Local Scope                                  // This variable is accessible in any other scope
    function scopeLocal() {                         // Now, defining a function of scopeLocal and in it, assigning the variable scope
        let scope = "Local"                         // to the value of "Local". This value is only accesible within the block of the 
        console.log(scope)                         // function. 
    }                                               
    // Block Scope                                  
    if (scope === "Global" || scope === "Local") {  // A conditional statment is considered block scope. Both Const and Let are block scope
        let scope = "Block"                         // meaning that if a varibale, such as scope, is assigned a value ("Block") it is only 
        console.log(scope)                          // accessible within the block of the conditional statement. 
    }                                               
    console.log(scope) // => Global                 // Even though in this code there is a function referencing the scope variable as well
                                                    // as a conditional statement that also changes the value, the global variable is what 
                                                    // is accessed
/*
* What variables are bound to those scopes?
*   There are 3 variable keywords used for defining a variable var, let & const. Each with different attributes. Var has the least
*   restrictions. Variables declared using the var keyword are globaly scoped. Meaning they can be accessed and updated anywhere that is
*   NOT a function. 
*/
    // VAR
    var scopeToo = "Global"                         //  var is global scoped, so creating a variable of scopeToo will be accessible througout
    function localScope() {                         // inside of this function scopeToo will equal "Local" but you will not be able to access
       var scopeToo = "Local"                       // it ouside the function as it is Local scoped
       console.log(scopeToo)                        
    }                                               
    if (scopeToo === "Local") {                     // This conditional statement is trying to access the Local scoped scopeToo variable but
        var scopeToo = "Local & Block"              // since it cannot the else statment will execute
    } else {                                        
        var scopeToo = "Only Global"                // the scopeToo variable is now updated to "Only Global" and will be accessible throughout
    }                                               // as the var keyword is NOT Block scoped. 
    console.log(scopeToo)  // => "Only Global"      // The output of "Only Global" as is was reassigned in the conditional statement.    
/*
*   CONST
*       const is similar to that of let above except that variables declared using the const keyword are not able to be reassigned a different 
*       variable and will thus get an error.
*
* There is a variable in the global scope and a parameter with the same name, if you are within the function body which would you access? 
* If you were in the global scope which would you access? Why?
*/
    let test = 'Global';        // declaring a variable with "Global"    
    function testFunc() {       // declaring a testFunc function    
        let test = 'Local'      // reassigning the test variable to "Local"    
        return test             // returning the value of test
    }                           
    console.log(test)       // => Global    // the variable test is not accesible from the local scope and thus will reach out to the global scope    
    console.log(testFunc()) // => Local     // within the local scope of the function, the value of test = "Local"    
/*
*/