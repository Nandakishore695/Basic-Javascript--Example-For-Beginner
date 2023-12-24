# Basic Javascript Questions and Answer

**1.What is JavaScript?** 
- JavaScript is a client-side scripting language used to create dynamic features for web applications, making them more user-friendly and engaging.(e.g :-clickable buttons, popup menus, etc.)

**2.How to add JavaScript to html?**

There are three ways to write or add  javascript code are: 

1. Embedding code
2. Inline code
3. External file
   
**3.What are Data Types?**

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

**4.Difference between “ == “ and “ === “ operators?**

**Both are comparison operators.**

- Loose equality operators is used to compare two values and returns true. If they are equal
- Strict equality operators is used to compare two values and same-types.

**5.What is the difference between var and let and const?**

- **Var** can be declared as a global or block-scope. so, we can access  from everywhere (inside and outside functions). and with **var** can be redeclared and reassigned value.
- **Let** can be declared as a block-scope. so **let** can be reassigned the value, but they cannot be redeclared. Introduced as part of ES6
- **Const** is a block-scoped, cannot be reassigned or redeclared after initialization.

**6.what is synchronous and asynchronous?**
- Synchronous is single-thread, which means one program will run at a time.
- Asynchronous is multi-thread, which means programs can run in parallel.

**7.What are the string method in javascript and Explain?**

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

**8.What are the different events in JavaScript?**

There are many different events in JavaScript are:
| Mouse events | Keyboard events | Form events | Window events|
| ------------- | ------------- | ------------- |  ------------- |
| onclick  | onkeyup | onchange | onload |
| onmouseover  | onkeydown | onfocus | onunload |
| onmouseout  |  | onsubmit | onresize|
|  |  | onblur ||


**9.What is Babel, and why is it used in JavaScript development?**

- Babel is a JavaScript compiler. It is used to convert code from a non-JavaScript language into JavaScript like React code.

**10.What is scope in javascript?**

JavaScript has two different types of scope. 

- **Global-scope:** Variables declared outside of any function become global variables. It can be accessed and modified from any function.
- **Block-scope:** Variables declared inside a function. It cannot be accessed or modified outside of the function.

**11.What is the “spread” operator?**
- The spread operator is a new feature available in ES6. It is denoted by three dots (...). while it can be used to concatenate two arrays and to insert the elements of one array into another array.

**12.What is the difference between "null" and "undefined" in JavaScript?**
- null and undefined are both special values.
- Null value that represents no value or no object. It is an intentional absence of value. On the other hand,
- Undefined it means that a variable has been declared but has not been assigned a value, it implicitly returns undefined.

**13.Give a the different between comparison between ES5 and ES6?**

| ECMAScript5  | ECMAScript6 |
| ------------- | ------------- |
| ES5 was introduced in 2009  | ES6 was introduced in 2015  |
| ES5 supported by Primitive data types are string, number, Boolean, null, & undefined | ES6 introduced a new primitive data type 'symbol' |
| In ES5 the var keyword is used to declare variables, and it has function-level scope | In ES6, let and const are new ways to define variables. Let has block-level scope, while const is used to declare constants  |
| In ES5, both function and return keywords are used to define a function | An arrow function is a new feature introduced in ES6 by which we don't require the function keyword to define the function  |
| In ES5, there is a use of for loop to iterate over elements | ES6 introduced the concept of for...of loop to perform an iteration over the values of the iterable objects  |

**14.What is function in JavaScript?**
- Basically, a function is a set of statements that performs a specific task and return a value. Functions can take parameters, which act as inputs. Functions are defined using the function keyword, followed by a name and a block of statements enclosed in curly braces Once defined, a function can be invoked by using its name.

**15.What is Callback function?**
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

**16.What is hoisting?**
- Before the interpreter executes the code in JavaScript is a default behaviour where the function, variable, or class declarations are moved to the top of the scope.
```
console.log(x); // Outputs: undefined
var x = 5;
console.log(x); // Outputs: 5
```
**17.What is closure?**
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
**18.Difference in settimeout() and setinterval()?**
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
**19.How to convert string to integer in javascript Tutorials?**
- We can convert string to integer number by using "parseInt()" method. 

**20.Why to use "innerHTML" in javascript?**
- For replacing the content in the elements of html.

**21.What is the use of push, pop method in javascript?**
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
**22.What is the use of unshift, shift method in javascript?**
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

**23.What Variable in javascript?**
- Variable is a container for storing data values. It is declared using the var, let, or const keyword. Variables can hold different types of values, such as numbers, strings, or objects

**24.What is isNaN in JavaScript?**
- isNaN() is a function is used to check whether the given value is an illegal number or not. If it returns true, the value is a Not a number. Else returns false. It value is a number.

**25.What is the difference between slice and splice?**

slice() and splice() methods are used widely for array manipulations. 

**Slice() Method:**
- Slice method is used to create a new array from the original array. It takes two arguments the starting index, indicat where to begin the slice, and the ending index is not included in the slice array.

**Splice() Method:**
- Splice method is used to add or remove items from the original array. It takes n number of arguments the starting index, indicat where the modification should begin, and the number of elements to be removed. Additionally, you can include optional arguments to specify new elements to be add.

**26.What is this keyword in JavaScript?**
- This keyword refers to the current windows object. 

**27.What are some of the built-in methods in JavaScript?**

JavaScript provides a variety of built-in methods are:
| String Methods | Array Methods | Number Methods | Math Methods| Date Methods| Function Methods|
| ------------- | ------------- | ------------- |  ------------- |------------- |------------- |
| charAt()  | push() | toFixed() | Math.random() |getDate()|bind()|
| concat()  | pop()   |parseInt()|Math.floor()| getMonth()|apply()|
|toLowerCase()|unshift()| parseFloat()|Math.round()|getFullYear()|call()|
|toUpperCase()|shift()||Math.ceil()|getHours()|
|length()   |slice()|||getMinutes()|
||splice()   |||getSeconds()|

**28.Difference between Client-side JavaScript and Server-side JavaScript?**

**Client-side:**
- Code is executed on the user's web browser like HTML, CSS, and JavaScript.
- Primarily responsible for the user interface and user experience
- It handles tasks such as validating form data, executing animations,
- Code is visible and accessible to users,
- May use local storage, cookies

**Server-side:**
- Code is executed on the server. It includes technologies such as PHP, Python, Ruby, Java, and Node.js
- Interacts with databases, it is responsible for processing requests, managing user authentication,
- Code is not visible to users

**29. Difference between map and foreach?**
- map() method will return a new array
- forEach() method will not return anything and returns undefined.

**30.What is loop and how many types of loops in javascript?**

Loop are used to repeatedly execute a block of code until a condition reach.

**It has 5 types of loops are:**
- for loop
- for in loop
- for of loop
- do while loop
- while loop

For of loop is use when you want to go through each item in a collection.

For in loop is use when you want to go loop through the properties of an object.
