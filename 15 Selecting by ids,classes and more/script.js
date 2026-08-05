console.log("Hello World")
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// for choosing perticular id
// document.getElementById("red").style.backgroundColor ="green"

// class wlaya madhe >> elements aasata  >> getElementsByClassName
// ID wlaya madhe >> element aasata  >> getElementById


// document.querySelector(".box") >> ye slect karega pehla box jismain class .box hogi >>it works only for 1st class 
document.querySelector(".box").style.backgroundColor = "red"

// document.querySelectorAll(".box").style.backgroundColor: it returns list of nodes i.e.NodeList,ie.ek array return karta ter hyancha saglya element la color denaya sathi for loop laun kaam hoil
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "red"
})

// document.getElementsByTagName("tag_name") >> givs all tag

// matches
// konti class match karte ka
// let e = document.GeEBTN
// undefined
// let e = document.getElementsByTagName("div")
// undefined
// e = document.getElementsByTagName("div")
// HTMLCollection(7) [div.container, div.box, div.box, div#red.box, div#redb.box, div.box, div.box, red: div#red.box, redb: div#redb.box]
// e[4].matches("#redb")
// true

// closest:mhanje sarvat closet kon match karta ka te return karel,swatala check karel nanter p[arent kasa jail nanter tyach aprent kasa and so on 

// e = document.getElementsByTagName("div")
// HTMLCollection(7) [div.container, div.box, div.box, div#red.box, div#redbox.box, div.box, div.box, red: div#red.box, redbox: div#redbox.box]
// e[3].closest(".container")

// // containes: eg.if element a ke aander element b aahe ter true else false
// e = document.getElementsByTagName("div")
// HTMLCollection(7) [div.container, div.box, div.box, div#red.box, div#redbox.box, div.box, div.box, red: div#red.box, redbox: div#redbox.box]
// document.querySelector(".container").contains(e[2])
// true
