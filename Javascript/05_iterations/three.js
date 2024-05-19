// for of

// ["", "", ""]
// [{}, {}, {}]

const arr  = [1, 2, 3, 4, 5]

for(const num of arr){
    //  console.log(num);
}

const greetings = "Hello world"
for(const greet of greetings){
    // console.log(`each character is ${greet}`);
}

//  Maps

const map = new Map()
map.set(`In`, "India")
map.set(`USA`, `United State of America`)
map.set(`Fr`, `France`)
map.set(`In`, "India")
// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key, value] of map) {
    console.log(key,': ', value);
    
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ': ', value);
// }

