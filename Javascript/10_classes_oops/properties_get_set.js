function User(email, password){
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

const alpha = new User("tuv@tata.com", '3456')
console.log(alpha.email);
console.log(alpha.password);