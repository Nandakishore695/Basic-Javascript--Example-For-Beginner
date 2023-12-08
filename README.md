# Basic Javascript Questions and Answer

**1.What is JavaScript?** 
- JavaScript is a client-side scripting language used to create dynamic features for web applications, making them more user-friendly and engaging.(e.g :-clickable buttons, popup menus, etc.)

**2.What are Data Types?**

There are two types of data types in JavaScript:-

**1.Primitive data type**
- String :- Represents a series of characters.A string can be represented in either single (' ') or double (" ") quotes,  
- Number
- Boolean
- Undefined
- null

**2.Non-primitive data type**
- Object
- Array
- RegExp


**3.Difference between “ == “ and “ === “ operators?**

**Both are comparison operators.**

- Loose equality operators is used to compare two values and returns true. If they are equal
- Strict equality operators is used to compare two values and same-types.

**4.what is the difference between var and let and const?**

- **Var** can be declared as a global or block-scope. so, we can access  from everywhere (inside and outside functions). and with **var** can be redeclared and reassigned value.
- **Let** can be declared as a block-scope. so **let** can be reassigned the value, but they cannot be redeclared. Introduced as part of ES6
- **Const** is a block-scoped, cannot be reassigned or redeclared after initialization.

**5.what is synchronous and asynchronous?**
- Synchronous is single-thread, which means one program will run at a time.
- Asynchronous is multi-thread, which means programs can run in parallel.

**6.What are the string method in javascript and Explain?**

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

**7. What are the different events in JavaScript?**

There are many different events in JavaScript.
- **Mouse events:**
  
  1.onclick
  
  2.onmouseover
  
  3.onmouseout
- **Keyboard events:**

  1.onkeyup
  
  2.onkeydown
- **Form events:**
  
  1.onchange
  
  2.onfocus
  
  3.onsubmit
  
  4.onblur
- **Window events:**

  1.onload
  
  2.onunload
  
  3.onresize 

**8.What is Babel, and why is it used in JavaScript development?**

- Babel is a JavaScript compiler. It is used to convert code from a non-JavaScript language into JavaScript like React code.

**9.Give a the different between comparison between ES5 and ES6?**

| ES5  | ES6 |
| ------------- | ------------- |
| ECMAScript which was introduced in 2009  | ECMAScript which was introduced in 2015  |
| Primitive data types are string, Boolean, number, null, and undefined are supported by ES5  | A new primitive data type 'symbol' was introduced. in ES6  |
| Only the var keyword can be used to define variables in ES5.only. which has function-level scope  | In ES5, let and const are two new ways to define variables: let and const. let has block-level scope, while const is used to declare constants  |
| In ES5, both function and return keywords are used to define a function  | An arrow function is a new feature introduced in ES6 by which we don't require the function keyword to define the function  |
| In ES5, there is a use of for loop to iterate over elements | ES6 introduced the concept of for...of loop to perform an iteration over the values of the iterable objects  |



