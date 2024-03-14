// @ts-check

const next = require("next");
const http2 = require("node:http2");
const { parse } = require("node:url");

const port = parseInt(process.env.PORT || "3005", 10);
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev, port });
const server = http2.createServer();
const handler = app.getRequestHandler();

app.prepare().then(() => {
  server.on("error", console.error);
  server.listen({ port }, () => {
    console.log(`Listening HTTP2 on port http://localhost:${port}`);
  });
  server.on("request", (req, res) => {
    const parsedUrl = parse(req.url, true);
    handler(req, res, parsedUrl);
  });
});
