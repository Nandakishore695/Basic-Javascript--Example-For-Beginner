# Basic Javascript Questions and Answer

**1.What is JavaScript?**  
- JavaScript is a client-side scripting language used to create dynamic features for web applications, making them more user-friendly and engaging.(e.g :-clickable buttons, popup menus, etc.)

**2.What is vanilla javascript?**
- Vanilla JavaScript mean pure javaScript code that is written without external libraries or frameworks.
  
**3.How to add JavaScript to html?**

There are three ways to write or add  javascript code are: 

1. Embedding code
2. Inline code
3. External file
   
**4.What are Data Types?**

There are two types of data types in JavaScript:-

| Primitive  | Non-primitive |
| ------------- | ------------- |
| String  | Object |
| Number  | Array |
| Boolean  | RegExp |
| Undefined |  |
| null |  |
| Symbol | | |

- String :- Represents a series of characters.A string can be represented in either single (' ') or double (" ") quotes,  

**5.Difference between “ == “ and “ === “ operators?**

**Both are comparison operators.**

- `Loose equality` operators is used to compare two values and returns true. If they are equal
- `Strict equality` operators is used to compare two values and same-types.

**6.What is the difference between var and let and const?**

- **Var** can be declared as a global or block-scope. so, we can access  from everywhere (inside and outside functions). and with **var** can be redeclared and reassigned value.
- **Let** can be declared as a block-scope. so **let** can be reassigned the value, but they cannot be redeclared. Introduced as part of ES6
- **Const** is a block-scoped, cannot be reassigned or redeclared after initialization.

**7.what is synchronous and asynchronous?**
- Synchronous is single-thread, which means one program will run at a time.
- Asynchronous is multi-thread, which means programs can run in parallel.

**8.What are the string method in javascript and Explain?**

JavaScript provides a variety of string methods that allow you to manipulate and work with strings.

- length 
- concat()
- toUpperCase()
- toLowerCase()
- indexOf()
- trim() 
- charAt()
- replace()
- slice()
- split()

  let str = "Hello, World!";
  
  console.log(str.length);  // Outputs 13
  
  console.log(str.concat("2"));  // Outputs 'Hello World2'
  
  console.log(str.toUpperCase());  // Outputs 'HELLO WORLD'
  
  console.log(str.toLowerCase());  // Outputs 'hello world'

  console.log(str.indexOf("World"));  // Outputs 7
  
  console.log(str.trim());  // Outputs 'Hello, World!'
  
  console.log(str.charAt(1));  // Outputs 'e'

  console.log(str.replace("World", "Universe"));  // Outputs 'Hello, Universe!'

  console.log(str.slice(0, 5));  // Outputs 'Hello'

  console.log(str.split(","));  // Outputs ['apple', 'banana', 'orange']

**9.What are the different events in JavaScript?**

There are many different events in JavaScript are:
| Mouse events | Keyboard events | Form events | Window events|
| ------------- | ------------- | ------------- |  ------------- |
| onclick  | onkeyup | onchange | onload |
| onmouseover  | onkeydown | onfocus | onunload |
| onmouseout  |  | onsubmit | onresize|
|  |  | onblur ||


**10.What is Babel, and why is it used in JavaScript development?**

- Babel is a JavaScript compiler. It is used to convert code from a non-JavaScript language into JavaScript like React code.

**11.What is scope in javascript?**

JavaScript has two different types of scope. 

- **Global-scope:** Variables declared outside of any function become global variables. It can be accessed and modified from any function.
- **Block-scope:** Variables declared inside a function. It cannot be accessed or modified outside of the function.

**12.What is the “spread” operator?**
- The spread operator is a new feature available in ES6. It is denoted by three dots (...). while it can be used to concatenate two arrays and to insert the elements of one array into another array.
```
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(...array1, ...array2); // Expected output: [1, 2, 3, 4, 5, 6]
```

**13.What is the difference between "null" and "undefined" in JavaScript?**
- null and undefined are both special values.
- Null value that represents no value or no object. It is an intentional absence of value. On the other hand,
- Undefined it means that a variable has been declared but has not been assigned a value, it implicitly returns undefined.

**14.Give a the different between comparison between ES5 and ES6?**

| ECMAScript5  | ECMAScript6 |
| ------------- | ------------- |
| ES5 was introduced in 2009  | ES6 was introduced in 2015  |
| ES5 supported by Primitive data types are string, number, Boolean, null, & undefined | ES6 introduced a new primitive data type 'symbol' |
| In ES5 the var keyword is used to declare variables, and it has function-level scope | In ES6, introduced let and const are new ways to define variables. Let has block-level scope, while const is used to declare constants  |
| In ES5, both function and return keywords are used to define a function | An arrow function is a new feature introduced in ES6 by which we don't require the function keyword to define the function  |
| In ES5, there is a use of for loop to iterate over elements | ES6 introduced the concept of for...of loop to perform an iteration over the values of the iterable objects  |

**15.What is function in JavaScript?**
- Basically, a function is a set of statements that performs a specific task and return a value. Functions can take parameters, which act as inputs. Functions are defined using the function keyword, followed by a name and a block of statements enclosed in curly braces Once defined, a function can be invoked by using its name.

**16.What is Callback function?**
- A callback is a function that is passed as an argument to another function, and it's executed after the completion of the main function..
```
function show(sum) {
  alert('i am show function'+sum);
}
function display(num1, num2, myshow) {
  let sum = num1 + num2;
  myshow(sum);
}
display(2, 3, show);
```

**17.What is hoisting?**
- Before the interpreter executes the code in JavaScript is a default behaviour where the function, variable, or class declarations are moved to the top of the scope.
```
console.log(x); // Outputs: undefined
var x = 5;
console.log(x); // Outputs: 5
```
**18.What is closure?**
- A closure is an inner function that can access the outer function variable as well as global variables.
```
const outerFunction = (a) => {
   let b = 10;
   const innerFunction = () => {
      let add = a + b;
      console.log(add);
   }
   return innerFunction;
};
let result = outerFunction (20);
result();
```
**19.Difference in settimeout() and setinterval()?**
- The setTimeout() method is used to call a function after a certain period of time.
- The setInterval() method is used to call a function repeatedly at a specified interval of time.
```
const TimeoutFun = setTimeout(show, 5000);
function show() {
   alert('ok');
}
const element = document.getElementById("demo");
setInterval(function() {element.innerHTML += "Hello"}, 1000);
```
**20.How to convert string to integer in javascript Tutorials?**
- We can convert string to integer number by using "parseInt()" method. 

**21.Why to use "innerHTML" in javascript?**
- For replacing the content in the elements of html.

**22.What is the use of push, pop method in javascript?**
- push method is used for adding new items into an array in the last.
- pop method is used for removing items from an array in the last. 

```
var products = ["TV", "Mobile", "Apparel", "Laptops"];
products.push("MyProduct");
console.log(products); // Expected output: Array ["TV", "Mobile", "Apparel", "Laptops", "MyProduct"]
```
```
var products = ["TV", "Mobile", "Apparel", "Laptops"];
products.pop();
console.log(products); // Expected output: Array ["TV", "Mobile", "Apparel"]
```
**23.What is the use of unshift, shift method in javascript?**
- unshift method works like to "push" method but the items will inserted from the beginning.
- shift method works like to "pop" method but the items removed from the beginning.
```
var products = [1, 2, 3];
products.unshift(4, 5);
console.log(products); // Expected output: Array [4, 5, 1, 2, 3]
```
```
var products = [1, 2, 3];
products.shift();
console.log(products); // Expected output: Array [2, 3]
```

**24.What Variable in javascript?**
- Variable is a container for storing data values. It is declared using the var, let, or const keyword. Variables can hold different types of values, such as numbers, strings, or objects

**25.What is isNaN in JavaScript?**
- isNaN() is a function is used to check whether the given value is an illegal number or not. If it returns true, the value is a Not a number. Else returns false. It value is a number.

**26.What is the difference between slice and splice?**

slice() and splice() methods are used widely for array manipulations. 

**Slice() Method:**
- Slice method is used to create a new array from the original array. It takes two arguments the starting index, indicat where to begin the slice, and the ending index is not included in the slice array.

**Splice() Method:**
- Splice method is used to add or remove items from the original array. It takes n number of arguments the starting index, indicat where the modification should begin, and the number of elements to be removed. Additionally, you can include optional arguments to specify new elements to be add.

**27.What is this keyword in JavaScript?**
- This keyword refers to the current windows object. 

**28.What are some of the built-in methods in JavaScript?**

JavaScript provides a variety of built-in methods are:
| String Methods | Array Methods | Number Methods | Math Methods| Date Methods| Function Methods|
| ------------- | ------------- | ------------- |  ------------- |------------- |------------- |
| charAt()  | push() | toFixed() | Math.random() |getDate()|bind()|
| concat()  | pop()   |parseInt()|Math.floor()| getMonth()|apply()|
|toLowerCase()|unshift()| parseFloat()|Math.round()|getFullYear()|call()|
|toUpperCase()|shift()||Math.ceil()|getHours()|
|length()   |slice()|||getMinutes()|
||splice()   |||getSeconds()|

**29.Difference between Client-side JavaScript and Server-side JavaScript?**

**Client-side:**
- Code is executed on the user's web browser like HTML, CSS, and JavaScript.
- Primarily responsible for the user interface and user experience
- It handles form validating, animations
- Code is visible and accessible to users
- Use local storage and cookies

**Server-side:**
- Code is executed on the server such as PHP, Python, Ruby, Java, and Node.js
- Interacts with databases, it is responsible for processing requests, managing user authentication,
- Code is not visible to users

**30. Difference between map and foreach?**

Both are array methods that are used to iterate the elements of the array.
- map() method will return a new array
- forEach() method will not return anything and returns undefined.

**31.What is loop and how many types of loops What is the difference between for... of and for... in javascript?**

Loops are used to repeatedly execute a block of code until a condition true.

**It has 5 types of loops are:**
- for loop
- while loop
- do while loop
- for in loop
- for of loop

**For in loop** is use when you want to go through the properties of an object.
```
var animal = {name: "tiger", leg: 4};
for(let key in animal){
   console.log(key) // Expected output: name, leg
   console.log(key, animal[key]) // Expected output: name tiger, leg 4
}
```
**For of loop** is use when you want to go through each item in a collection.
```
var person = ["Nandakishore", Naveen, Bajrang];
for(let index of person){
   console.log(index) // Expected output: 0, 1, 2
   console.log(index, person[index]) // Expected output: 0 Nandakishore, 1 Naveen, 2 Bajrang
}
```
**32.What is callback hell?**
- Callback hell mean inside a function multiple nested callback

**33.What are Promises?**
- A promise is an object that may produce a single value in the future, either resolved with a value or rejected with a reason (error). Promises are in three states:

**Pending**

**Fulfilled**

**Rejected**
```
var result = new Promise(function(resolve,reject){
	var bool = true;
	If(bool){
	   resolve(“it is true”);
	}
	else{ 
	   reject(“it’s false”);
}
)
console.log(result);
result.then(function(value){ console.log(value);})
      .catch(function(value){ console.log(value);})
```
**34.What are the possible ways to create objects?**
- Object is a collection of elements, in the form of properties and methods
  
**i.Object literal syntax:**
```
var object = {
     name: "Sudheer",
     age: 34
};
```
**ii.Using new keyword with object constructor**
```
var object = new Object();
```
**iii..Using new keyword with a constructor function**
```
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person1 = new Person("John", 30);
```
**iv.Objec.create() Method**
```
const myPrototype = { x: 10, y: 20 };
const myObject = Object.create(myPrototype); 
```
**v.Classes**

**35.Different between Transpiler and Compiler?**
- A transpiler is a tool that converts source code from one high-level programming language(jsx) to angother high-level programming language(Javaascript)
- A compiler is a tool that converts high-level programming language(java) into a lower-level language(machine code or bytecode)

**36.What is Parameter, Argument and Rest Parameter?**
- A parameter is a variable listed in the function declaration
- An argument is the actual value that is passed into the function when it is invoked
- It is represented by three dots (...) followed by a parameter name. 
```
function add(a, b) {
  // 'a' and 'b' are parameters
  return a + b;
}
let result = add(3, 5); // '3' and '5' are argument

function sum(...numbers) {
  // 'numbers' is a rest parameter
  return numbers.reduce((total, num) => total + num, 0);
}

let result = sum(1, 2, 3, 4, 5);
```
**37.What is template literal in ES6 Version?**
- ES6 introduce later versions of JavaScript, called backticks (``) template literal.
- New way to define strings. Template literals have some advantages over traditional string literals enclosed in single or double quotes.
```
//Traditional way
let name = "John";
let greeting = "Hello, " + name + "!";
let multiLineString = "name: \n Hello\n name "; //for line breaks:'\n'
let stringWithQuotes = "This is a string with single 'quotes' and double \"quotes\".";


//New way
let name = "John";
let greeting = `Hello, ${name}!`;
let multiLineString = `Line 1
Line 2
Line 3`;
let stringWithQuotes = `This is a string with single 'quotes' and double "quotes".`;
```
**38.Different between `IF/ELSE` vs `Switch`?**
- Both If-else and Switch both are use excuite the conditional the main difference between is if-else statement is executed based on the multiple condition like using logical operator. On the other and switch statements execute as per the user decision.
  
**39.What is the use of using strict mode?**
- Strict mode is a feature that was introduced in ECMAScript 5 to help developers write and maintainable code by catching common mistakes and preventing the certain error
```
<script>
"use strict";
function myFunction(a,a) { //show error duplicate defined a parameter
     add = a + 10; // add is not defined at myFunction
     console.log(add)
}
myFunction(5,5)
<script>
```
**40.What is the different between `Arrow function` and `Normal function`?**
**41.Explain about loops with different?**
