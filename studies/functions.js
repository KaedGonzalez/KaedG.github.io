/*
 * FUNCTIONS:
 *
 * Functions are reusable blocks of code that you can use throughout your code. They include a name, parameters
 * (optionally), a body and a return statement (also optionally). Functions must first be declared before they can be 
 * used (called or invoked). When they are called, the computer only executes them once.
 */
 
 
 
 //First we must DECLARE our function. Then we can execute, call, or invoke a function. Here is an example.
 
 /*This function saySomething will take string PARAMETERS (which are placeholders for the ARGUMENTS that will
  * be passed through later) greeting and name and return them concatenated.
  */
 function saySomething(greeting,name){
     return greeting + " " + name;
 }
 
 /*The following calls or invokes the function saySomething with "Heyo" and "Jack" as the two ARGUMENTS. 
  * It will return "Heyo Jack".
  */
  
 saySomething("Heyo", "Jack"); 
 
 
 
 //Format of a function is below. When calling it, you replace the parameters with arguments.
 
 function name(parameters){
     return;
 }
 
 /*You can also assign a function to a variable like this. I assigned the premade function saySomething
  *to a new variable. When I called the variable, I just put the arguments in parantheses next to it and concactenated
  *the rest of my string result.
  */
 
 var firstPart = saySomething;
 console.log(firstPart("Heyo", "Jack") + "." +" How're you?");
 //returns "Heyo Jack. How're you?"
 
 
 
 //SPECIFYING INPUTS AND OUTPUTS
 // Functions OPTIONALLY require inputs and OPTIONALLY return something. 
 
 /*When you call this function hello, since there are no parameters you don't need to specify any arguments. When called
  * will return "hello!"
  */
  
 function hello(){
     return "hello!";
 }
 
 //This function will not actively return anything but will add items to an array.
 
 var items = [];
 
 function addArray(string){
     items.push(string);
 }
 
 //calling the function with the argument "beans" will add the string to the items array.
 addArray("beans");
 
 
 //FUNCTION SCOPE
 /* When variables are declared in the global or a parent scope, the variables are available for use to the
  * function without redeclaration. However, when a variable is created within a function, it is not available
  * for reference or use outside of the function.
  */
  
  var coins = 75;
  
  function money(a,b){
      return a + b + coins;
  }
  
  money(25, 50); // will return 150 because the variable coins was created in the global scope and is accessible by the function.
  
  
  //However, variables created within the functionblock are only available for reference inside the function block.
  function groceries(item1, item2){
      var tag = "We need";
      return tag + " " + item1 + " and " + item2;
  }
  
 //console.log(tag); will return UNDEFINED because this variable is not available outside the scope of the function block.
 
 
 
 //FUNCTION CLOSURES
 /*Function closures are necessary at times when the function needs access to a variable it wants to modify but the user
  *doesn't want it to be modified by any other code further along. There is a way to close a variable within a function
  *such that it is available to the function as its parent, but cannot be modified by the global scope.
  */
  
  /*Here is an example where the variable count is available to the function to add onto it but isn't available to 
   *any other code in the global scope. This variable add is set equal to a function that will set the variable count
   *equal to 0 and return a function that adds to it and returns the count to the global scope.
   */
   
  var add = (function () {
     var count = 0;
     return function () {
         count += 2; 
         return count;
     };
    })();
    
    
add();