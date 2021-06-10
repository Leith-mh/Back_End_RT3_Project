// require express
const express = require("express");

//require dotenv
require("dotenv").config();

const connectDB = require("./config/connectDB");

const app = express();

//connect DB
connectDB();

//create Route
app.use("/api/task", require("./Routes/tasks"));

const PORT = process.env.PORT;

app.listen(PORT, (error) =>
  error ? console.log(err) : console.log(`Server is running on port ${PORT}`)
);
