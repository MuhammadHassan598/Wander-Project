const Review = require("../models/review.js");
const Listing = require("../models/listing.js");


//reviews submitting route
module.exports.submittingReview = async (req, res) => {
    const { id } = req.params;
    const list = await Listing.findById(id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    list.reviews.push(newReview);

    await newReview.save();
    await list.save();
    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${id}`);
}
//reviews delete route
module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
}










