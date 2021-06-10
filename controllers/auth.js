const User = require("../Models/User");


exports.signup = (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Email is taken",
      });
    }
    let newUser=new User({name,email,password})
    newUser.save((err,successs))