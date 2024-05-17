const user = {
    username: "Saurabh",
    coursePrice: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "abc"
// user.welcomeMessage()
// console.log(this);

// function abc(){
//     let username = "xyz"
//     console.log(this.username);
// }
// abc()

// const chai = function(){
//     let username = "xyz"
//     console.log(this.username);
// }
// chai()

// const chai = () =>{
//     let username = "xyz"
//      console.log(this.username);
//  }
//  chai()

//  const addtwo = (num1, num2) => {
//     return num1 + num2     // Explicitely return method
//  }

//  console.log(addtwo(2,4));


 const addtwo = (num1, num2) =>  (num1 + num2)  // implicit return method
 
 console.log(addtwo(2,4));