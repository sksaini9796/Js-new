const name = "Saurabh";
const repoCount = 50;

console.log(name + repoCount);
 
console.log(`Hello My Name is ${name}`);

// console.log(typeof String);

const gameName = new String ('Trackon');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.indexOf ('k'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-4,5);
console.log(anotherString);
