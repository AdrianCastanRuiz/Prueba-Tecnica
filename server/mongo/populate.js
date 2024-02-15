const mongoose = require("mongoose");
const userOne = require("./schemas");
const { connectDB, disconnectDB } = require("./connection");
const fs = require("fs");

// Ruta del archivo JSON
const filePath = "hola.json";
let parsedData;

// Lee el archivo JSON
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }

  try {
    parsedData = JSON.parse(data);
    console.log(data);
  } catch (error) {
    console.error("Error al analizar el archivo JSON:", error);
  }
});

console.log(parsedData);

// connectDB();

// const dataToImport = require("../../logs.json");
// console.log(dataToImport);
// userOne
//   .insertMany(dataToImport2)
//   .then(() => {
//     console.log("Datos importados correctamente");
//     mongoose.connection.close();
//   })
//   .catch((error) => {
//     console.error("Error al importar datos:", error);
//   });

// disconnectDB();
