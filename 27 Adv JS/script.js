// spread opr,IIFE,hoisting,desructuring
//IIFE >> imidiate invokes the function
// semicolcon used in IIFE  

async function sleep(){
    return new promise((resolve,reject) => {
      setTimeout(() => {
        resolve(45)
      }, 1000);
    }
    )
}

 // ↓IIFE >> it always asyc function >> it invokes imidiately
// (async function main(){
//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()
//     console.log(b)
// })()

function sum  (a,b,c){
    return a+b+c;
}

(async function main(){
   
    // let [x,y]=[1,5] 
    // console.log(x,y)//x=1,y=5

    // let [x,y,...rest] = [1,5,8,9,23,34,56]//this is called destructuring
    // console.log(x,y,rest);//x=1,y=5,rest = [8,9,23,34,56]

    // same destr on obj
    let obj = {
        a:1,
        b:2,
        c:3
    }
    let {a,b} = obj;//accesing values of a,b used in big objects
    console.log(a,b);
    
    let arr = [1,4,6]
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr))
    
    


})()

// hoisting is just works on var not on let and const