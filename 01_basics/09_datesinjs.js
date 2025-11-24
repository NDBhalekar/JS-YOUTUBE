//gap nko sodu dsa madhi bahva gap sodla ki gelas mang te dsa rahi dev raho



//dates
//date is a object in js
let myDate = new Date() // ha tuji aaj chi date sangal hya instance chi
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
console.log();
//date is a object in js
// console.log(typeof(myDate));

//we can create our own date also
let myCreatedDate = new Date(2023,0,24)
//js main month 0 se start hote hain jiase ki uper 23 jan 2023 hain
// console.log(myCreatedDate.toDateString());

//jer time pan print karaycha aasel ter
let myCreatedDate2 = new Date(2026,5,17,5,32,33)
// console.log(myCreatedDate2.toLocaleString());

// let myCreatedDate3 = new Date("2023-01-23")//YY-MM-DD format
let myCreatedDate3 = new Date("01-23-2026")
// console.log(myCreatedDate3);

//time
let myTimeStamp = Date.now()//U can also use new keyword
// console.log(myTimeStamp);//1970 pasun cha time milli second madhi
// console.log(myCreatedDate3.getTime());

// jer hya milli second la second madhe aanycha aasek ter
console.log(Date.now());//he miili deil yala 1000 ni divide kela jer sec ssathi ter te sec ter hoil pan decimal madhe yeil mahnun floor cha uise karaycha
console.log(Math.floor(Date.now()/1000));

//↓he etha time cha pudhana thoda kalala nahi double bagh dusrya creator cha 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})




    