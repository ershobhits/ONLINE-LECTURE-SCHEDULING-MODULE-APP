const Lecture = require("../models/Lecture");

const getLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find().populate("instructor");
    res.json(lectures);
  } catch (error) {
    res.status(500).json({ message: "Error fetching lectures", error: error.message });
  }
};

const addLecture = async (req, res) => {
  try {
    const newLecture = new Lecture(req.body);
    await newLecture.save();
    res.status(201).json(newLecture);
  } catch (error) {
    res.status(500).json({ message: "Error adding lecture", error: error.message });
  }
};

module.exports = { getLectures, addLecture };
