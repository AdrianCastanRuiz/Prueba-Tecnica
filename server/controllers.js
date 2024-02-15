const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

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
