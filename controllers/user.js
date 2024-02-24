
const User = require("../models/user.js");


module.exports.renderSignUpForm = (req, res) => {
    res.render("users/signup.ejs");

}
module.exports.signUp = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        let newUser = new User({ username, email });
        let registeredUser = await User.register(newUser, password);

        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }

            req.flash("success", "Welcome to Wander");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}


//login route
module.exports.loginForm = (req, res) => {
    res.render("users/login.ejs");

}
module.exports.login = async (req, res) => {

    req.flash("success", "Welcome back to Wander!");
    let redirectUrl = res.locals.redirectUrl || "/listings";

    res.redirect(redirectUrl);

}
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }

        req.flash("success", "you are logged out!");
        res.redirect("/listings");
    });
}
