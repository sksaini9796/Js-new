const user ={
    username: "Saurabh",
    loginCount: 8,
    signedId: true,

    getUserDetails: function(){
        console.log("Got user details from DB")
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User('chai', 11, false);
const userTwo = new User('Saurabh', 12, true);

console.log(userOne);
console.log(userTwo);