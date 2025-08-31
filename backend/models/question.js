const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true,
    },
    answer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer',
    },
    detailedExplanation:{
        type: String,
        default: null,
    },
},{ timestamps: true });

const Questions = mongoose.model('Question', questionSchema);

module.exports = Questions;