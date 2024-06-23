const express = require("express");
const fs = require("fs");
const path = require("path");

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
  let routePath = pathName === "." ? "" : pathName;
  console.log(`/${routePath}`, "routePath");
};

walkDir(PAGE_DIR, CreateRouterForEachPage);

module.exports = pageRouter;
