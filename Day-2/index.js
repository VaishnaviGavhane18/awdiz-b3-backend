import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/login", (req, res) => {
  res.send("Login Page");
});

app.get("/about", (req, res) => {
  res.send("about Page");
});

app.get("/register", (req, res) => {
  res.send("register Page");
});


app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
