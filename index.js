const express = require("express");
const fs = require("fs");
const app = express();
const user = require("./MOCK_DATA.json");
const port = 8000;
//middleware
app.use(express.urlencoded({ extended: false }));

// HTML route to display a list of users
app.get("/user", (req, res) => {
  const html = `
              <ul>
              ${user.map((user) => `<li>${user.first_name}</li>`).join("")}
              </ul>
              `;
  res.send(html);
});

// REST API route to get all users
app.get("/api/user", (req, res) => {
  return res.json(user);
});
//TODO: create new user
app.post("/api/user", (req, res) => {
  const body = req.body;
  user.push({ ...body, id: user.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(user), (err, data) => {
    return res.json({ status: "success", id: user.length });
  });
});
//TODO: edit the user with id
app.patch("/api/user/:id", (req, res) => {
  return res.json({ status: "pending" });
});
app.delete("api/user/:id", (req, res) => {
  return res.json({ status: "pending" });
});
// REST API route to get a specific user by ID
app.get("/api/user/:id", (req, res) => {
  const id = Number(req.params.id);
  const foundUser = user.find((user) => user.id === id);

  if (foundUser) {
    return res.json(foundUser);
  } else {
    return res.status(404).json({ error: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`SERVER IS LISTENING AT PORT: ${port}`);
});
