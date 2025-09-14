const express = require("express");
const userController = require("../controller/userController");
const authenticateUser = require("../middleware/auth");

const router = express.Router();

router.post("/auth/signup", userController.signup);

router.post("/auth/login", userController.login);

router.get("/", authenticateUser, userController.getUsers);

router.patch("/:userId", authenticateUser, userController.updateUser);

router.delete("/:userId", authenticateUser, userController.deleteUser);

module.exports = router;