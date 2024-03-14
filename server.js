const next = require("next");
const http2 = require("node:http2");
const { parse } = require("node:url");

const port = parseInt(process.env.PORT, 10) || 3005;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const server = http2.createServer();
const handler = app.getRequestHandler();

app.prepare().then(() => {
  server.listen(port);
  server.on("error", (err) => console.error(err));
  server.on("request", (req, res) => {
    const parsedUrl = parse(req.url, true);
    handler(req, res, parsedUrl);
  });

  console.log(`Listening HTTP2 on port http://localhost:${port}`);
});
