const Instructor = require("../models/Instructor");

const getInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.json(instructors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching instructors", error: error.message });
  }
};

const addInstructor = async (req, res) => {
  try {
    const newInstructor = new Instructor(req.body);
    await newInstructor.save();
    res.status(201).json(newInstructor);
  } catch (error) {
    res.status(500).json({ message: "Error adding instructor", error: error.message });
  }
};

module.exports = { getInstructors, addInstructor };
