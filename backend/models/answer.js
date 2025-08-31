const { Schema, model } = require("mongoose");

const answerSchema = new Schema({
    text:{
        type: String,
        required: true,
    }
},{timestamps: true});

const Answer = model('Answer', answerSchema);

module.exports = Answer;