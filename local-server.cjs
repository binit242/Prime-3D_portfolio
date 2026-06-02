const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = 5173;
const types = {
  ".css": "text/css; charset=utf-8",
  ".enc": "application/octet-stream",
  ".hdr": "application/octet-stream",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".wasm": "application/wasm",
  ".webp": "image/webp",
};

http
  .createServer((request, response) => {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    const relativePath =
      pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
    const filePath = path.resolve(root, relativePath);

    if (!filePath.startsWith(`${root}${path.sep}`)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    fs.stat(filePath, (error, stats) => {
      if (error || !stats.isFile()) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }

      response.writeHead(200, {
        "Content-Type":
          types[path.extname(filePath).toLowerCase()] ||
          "application/octet-stream",
      });
      fs.createReadStream(filePath).pipe(response);
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Portfolio running at http://127.0.0.1:${port}/`);
  });
