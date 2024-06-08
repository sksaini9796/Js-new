class User{
    constructor(username){
        this.username = username;
    }

    logME(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}
const abc = new User("Saurabh")
// console.log(abc.createId());

class Teacher extends User{
    constructor(username, email){
        super (username)
        this.email = email;
    }
}
const alpha = new Teacher("avq", "ivh@gmail.com")
console.log(alpha.createId())