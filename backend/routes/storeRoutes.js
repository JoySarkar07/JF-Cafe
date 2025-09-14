const express = require("express");
const storeController = require("../controller/storeController");
const authenticateUser = require("../middleware/auth");

const router = express.Router();

router.post("/", authenticateUser, storeController.addStore);

router.get("/", storeController.getStore);

router.patch("/:storeId", authenticateUser, storeController.updateStore);

module.exports = router;