const express = require("express");
const fs = require("fs");
const path = require("path");
const { getPage } = require("./getPage");
import { renderToString } from "react-dom/server";
import React from "react";

const PAGE_DIR = path.join(process.cwd(), "src", "app");
const PAGE_REG = new RegExp("page\\.(jsx|tsx)$");

const pageRouter = express.Router();

const walkDir = (dir, callback) => {
  fs.readdirSync(dir).forEach((fileName) => {
    const fullPath = path.resolve(dir, fileName);
    const stat = fs.lstatSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (stat.isFile()) {
      if (PAGE_REG.test(fileName)) {
        const relativeDir = path.relative(PAGE_DIR, fullPath);
        const dirName = path.dirname(relativeDir);

        callback(dirName);
      }
    }
  });
};

const CreateRouterForEachPage = (pathName) => {
  let routePath = pathName === "." ? "" : pathName.replace("\\", "/");
  console.log(`/${routePath}`, "routerPath");
  pageRouter.get(`/${routePath}`, async function (req, res, next) {
    try {
      const Page = await getPage(routePath ? "/" + routePath : "");
      if (!Page) {
        res.status(404).send(`page not found: ${req.path}`);
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
};

walkDir(PAGE_DIR, CreateRouterForEachPage);

export default pageRouter;
