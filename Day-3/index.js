import express from "express";

const app = express();

app.use(express.json());

 const userList = [
  {id: 1, name: "john", email: "john.@example.com"},
  {id: 2, name: "Alice", email: "alice.@example.com"},
];


app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/get-users", (req, res) => {
  res.json({users : userList});
});

app.post("/add-user", (req, res) => {
  console.log(req.body);
  userList.push(req.body);
  res.json({ message: "User added successfully", user:userList });
});


app.put("/update-user/:id", (req, res) => {
  console.log(req.params.id);
  const userId = parseInt(req.params.id);

  const userIndex = userList.findIndex((user) => user.id === userId);

  console.log(userIndex, "userIndex 2");

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  } else {
    userList[userIndex] = { id: userId, name: req.body.name };
  }
  res.json({
    users: userList,
    message: `User with id ${req.params.id} updated successfully`,
  });
});


app.delete("/delete-user", (req, res) => {
  console.log(req.query.user);
  const userId = parseInt(req.query.user);

  const userIndex = userList.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  } else {
    userList.splice(userIndex, 1);
  }
  res.json({ message: "User deleted successfully", users: userList });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});