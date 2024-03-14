const fs = require("fs");

// Blocking
console.log("1");
const result = fs.readFileSync("./test.txt", "utf-8");
console.log(result);
console.log("2");

//Non Blocking
console.log("Non Blocking");
console.log("1");
fs.readFile("./test.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(result);
  }
});
console.log("2");
