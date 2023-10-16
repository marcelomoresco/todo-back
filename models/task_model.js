const e = require("express");
const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [false],
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: String,
    enum: ["high", "medium", "low"],
    default: "medium",
  },
});

module.exports = mongoose.model("Task", taskSchema);
