const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const logSchema = new Schema({
  dt: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  host: {
    type: String,
    required: true,
  },
});

const userOne = model("userOne", logSchema);

module.exports = userOne;
