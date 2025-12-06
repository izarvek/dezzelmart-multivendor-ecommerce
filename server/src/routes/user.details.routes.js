const express = require("express");
const userDetails = require("../controllers/user.details.controllers");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() }); // memory storage
const { UserAuthentication } = require("../middlewares/user.middleware");

const router = express.Router();

// User Authentication APIs
router.put("/user/update/avatar",UserAuthentication,upload.single("avatar"),userDetails.UserUpdateAvatar);
// Accept form-data text fields (no files) or JSON bodies — use upload.none() to parse text fields
router.put("/user/update/detail",UserAuthentication, upload.none(),  userDetails.UserUpdateDetail);

router.get("/user/access/detail",UserAuthentication, upload.none(),  userDetails.UserAccessDetail);

module.exports = router;
