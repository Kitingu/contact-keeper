const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const db = process.env.DATABASE_URL

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log("Mongo db connected ...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
