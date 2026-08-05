// creating callback function : callback = function passed inside another function,function ko as variable call kar sakte hain
const callback = (arg) => {
  console.log(arg);
}

const loadScript = (src,callback) => {// a varibale storing functions which src and one callback functions as arguments
  let sc = document.createElement("script")//created sn script tage using createElement and stored in sc
  sc.src = src;//sc variable ko src diya ,jo ki function main pass hua hain woh >> Example loadScript("app.js", callback); 👉 internally: sc.src = "app.js"; 👉 equivalent HTML: <script src="app.js"></script>
  sc.onload = callback("harry")//onload is an event handler that executes when a resource like a script finishes loading successfully,Yes, callback runs after script loads, but only if we pass it as a function, not call it immediately”
  document.head.append(sc)//document.head refers to the <head> section of your HTML page,What is document.head.append() ? 👉 It is a method used to add (insert) elements inside the <head> section 🔸 Simple Meaning document.head.append(element) 👉 means: “Put this element inside <head>” 🔥 Example let sc = document.createElement("script"); sc.src = "app.js"; document.head.append(sc); 👉 Equivalent HTML: <head> <script src="app.js"></script> </head>
}

// function calling
loadScript("https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js",callback);

// but problems comes when >>What is “Pyramid of Doom”? (Callback Hell) 👉 It means too many nested callbacks, forming a pyramid shape 👉 Code becomes hard to read, debug, and maintain

/*setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");

            setTimeout(() => {
                console.log("Step 4");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000); */

// so for solving this problem we use promices



