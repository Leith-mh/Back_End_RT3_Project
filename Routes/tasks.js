const express = require("express");
const router = express.Router();
const { getTasks } = require("../controllers/task");
router.get("/", (res, req) => {
  res.send("hello");
});

module.exports = router;
