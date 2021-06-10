mongoose = require("mongoose");

const connectDB = async () => {
  try {
    let result = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(`Can not connect to the DB ${error}`);
  }
};

module.exports = connectDB;
