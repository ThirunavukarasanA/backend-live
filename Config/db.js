const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

//Connecting DB
mongoose
  .connect("mongodb://127.0.0.1:27017/protfolio")
  .then(() => {
    console.log("Connected to the database successfully");
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
