let myDate =  new Date();
console.log(myDate.toString());              // Thu May 16 2024 06:35:27 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());          // Thu May 16 2024
console.log(myDate.toLocaleDateString());    // 5/16/2024
console.log(myDate.toTimeString());          // 06:35:27 GMT+0000 (Coordinated Universal Time)
console.log(myDate.getDate());               // 16
console.log(myDate.toJSON());                // 2024-05-16T06:37:35.810Z
console.log(myDate.toLocaleString());        // 5/16/2024, 6:37:35 AM

 let myTimeStamp = Date.now();

 console.log(myTimeStamp);
 console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()
 newDate.toLocaleString('default', {
    weekday: "long"
 })
 console.log(newDate);