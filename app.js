
if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const express = require("express");
const methodOverride = require("method-override");
const mongoose = require('mongoose');
const path = require("path");
const ejsMate = require("ejs-mate");
const app = express();
const ExpressError = require("./utils/ExpressError.js");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const flash = require('connect-flash');
const session = require("express-session");
const MongoStore = require('connect-mongo');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const Listing = require("./models/listing.js");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));



const dbUrl = process.env.ATLASDB_URL;

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret:process.env.SECRET,
  },
  touchAfter:24* 60 * 60,
});
store.on("error",()=>{
console.log("mongo db error",err);
})
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  }
};



app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



main().then(() => {
  console.log("Connected to the database");
}).catch(err => console.error(err));

async function main() {
  
    await mongoose.connect(dbUrl);
}

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

app.get(`/listingsquery`, async (req, res) => {
  let category = req.query.category;
  console.log(category);

  const alllistings = await Listing.find();
  let allListing = [];

  for (let list of alllistings) {
    let categ = list.category;
    for (let i = 0; i < categ.length; i++) {
      if (categ[i] === category) {
        allListing.push(list);
      }
    }
  }

  res.render("Listings/index", { allListing });
});

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  let { statuscode = 500, message = "Something went wrong!" } = err;
  res.status(statuscode).render("Listings/error.ejs", { message });
});

app.listen("8080", () => {
  console.log("Server is listening at 8080");
});
