
const tinderuser = new Object()

tinderuser.id = "123abc";
tinderuser.name = "Sammy";
tinderuser.isLoggedIn = false;

// console.log(tinderuser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Saurabh",
            lastname: "Saini"
        } 
    }
}
//  console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));

const course ={
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course;
console.log(instructor);