const userEmail =""
if(userEmail){
    console.log(`Got user email`);
}
else {
    console.log(`Don't have user email`);
}

// Falsy Values
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// Truthy Values 

// "0", 'false', " ",  [], {}, function(){}


// Nullish Coalescing Operator (??): null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 20
val1 =  null ?? 10 ?? 15
console.log(val1);


// Terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log(`less then 80`) : console.log(`more than 80`);