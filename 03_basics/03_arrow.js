// const user = {//object
//     username:"nilesh",
//     price:999,
//     welcomeMessage:function(){//object ke aander function
//         console.log(`${this.username} , welcome to website`);
        
//     }
// }
// // user.welcomeMessage()
// // user.username ="sam"
// // user.welcomeMessage()

// console.log(this);// o/p => {} =>current context is empty(kyun ki context hi nhi hain ) because we are in node environment but in browser console it gives us window object as a object 
//hyala baherun print kela mahnun empty aala o/p pan tech jer ekdaya functin madhe us ekarun print kela ter vegla yeil o/p

// function chai(){
//     let username = "nilesh"
//     console.log(this.username);//o/p = undefined >>kyun ki hum object ke aander hi this use kar sakte haain functin ke aander nhi  
// }
// chai()
// const chai = function(){
//      let username = "nilesh"
//      console.log(this.username);//o/p = undefined >>kyun ki hum object ke aander hi this use kar sakte haain functin ke aander nhi  

// }

//+++++++++++++++++========== ARROW-FUNCTION ========++++++++++++++++++++

// const chai = function() >>here instead of writing function we use arrow and it is called arrow function
// const chai = () => {
//     let username = "nilesh"
//      console.log(this.username);
// }

//INTERVIEW Q WHAT IS DIFF.B/W FUNCTION AND ARROW FUNCTION 

//basic syntax >> () => {}

    //__explicite return__
// const addTwo =(num1,num2)=>{
//      return num1+num2;
// }
// console.log(addTwo(3,4))
//hyalal aapan aajun eka padhatina lihu shakato i.e. __implecite return__>> jo ki sirf ek line main code ho toh use kiya jata hain 

// const addTwo = (num1,num2) => num1+num2 //no curley braces no return >>curkey braces use kela ter return keyword lihavach lagan 
// console.log(addTwo(3,4))
//ager hume ismian object return karna ho implicite main toh ↓

// const addTwo = (num1,num2) => {username:"nilesh"}
// console.log(addTwo(3,4))//o/p>>undefined >> kyun ki iss tarah se hum object retrun hi nhi kar sakte  uske liye aapko PARENTHISIS lagana hi padega mhaun parenthisis lavaychi saway changli  

const addTwo = (num1,num2) => ({username:"nilesh"})
console.log(addTwo(3,4))

