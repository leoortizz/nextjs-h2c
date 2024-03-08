const next = require("next");
const http2 = require("node:http2");
const { parse } = require("node:url");


const port = parseInt(process.env.PORT, 10) || 3005;
const dev = process.env.NODE_ENV !== "production";

// Init the Next app:
const app = next({ dev });

// Create the secure HTTPS server:
// Don't forget to create the keys for your development
const server = http2.createServer();

const handler = app.getRequestHandler();

app.prepare().then(() => {
  server.on("error", (err) => console.error(err));
  server.on("request", (req, res) => {
    const parsedUrl = parse(req.url, true);
    handler(req, res, parsedUrl);
  });
  server.listen(port);

  console.log(`Listening on HTTP port http://localhost:${port}`);
});
