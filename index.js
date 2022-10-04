#!/usr/bin/env node
const fs = require('fs');
const path = require ("path");
/*function MdLink (ruta) {
  console.log("hola", ruta);
}
MdLink("./readme.md");*/

let inputPath = process.argv [2]
console.log({inputPath});
const pathfixed = path.posix.basename(inputPath);
console.log({pathfixed});
const routeExist = pathfixed => fs.existsSync(pathfixed);
console.log(routeExist(pathfixed))