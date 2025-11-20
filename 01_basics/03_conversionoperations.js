let score = "33"
console.log(typeof(score));

let valuetonumber = Number(score)//convert string to number but "N" must be capital
console.log(typeof(valuetonumber));


let score2 = "33asd"
console.log(typeof(score2));//it will give that score2  is number but in actual it is not
console.log(score2);//NaN => not a number 

//null => value =>0
//undefined => value => NaN

/*tupe and value
"33"=>33
"33asd"=> NaN
true => 1
false => 0
 
 */

/*to convert from string to number use =>Number
to convert from anotherform to string use =>String
to convert from anotherform to boolean use => Boolean


*/

let isLoggedIn =1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
/* 0 =>false
1=>true
" "=> false
"nilesh"=> true
cl*/








