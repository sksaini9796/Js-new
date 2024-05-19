const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const myNumbers = myNums.map( (num) => num +10 ) 
//  console.log(myNumbers);

const myNumbers = myNums
                .map( (num) => num *10) 
                .map( (num) => num + 2)
                .filter( (num) => num > 40)

 console.log(myNumbers);