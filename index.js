#!/usr/bin/env node
//importamos fs y path
const fs = require('fs');
const path = require ("path");
/*function MdLink (ruta) {
  console.log("hola", ruta);
}
MdLink("./readme.md");*/

//comprabando si las rutas existen 
let inputPath = process.argv [2]
console.log({inputPath});
const pathfixed = path.posix.basename(inputPath);
console.log({pathfixed});
const routeExist = pathfixed => fs.existsSync(pathfixed);
console.log(routeExist(pathfixed))

//comprobamos si es archivo md
const routeType = (source) => {
  if(source.isFile() === true) {
      return true
  } return false
}
const routeIsAFile = fs.statSync(pathfixed);
console.log(routeType(routeIsAFile))
//console.log(routeIsAFile);

//la ruta es relativa
const file = fs.readFileSync(pathfixed,  {encoding:'utf8', flag:'r'} );
console.log(file);