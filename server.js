// require express
const express = require("express");

//require dotenv
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
app.listen(PORT, (error) =>
  error ? console.log(err) : console.log(`Server is running on port ${PORT}`)
);
