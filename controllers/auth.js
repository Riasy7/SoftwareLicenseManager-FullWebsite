const express = require("express");
const signup = require("./signup")
const login = require("./login")
const profile = require("./profile");
const authenticate = require("./authenticate");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.post("/uploadProfilePicture", authenticate, upload.single('profilePicture'), profile.uploadProfilePicture);


module.exports = router;