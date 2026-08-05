/*
document.querySelector(".box").innerHTml
undefined
document.querySelector(".box").innerHTML
'Hey I am Box'
document.querySelector(".container").innerHTML
'\n        <div class="box">Hey I am Box</div>\n    '
document.querySelector(".container").innerText
'Hey I am Box'

document.querySelector(".container")
<div class=​"container">​…​</div>​
document.querySelector(".container").innerHTML
'\n        <div class="box">Hey I am Box</div>\n    '
document.querySelector(".container").outerHTML
'<div class="container">\n        <div class="box">Hey I am Box</div>\n    </div>'
document.querySelector(".container").hidden
false
document.querySelector(".container").hidden = true
true

// we can also change the inner HTML 
document.querySelector(".container").innerHTML = "Hey I am Good"
'Hey I am Good'

document.querySelector(".container").hasAttribute("class")
true

document.querySelector(".box").dataset
DOMStringMap {createdby: 'nilesh'}

.append >> adds element at last
*/