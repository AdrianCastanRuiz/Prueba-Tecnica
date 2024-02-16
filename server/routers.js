const express = require("express");
const router = express.Router();
const controller = require("./controllers.js");

router.get("/", controller.get);
router.get("/allUsers", controller.getAllUserOnes);
router.post("/", controller.post);

module.exports = router;
