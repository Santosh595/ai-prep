const express = require("express");
const explainQuestion = require("../controllers/questionController");

const router = express.Router();

router.post("/explain/:questionId",explainQuestion);

module.exports = router;