async function getdata(){//async chalt rahnar background madhe
    // simulate getting data from server
return new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve(455);
  }, 3000);
}
)
}

async function main(){
    
    console.log("Loadingn modules");
    console.log("DO something else");
    console.log("Load data");
    let data =await getdata();//await>> etha await lavlya purna function chale paryant ehtach js thambel khacha nahi chalnar 
    
    console.log(data);
    
    console.log("process data");
    console.log("task 2")
}

main()
// data.then((v) => {//it means jab data mil jayega tab chalna ,then ka yahi use hain,jab ho jaye tab
    
//     console.log(data);
    
//     console.log("process data");
//     console.log("task 2")
// }
// )

// promises>> jab koi bhi value run ho jayegi uski value le lena aap mujse,reject hui toh alg ,resolve hue to alg value return karo