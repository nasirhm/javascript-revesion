console.log(0.1 + 0.2) // 0.30000000000000004

let r = 5;
console.log(Math.sin(3.5)); // -0.35078322768961984
var circumference = 2 * Math.PI * r
console.log(circumference); // 31.41592653589793

//Base is the Second optional parameter
parseInt('123', 10) //123
parseInt('010', 10) //10

// If 0 is the first landing digit JS would treat it as Octal
// If the first landing characters are 0x JS would treat it as Hexa Decimal
// The Above Cases are in that case if you dont mention the Bases
parseInt('010');  //  8
parseInt('0x10'); // 16

//For Binary the Base is 2
parseInt('11', 2); // 3

//Parse Int and Parse Float always use 10 as the Base

// Unary Operator + can be used to do the same 
+ '42';   // 42
+ '010';  // 10
+ '0x10'; // 16

//NaN is a Special type in JS which means Not a Number
parseInt('hello',10); //NaN
//NaN is ToxiC Reason is Below
NaN + 5; //NaN

//isNaN is a Function in JS to Check weather its NaN or Not
isNaN(NaN); //true
isNaN(5); //false

//Javascript also uses Infinity and -Infinity these are the results of below mentioned expressions:
1 / 0; //  Infinity
-1 / 0; // -Infinity

//isFinite is the Function used to check weather the value is NaN or Infinite or Finite
isFinite(NaN); //false
isFinite(Infinity); //false
isFinite(-1 /0); //false
isFinite(5); //true

//Below is the Demonstration of 3 Statements represnting the work of parseInt, ParseFloat and + (Unary Operator) Parseint and parse float returns the value it converts until it finds a value which can not be converted and + returns NaN the WHole value until it just finds one invalid character.
parseInt('10.2abc'); //10
parseFloat('10.2abc'); //10.2
+ '10.2abc'; //NaN