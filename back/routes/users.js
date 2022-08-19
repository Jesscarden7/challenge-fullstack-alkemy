const express = require("express");
const router = express.Router();

const userController = require("../apiControllers/usersController");

router.post("/", userController.register);
router.post("/login", userController.login);

module.exports = router;