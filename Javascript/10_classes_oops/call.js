function SetUserNAme(username){
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){

    SetUserNAme.call(this, username)
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "abc@fb.com", "1234")
console.log(chai);
