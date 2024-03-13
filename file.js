const fs = require("fs");

fs.writeFileSync("./test.txt", "Hello There!!");

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

const result = fs.readFileSync("./test.txt", "utf-8");
console.log(result);

//fs.unlinkSync("./test.txt"); //To delete file
console.log(fs.statSync("./test.txt")); // status offile

/*
Async
fs.writeFile("./test.txt", "Hey There!!", (err) => {});
fs.readFile("./test.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(result);
  }
}); */
