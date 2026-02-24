//console.log("Hello World!");

const http = require("http");

const myserver = http.createServer((req, res) => {
  console.log(req.url, "url");
  if (req.url === "/") {
    res.write("Home Page!");
    res.end();
  } else if (req.url === "/login") {
    res.write("Login Page!");
    res.end();
  } else if (req.url === "/register") {
    res.write("Register Page!");
    res.end();
  } else {
    res.write("Page Not Found!");
    res.end();
  }
});

myserver.listen(8000, () => {
  console.log("Server is running on port 8000");
});