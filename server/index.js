const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    if (err) {
      console.error("Error appending to log file:", err);
    }
  });

  switch (req.url) {
    case "/":
      res.end("HomePage");
      break;
    case "/about":
      res.end("Its me");
      break;
    default:
      res.end("404 Not Found");
  }
});

myServer.listen(3001, () => {
  console.log("Server started");
});
