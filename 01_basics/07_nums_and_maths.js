// const score = 100 //etha js ni assume kela ki he number aahe 
// console.log(score);


// const balance = new Number(400)
// console.log(balance);//he specifically sangal ki mi numberch gheto 

// console.log(balance.toString());//output 400 ch rahil pan te aata string aahe mang aata string che properties us ekaru shakto aapn 
// console.log(balance.toString().length)//length of string

// console.log(balance.toFixed(2))//point madhe ans deil
// console.log();


// const ontherNumber = 123.8966 //yachi round off karun deil value toPrecision jevdha no,tyla pass kelav titha paryant 
// console.log(ontherNumber.toPrecision(4));
// console.log(ontherNumber.toPrecision(3));
// console.log(ontherNumber.toPrecision(2));
// console.log(ontherNumber.toPrecision(1));

// const hundreds = 1000000
// //toLocaleString() =>used to know what no is exactly,or how many zeros are there 
// console.log(hundreds.toLocaleString());//according to us output=> 1,000,000 to convert it in indian ↓
// console.log(hundreds.toLocaleString('en-IN'))

//*****************MATHS********************
 console.log(Math);//Object [Math] {} =>it is an object which too many inbulit properties
// console.log(Math.abs(-4));//absolute value deto je bhi value aahe tyala postive kaurn deto
// console.log(Math.round(4.4));//round off karun deil value
// //jer tumhala control ghyach aaasel ki point madhlyha konti vale tumhala print karaychay te ter ↓

// console.log(Math.ceil(4.2));//ceil mhnaje ceilling mhanje top mhanje top chi value dya 
// //ceil mahnje jer jara sa bhi 4 se jyda hoga toh main aage vali value de dunga 

// //iska opp.floor↓
// console.log(Math.floor(4.9));
// console.log(Math.min(4,5,2,8));//gives min.value in array
// console.log(Math.max(4,5,2,8));

console.log(Math.random());//hamesha 0 and 1 ke bich main random value dega
console.log(Math.random()*10);//ek kontihi random value pahije ter 
console.log((Math.random()*10)+1);//jer kontihi random value pahije pan ti 0 peksha mothi rahava ter 


//aata he verche point madhe value det aahe tyana ekch round off karun value ghenya sathi use kara round,floor,ceil
 console.log(Math.floor((Math.random()*10)+1));//yachi mla floor value dya 

//samj jer ek ludo game banavat aahe ster titha ter value 1 to 6 cha madhech pahje ter tasa lihilya sathi aapan ek min value aani ek max value cha use karato like ↓

const min = 10//itni toh min value chahiye hi chahiyhe 
const max = 20 //lekin iske uper value nhi jani chahiye
// Math.random() * ((max - min + 1)+min)//aataa hela round off karun lihaycha mang point madhe value nahi yenar 
 //+1 for to avoid zero

console.log(Math.floor(Math.random() * (max - min + 1))+min);
//**********MOST IMP ZEHEM MADHI BASUN GHE */










