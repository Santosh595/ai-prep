const mongoose = require("mongoose");

const interviewSetSchema = new mongoose.Schema({
    targetRole: {
        type: String,
        required: true,
    },
    yearsOfExperience: {
        type: String,
        required: true,
    },
    topicsToFocusOn: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    }]
},{ timestamps: true });

const InterviewSet = mongoose.model('InterviewSet', interviewSetSchema)

module.exports = InterviewSet;