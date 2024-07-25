const express = require("express");
const router = express.Router();
const authcontrolllers = require("../Controllers/auth.controller");


router.route("/").post(authcontrolllers.home)

router.route("/register").post(authcontrolllers.register)
    

module.exports = router;