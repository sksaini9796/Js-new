 
var c = 20;
if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Saurabh"

        function two(){
            const website = "Youtube"
            console.log(username);
        }
        // console.log(website);

        // two()
}
// one()

// if (true) {
//     const username = "Saurabh"
//         if(username ==="Saurabh"){
//             const website = " youtube"
//             console.log(username + website);
//         }
//          console.log(website);
// }
// console.log(username);

addone(5)
function addone(num){
    return num+1
}


addtwo(5)
const addtwo = function(num){
    return num +2
}

