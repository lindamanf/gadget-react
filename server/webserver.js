const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request", handler);
server.listen(3000);
console.log("Server running at http://localhost:3000/");

function handler(req, res) {
  console.log(`url: ${req.url}`);
  switch (req.url) {
    case "/":
      fs.readFile("../public/index.html", "UTF-8", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
      return;
    case "/js/bundle.js":
      fs.readFile("../public/js/bundle.js", "UTF8", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.write(data);
        res.end();
      });
      return;
    case "/favicon.ico":
      fs.readFile("../public/favicon.ico", (err, data) => {
        res.writeHead(200, { "Content-Type": "image/vnd.microsoft.icon" });
        res.write(data);
        res.end();
      });
      return;
    default:
      console.log(`reading error`);
      return;
  }
}
