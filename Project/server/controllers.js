// const userOne = require("./mongo/schemas.js");

const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

// const logSchema = new Schema({
//   dt: {
//     type: String,
//     required: true,
//   },
//   message: {
//     type: String,
//     required: true,
//   },
//   host: {
//     type: String,
//     required: true,
//   },
// });

const logSchema = new Schema({
  clave: {
    type: String,
    required: true,
  },
});
const userOne = model("userOne", logSchema);

// module.exports = userOne;

const get = async (req, res) => {
  try {
    const data = await userOne.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const post = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  get,
  post,
};
