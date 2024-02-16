const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const Logs = require("../server/mongo/schemas");

const get = async (req, res) => {
  try {
    const data = await Logs.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllUserOnes = async (req, res) => {
  try {
    const AllData = await Logs.find();
    res.status(200).json(AllData);
  } catch (e) {
    res.status(500).json(e);
  }
};

const post = async (req, res) => {
  try {
    const body = req.body;
    const newUserOne = new Logs(body);
    await newUserOne.save();
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  getAllUserOnes,
  get,
  post,
};
