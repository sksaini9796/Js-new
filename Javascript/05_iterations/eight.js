
const myNums =[1, 2, 3, 4, 5]

// const total = myNums.reduce(function (acc, curVal){
//     return acc + curVal
// },0 )
// console.log(total);

const myTotal = myNums.reduce( (acc, curval) => acc + curval, 0)
console.log(myTotal);


let shoppingCart = [
    {
        itemName: "Javascript",
        price: 2999
    },

    {
        itemName: "JPython",
        price: 999
    },

    {
        itemName: "JMobile dev course",
        price: 5999
    },

    {
        itemName: "Data science course",
        price: 12999
    }
]

let priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);