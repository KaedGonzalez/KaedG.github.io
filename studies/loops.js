/*
 * LOOPS:
 *
 * Loops are a way for the computer to repeat executing code. It makes code much more efficient and readable. Loops
 * are classified as a for loop, a for in loop, or a while loop. You can use these loops to loop forward or backwards
 * and over many data types, even arrays and objects.
 */
 
 
 
 //1. FOR LOOPS 
 
 /*FOR loops are probably the most common loop, where you must identify a start, stop, and update. Here, the 
  *loop will start at 0, continue unless the incrementer (i), is less than equal to 30, and increase by 1 each iteration.
  */
  
  var countUp = [];
  for (var i = 0; i <= 30; i++){
      countUp.push(i);
  }
  console.log(countUp); //will console.log numbers 0-30 in an array stored in countUp
  
  
  // This loop will do the same thing, but count down from 30 to 0.
   var countDown = [];
  for (var i = 30; i >= 0; i--){
      countDown.push(i);
  }
  console.log(countDown); //will console.log numbers 30-0 in an array stored in countDown
  
  
  
  // FOR-IN LOOPS
  /* For-in loops are used to loop in objects. The loop does a very similar thing but is mostly used to 
   * extract keys, their values, or key/value pairs. It looks slightly different and you MUST use bracket notation
   * when crafting your for-in loop.
   */
   
   //The following takes object tv and loops over it to console both the keys and values to the console
   var tv = {
       year: 2016,
       brand: "Toshiba",
       flatscreen: true,
   };
  
  for (var key in tv){
      console.log(key);
      console.log(tv[key]);
  }
  
  
  
  // LOOPING IN ARRAYS
  
  //To loop in an array, you can evaluate the individual values in their indecies a lot faster. You use a for loop.
  
  var numbers = [1,2,3,4,5,6];
  
  
  //this loop console.logs all the values from the first index to the last 
  for (var i = 0; i < numbers.length; i++){
      console.log(numbers[i]);
  }
  
  //this loop will console.log all the values in the same way but from the last to first.
  for (var i = numbers.length-1; i > -1; i--){
      console.log(numbers[i]);
  }
  
  
  
  //WHILE LOOPS
  /*While loops execute based of if a condition is true. The loop will continue as long as the condition is true 
   *and will stop as soon as it is not. You have to be careful with this loop as without a careful limit, it can crash.
   */
   
   //This will loop over count and console.log 0-9 adding one at a time until the indicator is 10.
   var count = 0;
   while (count < 10){
       console.log(count),
       count++;
   }