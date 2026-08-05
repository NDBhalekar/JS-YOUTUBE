console.log("HELLO WORLD")
// in browser console
// HELLO WORLD

// document.body
// <body>​<div class=​"container">​<div class=​"box">​box1​</div>​<div class=​"box">​box2​</div>​<div class=​"box">​box3​</div>​<div class=​"box">​box4​</div>​<div class=​"box">​box5​</div>​</div>​<script src=​"script.js">​</script>​</body>​
// document.body.childnodes
// undefined
// document.body.childNodes
// NodeList(5) [text, div.container, text, script, text]
// document.body.childNode[1]
// VM582:1 Uncaught TypeError: Cannot read properties of undefined (reading '1')
//     at <anonymous>:1:24
// (anonymous) @ VM582:1Understand this error
// document.body.childNodes[1]
// <div class=​"container">​…​</div>​
// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// let cont = document.body.childNodes[1]
// undefined
// cont
// <div class=​"container">​…​</div>​
// cont.firstChild
// #text
// cont.lastChild
// #text
// cont.firstElement
// undefined
// cont.firstElementChild
// <div class=​"box">​box1​</div>​
// cont.lastElementChild.style.backgroundco
// undefined
// cont.lastElementChild.style.backgroundColor="red"
// 'red'
// cont.lastElementChild.style.color = "blue"
// 'blue'
// cont.lastElementChild.parentElement
// <div class=​"container">​…​</div>​


/*HELLO WORLD
document.body.firstElementChild
<div class=​"container">​…​</div>​
document.body.firstElementChild.childNodes
NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
document.body.firstElementChild.children
HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
document.body.firstElementChild.children[3].nextElementSibling >><div class="box">box5</div> */