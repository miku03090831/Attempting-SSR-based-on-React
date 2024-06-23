const express = require("express");
const pageRouter = require('./router/createPageRouter')
import { getPage } from "./utils/router";
import { renderToString } from "react-dom/server";
import React from "react";

const server = express();
server.use(express.static("."));
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

server.get("/about", async function (req, res, next) {
  
  try {
    console.log(req.path, req.params)
    const Page = await getPage(req.path);
    if(!Page){
      res.status(404).send(`page not found: ${req.path}`)
    }
    const pageString = renderToString(<Page />);
    const html = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>my react ssr</title>
        </head>
        <body>
          <div id="root">${pageString}</div>
          <script type='module' src='./dist/index.bundle.js'></script>
        </body>
      </html>`;
    res.send(html);
  } catch (e) {
    console.log(e);
  }
});

server.listen(8080);
