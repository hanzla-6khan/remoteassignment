const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const authMiddleware = require("../Middleware/authMiddleware");

router.post("/login", authController.login);
router.post("/register", authController.register);

router.get("/protected", authMiddleware.authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
