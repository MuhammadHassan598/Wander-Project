const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { string } = require("joi");


const listingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: {
    url: String,
    filename: String,
  },
  price: { type: Number },
  location: { type: String },
  country: { type: String }, // Add the country field
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "review",
    }
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number]
  },
  category:[ {
    type: String,
    enum: [
      "Trending",
      "Rooms",
      "Iconic Cities",
      "Mountains",
      "Castles",
      "Amazing Pools",
      "Arctic",
      "Farms",
      "Camping"],
  }
  ]
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
