// asynchronous nature of js
// aata hya khalycha code madhe pehle don execute hoil console madhe and nanter run hoil,last wala and annter settimeout wala he aahe async nature of js,karan ki saglil script run hot rahate jer aasla koni setimeout wala jer aala na ter script mhanta ki tula 2 sec. nanter run hwyachay na hoshil pan mla khalcha run karudet 
console.log("Nilesh is hacker")
console.log("Nick is hecker")

setTimeout(() => {
    console.log("I am inside set TimeOut");
}, 2000);
setTimeout(() => {
    console.log("I am inside setTimeOut-2");
}, 0);


console.log("The End")

// 👉 Your code is **MIX of synchronous + asynchronous**

// # 🔹 Breakdown

// ### ✅ Synchronous (runs immediately, line by line)

// ```javascript
// console.log("Nilesh is hacker")
// console.log("Nick is hecker")
// console.log("The End")
// ```
// 👉 These execute **instantly (sync)**
// ---
// ### ⏳ Asynchronous (runs later via Web APIs)

// ```javascript
// setTimeout(() => {
//     console.log("I am inside set TimeOut");
// }, 2000);

// setTimeout(() => {
//     console.log("I am inside setTimeOut-2");
// }, 0);
// ```
// 👉 These are **async**

// * They go to **Web API / Timer queue**
// * Then come back via **Event Loop**
// # 🔥 Final Output (Important)
// ```text
// Nilesh is hacker
// Nick is hecker
// The End
// I am inside setTimeOut-2
// I am inside set TimeOut
// ``
// ---

// # 🧠 Why this order?

// 👉 Even `setTimeout(..., 0)` is NOT instant
// It waits for **call stack to be empty**

// ---

// ### Flow:

// 1. Sync code runs first ✅
// 2. `setTimeout(0)` queued
// 3. `setTimeout(2000)` waits
// 4. After stack empty → `0ms` executes
// 5. After 2 sec → second executes

// ---

// # 🚀 Final Answer

// 👉 **Code = synchronous + asynchronous (both)**
// 👉 `console.log` → sync
// 👉 `setTimeout` → async

// ---

// # 🔥 Interview Line

// 👉 “JavaScript is single-threaded but uses async via event loop”

// ---

// If you want next 🔥
// 👉 I can explain **Event Loop with diagram (very important concept)**

