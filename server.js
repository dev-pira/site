const { createServer } = require("http");
const next = require("next");

const port = 8081;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    req.url = req.url.replace(/\/$/, "");
    if (req.url == "") {
      req.url = "/";
    }
    handle(req, res);
  });

  server.listen(port, (error) => {
    if (error) throw error;
    console.log("Application is running. Have fun!");
  });
});
