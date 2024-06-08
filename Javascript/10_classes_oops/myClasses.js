class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encrpytPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return`${this.username.toUpperCase()}`
    }
}

// const chai = new user("chai", "abc@gmail.com", "123")
// console.log(chai.encrpytPassword());
// console.log(chai.changeUserName());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;

}

User.prototype.encrpytPassword = function(){
    return `${this.password}abc`
}

const chai1 = new user("chai", "abc@gmail.com", "123")
console.log(chai1.encrpytPassword());