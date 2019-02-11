//Object initalization
var obj = new Object();
var obj = {};
//Both Statements are ok and the second one is Quite handy

//Declaration
var obj = {
    name: 'Carrot',
    for: 'Max', // 'for' is a reserved word, use '_for' instead.
    details: {
      color: 'orange',
      size: 12
    }
  };

obj.details.color; // orange
obj['details']['size']; // 12

//Use of FUnctions
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Define an object
  var you = new Person('You', 13); 
  // We are creating a new person named "You" aged 13.


// . (Dot) Notation
obj.name = 'Simon';
var name = obj.name;

// bracket notation
obj['name'] = 'Simon';
var name = obj['name'];
// can use a variable to define a key
var user = prompt('what is your key?')
obj[user] = prompt('what is its value?')

obj.for = 'Simon'; // Syntax error, because 'for' is a reserved word
obj['for'] = 'Simon'; // works fine

var a;
//In ES2015
 a={[phoneType]:12345};
//is equal to 
 a[phoneType] = 12345;