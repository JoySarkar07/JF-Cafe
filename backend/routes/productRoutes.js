const express = require("express");
const productController = require("../controller/productController");
const authenticateUser = require("../middleware/auth");

const router = express.Router();

router.post("/", authenticateUser, productController.addProduct);

router.get("/", productController.getProducts);

router.patch("/:productId", authenticateUser, productController.updateProduct);

router.delete("/:productId", authenticateUser, productController.deleteProduct);

module.exports = router;