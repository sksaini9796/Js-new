const marvel_heros = ["Thor", "Ironman", "Spiderman"]

const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros); 

// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const new_One_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_New_Array = new_One_Array.flat(Infinity);
console.log(real_New_Array);


console.log(Array.isArray("Saurabh"));

// console.log(Array.from("Saurabh"));

// console.log(Array.from({name: "Saurabh"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));
