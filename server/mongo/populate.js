const mongoose = require("mongoose");
const userOne = require("./schemas");
const { connectDB, disconnectDB } = require("./connection");
const fs = require("fs");

// Ruta del archivo JSONL
const filePath = "logs.jsonl";

// Array para almacenar los objetos JSON
let jsonArray = [];

// Crea una interfaz de lectura de archivo
const rl = require("readline").createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity,
});

// Lee el archivo línea por línea
rl.on("line", (line) => {
  try {
    // Parsea la línea como un objeto JSON y agrégalo al array
    jsonArray.push(JSON.parse(line));
  } catch (error) {
    console.error("Error al analizar la línea como JSON:", error);
  }
});

// Cuando se termina de leer el archivo
rl.on("close", () => {
  console.log("Contenido del archivo JSONL:", jsonArray);
});
