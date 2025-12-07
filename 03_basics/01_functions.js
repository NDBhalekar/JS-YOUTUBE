// function myname(){
//     console.log("N");
//     console.log("I");
//     console.log("L");
//     console.log("E");
//     console.log("S");
//     console.log("H");

// }
// // myname >>>this is called reference he phakta sangat aahe ki titha aeh function
// // myname()//>>>> this is called execution



// function add(n1,n2){//function create kartana che parameters 
//     // console.log(n1+n2);
    
// }
// // add(5,4);//function call kartanache arguments
// const result = add(5,4)//hi wrong method aahe aasa nhi ikariu sahkat aapan 
// // console.log("Result: ",result);//>>undefined



// function username(user){
//     // return `${user} just logged in`
// }
// // console.log(username("NILESH"));
// // console.log(username());//INTERVIEW : jab aap koi value hi pass nhi karte toh aata hain undefined ,null nhi aata ye dhyan rakkho to user undefined toh nhi hain na kahi ye check karne ke liye if condition use karo



// function username2(user2){
//     if(user2 === undefined){
//         //if(!user2)>>user2 jo ki abhi undefined hain uska ulta kardo
//         console.log("please enter username");
//         return;
//     }
//    return `${user2} just logged in`;
// }
// // console.log(username2());
// //we can also overwrite variables >> aata thah user2 la declare kartanach intialixe karu shakatos aani nanter call kela ki ti value overwrite hote 




// //+++++++++++++++++++++PART-2++++++++++++++++++++++++++++
// //shoppint cards situation jismain user addmkiye jata hain saman ko and hume ye nhi parta hota ki kitne varibals/numbers  aayenge


// function calculatecardprice(n1){
//     return n1;

// }
// console.log(calculatecardprice(200,300,400));//etha ekch value print hoil so etha yeta picture madhe rest opeartor
// //... >>also called spread operators and also called rest opeartors

// function calculatecardprice2(...n1){
//     return n1;

// }
// console.log(calculatecardprice2(200,300,400));

// //INTERVIEW
// function calculatecardprice3(val1,val2,...n1){
//     return n1;

// }
// console.log(calculatecardprice3(200,300,400,500));
// //etha val1 and val2 madhe gele pehle 2 values

//little bit about object
// const user ={
//     username :"nilesh",
//     age:8
// }

// // function handleobject(user)  >>> aasa aapan etha function madhe direct object cha naav det nahi aapn anyobject use karto js madhe mhanje kahihi chalel
// function handleobject(anyobject){
//     console.log(`username is ${anyobject.username} & age is ${anyobject.age}`);
// }
// // handleobject(user);>>aasa direct object denya peksha u can create an object inself while calling function ↓

// handleobject({
//     username :"Bhalekar",
//     age:90
// })


const mynewarray = [200,300,400,500]
function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200,900,400,500]));


