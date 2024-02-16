const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const logSchema = new Schema({
  dt: {
    type: Date,
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

const Logs = model("userOne", logSchema, "userOne");

module.exports = Logs;
