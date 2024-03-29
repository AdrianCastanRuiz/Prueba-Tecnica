const express = require("express");
const { connectDB } = require("./mongo/connection.js");
const cors = require("cors");
const app = express();
const router = require("./routers.js");

app.use(cors());
app.use(express.json());

app.use("/", router);

connectDB().then(() => console.log("Connected to database!"));

const port = 3001;
const server = app.listen(port, () => {
  console.log(`Server is up and running at ${port}`);
});

module.exports = { app, server };
