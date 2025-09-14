const express = require("express");
const orderController = require("../controller/orderController");
const authenticateUser = require("../middleware/auth");

const router = express.Router();

router.post("/", authenticateUser, orderController.addOrder);

router.get("/", authenticateUser, orderController.getOrders);

router.patch("/:orderId", authenticateUser, orderController.updateOrder);

router.delete("/:orderId", authenticateUser, orderController.deleteOrder);

module.exports = router;