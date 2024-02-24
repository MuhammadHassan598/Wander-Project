const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js")
const multer  = require('multer')
const {storage}=require("../cloudConfig.js")
const upload = multer({ storage })


router.route("/")
.get( wrapAsync(listingController.index))
//creat new listing
.post( isLoggedIn,upload.single("listing[image]"), validateListing,wrapAsync(listingController.createNewListing));

//new listing form render route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
// show rout
.get( wrapAsync(listingController.showListing))
//update route
// edit /update route 2
.put( isLoggedIn, isOwner, upload.single("listing[image]"),validateListing, wrapAsync(listingController.updateListing))

//destroying/delete route
.delete( isLoggedIn, wrapAsync(listingController.deleteListing));

// edit /update route 1
router.get("/:id/edit", isLoggedIn, wrapAsync(listingController.renderEditForm));



module.exports = router;

