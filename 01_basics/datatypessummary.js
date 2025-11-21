//ager js ko masster karna hain toh js ke objects master kar lijiye and brower ke jo web events hote hain ye do topic mastermkar lijiye aap js ke master b an gaye 

//1} primitive =>call by value
/**
 there are 7  types : 
 1.string
 2.number,
 3.boolean,
 4.null(empty =>zero nhi empty matlab bilkul kahli ),
 5.undefined(variable declred,memory space declared but valur nhi diya hain abhi usee )
 6.Symbol(kisi bhi value ko unique banane ke liye use hota hain )
 //ager aap do varible main same hi value dete ho symbol ka use karke fir bhi ho different hi hain kyun kin aapne symbol use kiya hain 
 7.BigInt(bohot bade values)
 */
 //symbol eg.
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

/*
2} Non-primitive => call by reference
1.array
2.objects
3.functions


 */
const heros = ["google,isro,military"];

let myObj = {
    number : 123,
    name :"nilesh"
}
 
const myFunction = function(){
    console.log("hello js");
    console.log();
    
    
}

/* 
typeof cha use karun datatpe kay aahe te kalata ter
    undefined => cha datatype => undefined
    NUll => Object
    object => function
    function => objectFunction
*/


//++++++++++++++++++++++++++MEMORY++++++++++++++++++++++++++++++++++
/*There are two types of memory 
1.stack memory for primitive datatypes
    - jabhi stack memory use hoti hain toh jo bhi aapne variable declare kiya hain uska ek copy milta hain aapko
2.heap memory for non-primitive-datatypes
    -jabhi memory heap main use hoti hain toh wahan aapko mil jata hain reference original value ka 

*/
//eg. for stack memory
let myYoutubeName = "nileshbhalekar.com"

let anotherName = myYoutubeName;
anotherName = "nickdotgooglr.com"
console.log(myYoutubeName);
console.log(anotherName);

//for heap memory
 let userOne = {
    email:"zerozero@google.com",
    upi : "user@byl"
 }
 let userTwo = userOne
 userTwo.email = "oneone@google.com"
 console.log(userOne.email);
 console.log(userTwo.email);
 
 





