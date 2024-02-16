const mongoose = require("mongoose");
const Logs = require("./schemas");
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
connectDB();
// Cuando se termina de leer el archivo
rl.on("close", () => {
  const data = jsonArray.map((object) => ({
    dt: object.dt,
    message: object.message,
    host: object.syslog.host,
  }));

  Logs.insertMany(data)
    .then((result) => {
      console.log("Datos insertados exitosamente en la colección 'Logs'");
      console.log(result); // Resultado de la operación de inserción
      console.log("Contenido del archivo JSONL:", data); // Impresión después de la inserción exitosa
    })
    .catch((error) => {
      console.error("Error al insertar los datos:", error);
    })
    .finally(() => {
      // Desconectar la base de datos después de la operación
      disconnectDB();
    });
});
