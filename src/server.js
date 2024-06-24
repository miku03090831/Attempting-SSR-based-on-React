const express = require("express");
const pageRouter = require('./router/createPageRouter').default

const server = express();
server.use(express.static("."));
server.use(pageRouter)
// server.get("/", function (req, res, next) {
//   const elementString = ReactDom.renderToString(<App />);
//   console.log(elementString)
//   const html = `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <title>my react ssr</title>
//   </head>
//   <body>
//       <div id="root">${elementString}</div>
//       <script type="module" src="./dist/index.bundle.js"></script>
//   </body>
//   </html>`;
//   res.send(html);
// });



server.listen(8080);
