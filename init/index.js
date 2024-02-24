const mongoose = require('mongoose');
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const mgurl = 'mongodb://127.0.0.1:27017/wanted';

main().then(() => {
  console.log("connect to db");
})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(mgurl);
}

const initdb = async () => {
  await Listing.deleteMany({});
  const newData = initdata.data.map((obj) => ({
    ...obj,
    owner: "65d1e21a6242f0a530b9f7c1"
  }));
  await Listing.insertMany(newData);
  console.log("data saved");
};

initdb();
