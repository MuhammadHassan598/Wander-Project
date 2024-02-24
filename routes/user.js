const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const{saveRedirectUrl}=require("../middleware.js")
const userController = require("../controllers/user.js")


router.route("/signup").get(userController.renderSignUpForm)
.post(wrapAsync(userController.signUp));


//login route
router.route("/login")
.get(userController.loginForm)
.post( saveRedirectUrl,passport.authenticate('local', { failureRedirect: "/login", failureFlash: true }), wrapAsync(userController.login));

router.get("/logout", userController.logout);

module.exports = router;