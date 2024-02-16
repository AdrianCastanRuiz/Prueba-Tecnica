const mongoose = require("mongoose");
require("dotenv").config();
const URL =
  "mongodb+srv://UserOne:h42EN6Is3XENRx1H@cluster0.arltgdt.mongodb.net/pruebaTecnica?retryWrites=true&w=majority";
// process.env.MONGO_URL ||
// "mongodb+srv://UserOne:h42EN6Is3XENRx1H@cluster0.arltgdt.mongodb.net/";

const connectDB = async () => {
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(URL);
    const mongo = mongoose.connection;
    mongo.on("error", (error) => console.error(error));
  } catch (e) {
    console.log(e);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  connectDB,
  disconnectDB,
};
