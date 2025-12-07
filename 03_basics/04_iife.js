// Immediately Invoked Function Expression (IIFE)
/*
IIFE => mhanje kay ki function la imediate execute karata he jala ratafication real reason is global scope se pollution se problem hoti hain kahi baar toh us global pollution ke variables hain unke hatane ke liye humne IIFE use kiya hain 

*/
// function chai(){
//     console.log(`DB CONNECTED`);
// }
//aata he function la imediate  run karnya sathi aapan function pudha () he lavato jasa ki aapn aata jer chai function call karay cha aassen ter chai la aasa lihito >>chai()  tasach function la fast execute karnya sathi function la eka parenthisis madhe gheun tyach asamor ek parenthisis like>> ()()

(function chai(){
    //isse kahan jata hain named iife and jise name nhi hain woh un-named iife
    console.log(`DB CONNECTED`);
})();
//pan etha jer multiple time tu ()() use kelas ter js la mahiti nasata ki thambaycha kutha mhanun ()() use kela ki semicolon lavnechgarjecah aahe ()();
(function chai2(){
    console.log(`DB CONNECTED Two`);
})();

//we can use arrow function also, even if there is no function name 

( () => {
    console.log(`DB CONNECTED Three`);
} ) ();

// he phakta don bracket aahe tmhanun ghabraych anahi hyala as functionach pahaychay bas 

( (name) => {//function with parameter
    console.log(`DB CONNECTED to ${name}`);
} ) ("nilesh");









