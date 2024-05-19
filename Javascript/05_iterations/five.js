const coding = ["js", "rb", "py", "java", "cpp"]

coding.forEach( function (val){
    // console.log(val);
})

// Arrow function

coding.forEach( (item) => {
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "Js"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item);
})

