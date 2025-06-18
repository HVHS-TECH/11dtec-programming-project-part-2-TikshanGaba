/****************************
 Name of task: Intro to Functions
 Name: Tikshan
 Date: Term two week three 2025
 Purpose:  Learning functions in javascript
*****************************/

//Variables
let userName;
let userAge;
let userMoney;
/****************************
Main Code
****************************/
// start()
// Runs the program
// Called by the start button
userName ();
userAge ();
userMoney ();
const MINAGE = 0;
const MAXAGE = 100;
/**************************** 
Functions
****************************/
 function start()
 { 
   userName = prompt("What is your name ?")
 if ( !isNaN(userName) || userName == null || userName == "" || userName == " " ){
    userName = prompt("Invalid! You must enter a name")
    // check if user has clicked cancel
 if (userName == null){
   // end the program
   return;
 }
}
   userAge = prompt("Nice name " + userName +" How old are you ?")
 if (userAge == null || userAge == "" || userAge == " " || isNaN(userAge) || userAge < MINAGE || userAge > MAXAGE){
    userAge = prompt("Invalid! You must enter you age between " + MINAGE + " and " + MAXAGE)
 }
 
}