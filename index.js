#!/usr/bin/env node
//importamos fs y path
const fs = require("fs");
const path = require("path");
const { readFileSync } = require("node:fs");
const { argv } = require("node:process");
function MdLink(ruta) {
  //console.log("hola", ruta);

  //comprabando si las rutas existen
  const routeExist = () => fs.existsSync(ruta);
  console.log(routeExist());

  //comprobamos si es archivo
  const routeType = (source) => {
    if (source.isFile() === true) {
      return true;
    }
    return false;
  };
  //leer archivos de tu ruta principal
  const routeFiles = fs.statSync(ruta);
  console.log("es archivo? " + routeType(routeFiles));
  //console.log(routeIsAFile);
  //HASTA AQUI OK

  //lee los archivos de la ruta relativa
  const dir = fs.readdirSync(ruta, { encoding: "utf8", flag: "r" });
  console.log("estos son los archivos del directorios" + dir);
  console.log(dir);

  //filtro de archivo md
  let array = [];
  function rute(dir) {
    return (array = dir.filter((archivo) => {
      return path.extname(archivo) === ".md";
      //console.log(array);
    }));
  }
  //leer archivos MD
  const arrayMd = rute(dir);
  function readMD(paths) {
    console.log("ejecutando path");
    paths.forEach((element) => {
      const data = fs.readFileSync(element, { encoding: "utf8", flag: "r" });
      console.log("leyendo", data);
    });
  }
  readMD(arrayMd);
  console.log(rute(dir));

  //Existen los links ?
  
}

MdLink("./");
