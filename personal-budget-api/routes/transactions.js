const express = require("express");
const router = express.Router();

const transactionsController = require("../apiControllers/transactionsController");

router.get("/", transactionsController.list);
router.post("/", transactionsController.store);
router.put("/:id", transactionsController.edit);
router.delete("/", transactionsController.delete);

module.exports = router;