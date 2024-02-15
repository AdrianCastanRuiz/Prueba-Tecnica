const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.MONGO_URL);

let dbUrl =
  "mongodb+srv://UserOne:h42EN6Is3XENRx1H@cluster0.arltgdt.mongodb.net/";

const connectDB = async () => {
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(dbUrl);

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
