const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "Instructor", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true }
});

module.exports = mongoose.model("Lecture", lectureSchema);
