// forin Loop

const myObj = {
    js : 'javascript',
    cpp: 'C++',
    rb: 'Ruby'
}

for (const key in myObj) {
//    console.log(`${key} for shortcut ${myObj[key]}`);
}

const prg = ["js", "rb", "py", "java"]
for (const key in prg) {
    // console.log(prg[key]);
}

// const map = new Map()
// map.set(`In`, "India")
// map.set(`USA`, `United State of America`)
// map.set(`Fr`, `France`)
// map.set(`In`, "India")

// for (const key in map) {
//     console.log(key);
// }