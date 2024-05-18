// Immediately Involked Function Expression (IIFE) 

(function chai(){    // named iife
    console.log("DB Connected");
})();

( () => { 
    console.log(`DB connected two`);
}) ();

( (name) => {
    console.log(`DB connected two ${name}`);
}) ('Saurabh')
