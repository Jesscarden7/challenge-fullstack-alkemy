const express = require("express");
const router = express.Router();

const mainController = require("../apiControllers/mainController");

router.get("/home", mainController.home);

module.exports = router;