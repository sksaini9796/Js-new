// Array
 
const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// myArr.unshift(2);
// console.log(myArr);

// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(12));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join();
// console.log(newArr);

// Slice, Splice

console.log("A", myArr);

const nArr1 = myArr.slice(1,3);
console.log(nArr1);
console.log("B", myArr);

const nArr2 = myArr.splice(1,4);
console.log("C", myArr);
console.log(nArr2);
