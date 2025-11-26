// //aapan js madhe array ha sq.bracket madhe lihito
// //etha ekach aaray mamdhe multiple tyeps che data store karu shakat like ekach aaray madhe string pan int,flaot etc....

// // const myArr = [0,2,3,4,5]
// //js ka araay resizable hote hain

// //shallow copy and deep copy 
// //js main jabh bhi aap copy operation karenge toh uski shallow copy banti hain 
// //shallow copy : jo bhi ccopy mauiun chaneg karoge woh original array main bhi change hoga
// //deep copy : opp.of shallow 

// //there are two ways of declaring an array 
const myArr = [0,2,3,4,5]
// let myArr2 = new Array(12,3,44,66,78)
// console.log(myArr2[3]);


// //array methods

// myArr.push(6)//adds value
// console.log(myArr);
// //push(),pop(),

// myArr.unshift( 9 )//at staring value la add karata 
// console.log(myArr);
// myArr.shift()//starting value remove karata first index
// console.log(myArr);

// console.log(myArr.includes(9));//aahe ka nahi sangata array madhe
// //tasach indexof konta index aahe te sangata 



// const newArr  = myArr.join();
// //aata etha myArr ha ter arrey aahe pan newArr ha myarr copych aahe pan he string 
// console.log(myArr);
// console.log(newArr);
// console.log();
// console.log(typeof(myArr));//it is an object
// console.log(typeof(newArr));//it is an string 

//these two methods are too popular 1.slice,2.splice

console.log("A ",myArr);//real wala

const myn1 = myArr.slice(1,3)//index 1 la 2 la print kara 3 haa include hot nahi 
console.log(myn1);//slice karun ekda real la print kela
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)//index 1 la 2 la print kara 3 haa include hoto
console.log(myn2);
console.log("C ",myArr);

/*main differce between slice and splice ki slice ha jevdha slice kelay original array madhun toh parat jer durya sobat joint kela ter toh purna aray sobat joint hoto mhanje slice cha original arrya ver pharak nahi padat aani splice madhe jithun tumhi splice kelay na te original array madhun kadhunach taktay mere bhayoooooooooo*/




//kuch bhi kar per kar
fjhbvksdbkjbsf