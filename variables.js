/* The Difference between let, const and var is let is just for the specific block while const and var can be used anywhere after declared const can not be rewritten */
let a;
let name = "Nasir Hussain";

//let
// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
    // myLetVariable is only visible in here
  }
  
  // myLetVariable is *not* visible out here

//const 
const pi = 3.14;
pi = 2; //It will throw an error

//var
var a;
var name = 'Simon'
// myVarVariable *is* visible out here 

for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) { 
    // myVarVariable is visible to the whole function 
  } 
  
  // myVarVariable *is* visible out here

//The Potential Difference between JS and Other Languages is that it doesnot have any such thing as scope as var can be defined and can be used anywhere and in ECMAScript 2015 it introduced const and let block scoped variables.