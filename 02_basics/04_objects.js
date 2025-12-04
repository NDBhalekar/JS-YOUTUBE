// const tinderuser = new Object();//ye wala and niche wala sam hi hain bus ye first wala ek singleton object hain and niche wala non-singelton object hain >>o/p>> {}
// // // const tinderuser = {}//aasa pan aapan object create karu shakato  >>>> o/p >> {}
// tinderuser.id = "123qw"
// tinderuser.name ="sammy"
// tinderuser.isLoggedIn=false

// // console.log(tinderuser);

// //apn nested objects pan create karu shakto kithi object madhe objects
// const regularuser = {
//     email :"google@com",
//     fullName :{
//         userFullName:{
//             firstName:"Nilesh",
//             LastName : "Bhalekar"
//         }
//     }
   
// }
// // console.log(regularuser);console.log();
// // console.log(regularuser.fullName);console.log();
// // console.log(regularuser.fullName.userFullName.firstName)

// //to merge/concat two objects
// const obj1 ={1:"a",2:"b",3:"c"}
// const obj2 = {4:"d",5:"e"}
// //m-1
// // const obj3 = {obj1,obj2};//=>obje madhe object banla concat zala nahi 
// // console.log(obj3);

// // m-2
// // const obj3 = Object.assign({},obj1,obj2)//don object lamerge karnya sathi >>object.assign() use kartat and tyach madhe empty curly braces dila ter chngla rahata usually detatach
// // //that curley braces called {}>> empty array
// // //ka detat empty array karaan ki assign cha syntax kasa aahe ki je kahi assingn karun objects dilet te sagle !st object madhe concate hotil mhanun aapan empty array deto >> tya pahilya empty obje/array la mhantat target and bakiche sagle source
// // console.log(obj3);

// // m3 >> spread method >>glass example
// const obj3 = {...obj1,...obj2}
// // console.log(obj3);

// //jabh bhi database value aati hain tab array of objects aayega

// const users =[
//     {
//         id:1,
//         email:"njiu@gmail.com"

// },
// {
//     id2:23,
//     email2:"tygvuh@gmail.com"
// },
// ]

// console.log(tinderuser);
// //objects la array banavnya sathi 

// console.log(Object.keys(tinderuser));//Object.keys >> obje ki sari keys de do mujhe 
// //abb is per loop laga sakte hain  
// console.log(Object.values(tinderuser));//same for values
// console.log(Object.entries(tinderuser));//array ke aander aaary milega key-value pair ki 

// //kahi veles kay hota ki ekdhi value naste array madhe tri aaapn tyala access karaych aprayatn akela ter mang crash hou sshakta mhanun ti value aahe ka nahi check karnya sathi aapn ↓ aasa kasrto
// console.log(tinderuser.hasOwnProperty('isLoggedIn'));


/*++++++++++++++++====PART-2====++++++++++++++++++++ */
//DESTRUCTURING 
const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh sir"
}

//console.log(course.price);//console.log(course.courseInstructor); >>he  pan use karta yeta pan multiple time printkaraych aaasan ter problem hoto mhanun ↓

const {coursename}= course //const{kya print karna hain} = kahan se lekar print karna hain 
console.log(coursename);

// we can change the value name as well if it is little bit heavy like given below
const {courseInstructor:instructor}= course
console.log(instructor);
//these a phenonmenon is called DESTRUCTURING
//it is mostly used in Reactjs

//{} >>> he curly braces mhanjech json hoy pan hya madhe keys and value donihi stringch rahatat 
// {
//     "name":"Hitesh sir",
//     "class":"free"

// }

//kahi veles aaplyala APIs array cha form madhe pan bhetatat like
[
    {},
    {},
    {}
]





