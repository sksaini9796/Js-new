// Primitive-
// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = "100";
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 2345678987665432n;


/* JavaScript is a dynamically typed language, 
   which means that data types of variables are determined by the value 
   they hold at runtime and can change throughout the program as we assign different values to them. */

// Non primitive (Reference)
// Array, Objects,  Functions


const heros = ["abc", "rps", "xyz"];

let myObj = {
    name: "Saurabh",
    age: 22
}

const myFuntion = function(){
    console.log("Hello Wolrd");
}

console.log(typeof anotherId);

let user1 = {
    userEmail : "user@google.com",
    upi : "user@ybl",
}

