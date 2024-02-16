const Logs = require("./schemas");
const { connectDB, disconnectDB } = require("./connection");
const fs = require("fs");
const filePath = "logs.jsonl";

const filterData = (JSON) => {
  if (Array.isArray(JSON) && JSON.length > 0) {
    const data = JSON.map((object) => ({
      dt: object.dt,
      message: object.message,
      host: object.syslog.host,
    }));
    return data;
  } else {
    throw new Error("El parámetro JSON debe ser un array no vacío.");
  }
};

let jsonArray = [];

const rl = require("readline").createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity,
});

rl.on("line", (line) => {
  try {
    jsonArray.push(JSON.parse(line));
  } catch (error) {
    console.error("Error al analizar la línea como JSON:", error);
  }
});
connectDB();
rl.on("close", () => {
  const data = filterData(jsonArray);
  Logs.insertMany(data)
    .then((result) => {
      console.log("Datos insertados exitosamente en la colección 'Logs'");
      console.log(result);
      console.log("Contenido del archivo JSONL:", data);
    })
    .catch((error) => {
      console.error("Error al insertar los datos:", error);
    })
    .finally(() => {
      disconnectDB();
    });
});
