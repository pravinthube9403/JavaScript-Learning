//Primitive Data Type

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const number = 100;
const scoreValue = 100.0;

const isLoggedIn = false;

const outSideTemp = null;
let userEmail;

const id = Symbol("123");

const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 523452345462535645n;

//Reference Data Type / Non Primitive

//Array, Objects, functions

const names = ["preqavin", "hitesh", "priyanka"];

const myObj = {
  name: "pravin",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

// all primitive data types typeof is function
// in case of function its object function

// is javscript dynamically typed or statically
//  JavaScript is a dynamically typed language.
// You don’t need to declare variable types (like int, string, bool, etc.).
// The type is determined automatically at runtime
