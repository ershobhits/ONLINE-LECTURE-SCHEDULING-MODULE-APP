const express = require("express");
const { getLectures, addLecture } = require("../controllers/lectureController");

const router = express.Router();

router.get("/", getLectures);
router.post("/", addLecture);

module.exports = router;
