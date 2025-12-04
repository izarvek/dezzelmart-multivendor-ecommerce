const express = require("express");
const userAuth = require("../controllers/user.auth.controllers");

const router = express.Router();

// User Authentication APIs
router.post("/user/register", userAuth.UserRegister);
router.post("/user/login", userAuth.UserLogin);
router.get("/user/logout", userAuth.UserLogout);

module.exports = router;
