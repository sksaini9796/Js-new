// let myName = "Saurabh    ";

// console.log(myName.truelength);


let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'Hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.saurabh = function(){
    console.log(`Saurabh is present in all object`);
}

// heroPower.saurabh()
myHeros.saurabh()


const user = {
    name: "Chai",
    email: "abc@google.com"
} 

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let userName = "Chaiaurcode     "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}
userName.truelength()
"Saurabh   ".truelength()