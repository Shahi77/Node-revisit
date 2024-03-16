const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 3002;

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

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch("/api/users/:id", (req, res) => {
    //Edit the user with id
    return res.json({ status: pending });
  })
  .delete("/api/users/:id", (req, res) => {
    // Delete the user with id
    return res.json({ status: pending });
  });

app.post("/api/users", (req, res) => {
  // Create new user
  return res.json({ status: pending });
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
