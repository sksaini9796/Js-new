
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
        // console.log("Please enter username");
        return
    }

    return `${userName} Just Logged In`
}
// console.log(loginUserMessage("Saurabh"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,600,800));


const user = {
    username: "Saurabh",
    id: 101
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}`);

}
// handleObject(user)

handleObject({
    username: "abc",
    id: 201
})


const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));