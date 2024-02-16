const express = require("express");
const router = express.Router();
const controller = require("./controllers.js");

router.get("/", controller.getData);
router.get("/filter", controller.getDataFiltered);
router.post("/", controller.postData);

module.exports = router;
