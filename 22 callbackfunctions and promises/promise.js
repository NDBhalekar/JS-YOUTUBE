console.log('This is promises');

let prom1 = new promise((resolve,reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("no random value supported");
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("harry")
            
        }, 3000);
    }
}) 

// jaise hi mere prom1 resolve ho toh prinnt karo voh value jiske saath ye resolve hui hain thike
prom1.then((a) => {
  console.log('a');
}
)