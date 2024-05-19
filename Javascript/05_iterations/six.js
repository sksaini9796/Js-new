const coding = ["js", "rb", "py", "java", "cpp"]


// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })
// console.log(values);

const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num> 4 )
// console.log(newNums);


// const newNums = myNums.filter( (num) => {
//     return num> 4
// } )
// console.log(newNums);

// const newNums = [] 
// myNums.forEach( (num) => {
//     if(num > 4 ){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 1981,
        edition: 2004
    },

    {
        title: 'Book two', genre: 'History', publish: 1999,
        edition: 2006
    },

    {
        title: 'Book three', genre: 'Science', publish: 1986,
        edition: 1996
    },
];

// const userBooks = books.filter( (bk) => bk.genre === 'History');
// console.log(userBooks);

const userBooks = books.filter( (bk) => bk.publish > 1985 && bk.genre ==='Science');
console.log(userBooks);