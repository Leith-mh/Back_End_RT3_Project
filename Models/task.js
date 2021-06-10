const mongoose = require("mongoose");

const schema = mongoose.schema;

const taskSchema = new schema({
  body: {
    type: String,
    trim: true,
    required: true,
  },
  day: {
    type: String,
    trim: true,
    required: true,
  },
  reminder: { type: Boolean },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("task", taskSchema);
