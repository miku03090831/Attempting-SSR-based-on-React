const express = require("express");
const App = require("./app.jsx");
const ReactDom = require("react-dom/server");
const React = require('react')

const server = express();
server.use(express.static('.'))
server.get("/", function (req, res, next) {
  const elementString = ReactDom.renderToString(<App />);
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>my react ssr</title>
  </head>
  <body>
      <div id="root">
         ${elementString}
      </div>
  </body>
  </html>
  <script type="text/javascript"  src="index.js"></script>`;
  res.send(html);
});

server.listen(8080);
