 let a = [1,93,5,6,88]

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

// forEach() is a method of array object in JavaScript.
// a.forEach((value,index,arr)=>{
//     console.log(value,index,arr)
// })

/*Is almost same as writing:
for (let index = 0; index < a.length; index++) {
    let value = a[index];
    let arr = a;
    console.log(value, index, arr);
} */

// 1️⃣ for...in Loop (Used for object keys / property names)
// 🔹 Definition
// for...in iterates over enumerable property names (keys) of an object.
// 🔹 Syntax
// for (let key in object) {
//     // code
// }
// ✅ Example 1: Object

let student = {
    name: "Nilesh",
    age: 19,
    branch: "IT"
};

// for (let key in student) {
//     console.log(key,student[key]);
// }

// forin loop used for objects
// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;//Purpose:It ensures that the loop only processes the object’s own properties,not the properties inherited from its prototype chain.
//     const element = object[key];
// }

// forof loop used for arrays
// for (const element of a) {
//     console.log(element)
// }

