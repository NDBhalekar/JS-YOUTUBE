
// User se naam input lena
// readline module import karo
const readline = require('readline');

// Input/output interface setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// User se naam poochho
rl.question("Apna naam daalein: ", function(userName) {
    console.log(`Hello, ${userName}! Welcome to GitHub Codespace.`);
    rl.close(); // Interface close karna zaruri hai
});
