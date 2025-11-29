//objects la aaoan don padhatina declare karu shakta 1.ek literal sarkah 2.consrtructor sarkha 
/*singleton:koi bhi constructor jisse aap banate hain toh singleton ek object banta hain yani ki ye apne tarah ka ek hi object hain 

-literal ka use karenge rtoh singleton nhi banega & ager constructor ka use karenge toh singleton banega 

*/
//object literals
//Object.create() aaise karke bhi aapp object bana sakte hain isse constructive way kahan jata hainn aur issi ke ander singleton banta hain 



const JsUser = { 
  //ismain key_value pair strore hote hain 
    name :"NILESH",
    "FullName":"Nilesh Bhalekar",
    roll_no : 23,
    isLive : true,
    lastLoginDays : ["mon","thur"]
  }  
   //object ko kasie access kiya jata hain 
  // console.log(JsUser.name)  //pan hya methond madhe FullName sarkya variable la use karta yet nahi //or ↓
  // console.log(JsUser["name"])//pan etha saangava lagata ki tumcha variable kotya type cha aahe te

  // console.log(JsUser["FullName"]);//hyala aasa lihu shakt nahi aapn console.log("FullName")
  
  

  /*
symbol creation
interview main Q pucha jata hain ki ek key lo usse objects ke keys main add karke  mujhe print karke dikao */

const MySum = Symbol("key1")

//
const JsUser2 = { 
  //ismain key_value pair strore hote hain 
    name :"NILESH",
    [MySum]:"mykey1",//sq.bracket madhich declare kartart symbol la//MySum:"mykey1" >>>he without sq braket chukich aahe he string retuen karel
    "FullName":"Nilesh Bhalekar",
    roll_no : 23,
    isLive : true,
    lastLoginDays : ["mon","thur"]
  }  

  // console.log(JsUser2[MySum]);//hyala aasach access karu shakto ekch method aahe 
  // console.log(typeof(MySum));
  
  //if we wanted to update the values then overwrite them
  JsUser2.name = "Devidas"
  //jer object cha values la konihi change karu naye aasa karaycha asan ter freez ek method aahetyla aapn aasa use akrato 
  // Object.freeze(JsUser2)
  //   JsUser2.name = "Devidas"//aata value update honar nahi
  // // console.log(JsUser2);



  //function la aapan as a variable sarkha use karu shakto bhai
JsUser2.greeting = function(){//function with no parameters
            console.log("Hello JS ");
          
}
// console.log(JsUser2.greeting);//o/p=>[Function (anonymous)]=>function execute nhi hua hain sirf function ka refference aaya hain 
console.log(JsUser2.greeting());//=>Hello JS 



JsUser2.greetingtwo = function(){
  //backtics are used with doller sign and this keyword is used to access object variables
            console.log(`Hello JS User, ${this.name}`);       
}
  
qwertyuikjhgfd


