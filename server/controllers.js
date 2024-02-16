const Logs = require("../server/mongo/schemas");

const getData = async (req, res) => {
  try {
    const data = await Logs.find();

    res.status(200).json(data);
  } catch (error) {
    // Manejar errores
    res.status(500).json(error);
  }
};
const getDataFiltered = async (req, res) => {
  try {
    const searchString = req.query.search;

    console.log(searchString);

    if (searchString) {
      const data = await Logs.find({
        message: { $regex: searchString, $options: "i" },
      });

      res.status(200).json(data);
    } else {
      res.status(204).json({ message: "No documents found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const postData = async (req, res) => {
  try {
    const body = req.body;
    const newUserOne = new Logs(body);
    await newUserOne.save();
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  getData,
  postData,
  getDataFiltered,
};
