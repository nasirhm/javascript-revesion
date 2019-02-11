//Conditional Statements Include If elseif
//if Statement
var name = 'kittens';
if (name == 'puppies') {
  name += ' woof';
} else if (name == 'kittens') {
  name += ' meow';
} else {
  name += '!';
}
 // name == 'kittens meow';

//Loops include for() , while(), do while
//While Loop it works until the statement doesnt get invalid (False)
while (true) {
    // an infinite loop!
  }
  
var input;
do {
    input = get_input();
} while (inputIsNotValid(input));

//For Loop . It works until the statement is true. As the Statement is True it Breaks
for (var i = 0; i < 5; i++) {
    // Will execute 5 times
  
}

for (let value of array) {
    // do something with value
}

for (let property in object) {
    // do something with object property
}

// && and || are short had logic expressions 
var name = o && o.getName();
var name = cachedName || (cachedName = getName());
//JS also has its ternary operator
//Ternary Opertor : Condition:IftrueBlock:ifFalseBlock
var allowed = (age > 18) ? 'yes' : 'no';

//Switch
switch (a) {
    case 1: // fallthrough
    case 2:
      eatIt();
      break;
    default:
      doNothing();
  }

  switch (1 + 3) {
    case 2 + 2:
      yay();
      break;
    default:
      neverhappens();
  }
  