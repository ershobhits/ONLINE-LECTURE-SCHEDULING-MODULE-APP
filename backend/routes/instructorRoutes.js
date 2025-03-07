const express = require("express");
const { getInstructors, addInstructor } = require("../controllers/instructorController");

const router = express.Router();

router.get("/", getInstructors);
router.post("/", addInstructor);

module.exports = router;
