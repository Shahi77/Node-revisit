const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.end("hello from home page");
});
app.get("/about", (req, res) => {
  return res.end(`Hello ${req.query.name}`);
});

app.listen(3001, () => {
  console.log("Server started");
});
