/*
for loop 
for in loop
for off loop
foreach
while loop 
do while loop
*/
let obj = {
  name: "harryh",
  role: "progrmmer",
  company: "codeWithharry AI",
};

// forin loop is used on objects
// for (const key in obj) {
//     const element = obj[key];
//    console.log(key,element)
// }

// for keys only
// for (const key in obj) {
//     const element = obj[key];
//    console.log(key)
// }

//for values only
for (const key in obj) {
  const element = obj[key];
  console.log(element);
}

// foroff loop >> iterable data str ver use kela jata eg.on string
// iterative
// for (const element of object) {
// }

for (const c of "Harry") {
  console.log(c); //one by one saglyana print karel
}
