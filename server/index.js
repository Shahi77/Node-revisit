const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} New Req received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    if (err) {
      console.error("Error appending to log file:", err);
    }
  });

  switch (myUrl.pathname) {
    case "/":
      res.end("HomePage");
      break;
    case "/about":
      const username = myUrl.query.myname;
      res.end(`Hi, ${username}`);
      //res.end("My name is Shahi");
      break;
    default:
      res.end("404 Not Found");
  }
});

myServer.listen(3001, () => {
  console.log("Server started");
});
