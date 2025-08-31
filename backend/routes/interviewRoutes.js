const express = require('express');
const { generateInterviewQA, getInterviewSetById } = require('../controllers/interviewController');
const router = express.Router();


router.post('/generate', generateInterviewQA);
router.get('/:id', getInterviewSetById);

module.exports = router;
