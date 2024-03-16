const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 3002;

app.use(express.urlencoded({ extended: false })); //Middleware-plugin

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`)}
    </ul>
    `;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.route("/api/users/:id").get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});
//   .patch("/api/users/:id", (req, res) => {
//     //Edit the user with id
//     return res.json({ status: pending });
//   })
//   .delete("/api/users/:id", (req, res) => {
//     // Delete the user with id
//     return res.json({ status: pending });
//   });

app.post("/api/users", (req, res) => {
  // Create new user
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
