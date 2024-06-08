
class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

 const abc = new User("xyz@google.com", '1234')  
// console.log(abc.password);
// console.log(abc.email);

/*##########################*/
// Using Function


function User2(email, password){
    this._email = email;
    this._password = password;
Object.defineProperty(this, 'email', {
    get: function(){
        return this._email.toUpperCase()
    },

    set: function(value){
        this._email = value
    }
})

Object.defineProperty(this, 'password', {
    get: function(){
        return this._password.toUpperCase()
    },

    set: function(value){
        this._password = value
    }

})
}

const alpha = new User2("tuv@tata.com", '3456')
// console.log(alpha.email);
// console.log(alpha.password);

/*########################*/


const User3 = {
    _email: "abc@gmail.com",
    password: "4321",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User3)
console.log(tea.email);