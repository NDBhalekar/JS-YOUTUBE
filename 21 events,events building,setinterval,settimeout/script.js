let button = document.getElementById("btn")

// there are multiple types of event are there:keyboard event,mouse event ,etc....
// we use event using addEventListene

// button.addEventListener("click",()=>{
//     alert("I was clicked.yayy!!")
// })

// single click
// button.addEventListener("click",()=>{
//     document.querySelector(".box").innerHTML = "<b> Yayy you wre clicked</b> Enjoy your click!!"
// })

// https://chatgpt.com/s/t_69c53b532d388191bbe863fe1532bf7d

// double click
// button.addEventListener("dblclick",()=>{
//     document.querySelector(".box").innerHTML = "<b> Yayy you wre clicked</b> Enjoy your click!!"
// })
// refer mdn  :https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// right click
// button.addEventListener("contextmenu",()=>{
//     alert("Don't right click pls!!")
// })

// keyborad event
// ()>function event(e) ver lagta 
document.addEventListener("keydown",(e)=>{
   console.log(e,e.key,e.keyCode) 
})




