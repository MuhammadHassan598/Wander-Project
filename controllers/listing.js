const Listing = require("../models/listing.js");

const mapToken=process.env.OPENCAGE_API_KEY;

const opencage = require('opencage-api-client');

// const geocodingClient =  OpenCageGeocoder{ key: mapToken };


// Rest of your code

module.exports.index = async (req, res) => {
    const allListing = await Listing.find();
    res.render("Listings/index.ejs", { allListing });
}
module.exports.renderNewForm = (req, res) => {
    res.render("Listings/new.ejs");
}
module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const list = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author", }, }).populate("owner");
    if (!list) {
        req.flash("error", "Listing not Found!");
        res.redirect("/listings");
    }
    res.render("Listings/show.ejs", { list });
}
module.exports.createNewListing = async (req, res, next) => {
    let geocodingResponse = await opencage.geocode({ 
        q: req.body.listing.location,
        limit: 1
    });
    let coordinat=geocodingResponse.results[0].geometry;

    let url=req.file.path;
  let filename=req.file.filename;
  
    const newlisting = new Listing(req.body.listing);
    newlisting.image={url,filename};
    
    newlisting.owner = req.user._id;
    newlisting.geometry = {
        type: 'Point',
        coordinates: [
            coordinat.lng,
            coordinat.lat
        ]
    };
    let savelisting=await newlisting.save();
    console.log(savelisting);
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
}

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const list = await Listing.findById(id);
    if (!list) {
        req.flash("error", "Listing not Found!");
        res.redirect("/Listings");
    }
    let orignalImageUrl=list.image.url;
    orignalImageUrl=orignalImageUrl.replace("/upload","/upload/w_250")
    res.render("Listings/edit.ejs", { list ,orignalImageUrl});
}


module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
   let listing= await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if(typeof req.file!=="undefined"){
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
        awaitlisting.save();
    }
    req.flash("success", "Listing Updated Successfuly!");
    res.redirect(`/listings/${id}`);
}
module.exports.deleteListing=async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  }

