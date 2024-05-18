// singleton 

const mySym = Symbol("key1");

const JsUser = {
    name: "Saurabh",
    age: 22,
    [mySym]: "myKey1",
    Location: "Gurgaon",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// console.log(typeof(mySym));

// JsUser.email = "xyz@gmail.com";
// console.log(JsUser.email);

// Object.freeze(JsUser);
// JsUser.email = "pqr@gmail.com";

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
