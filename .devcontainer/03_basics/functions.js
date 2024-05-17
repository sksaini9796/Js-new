
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("B");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
addTwoNumbers(3,null);

function addTwoNumbers(number1, number2){
    //return number1 + number2
}

 const result = addTwoNumbers(3,5)
// console.log("Result: ", result );

function loginUserMessage(userName){
    if(!userName){
        console.log("Please enter username");
        return
    }

    return `${userName} Just Logged In`
}
// console.log(loginUserMessage("Saurabh"));
console.log(loginUserMessage());

