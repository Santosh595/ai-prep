
const Answer = require('../models/answer');
const InterviewSet = require('../models/interviewSet');
const Questions = require('../models/question');
const { generateQuestions } = require('../utils/openRouter');

exports.generateInterviewQA = async (req, res) => {
  try {
    const { targetRole, yearsOfExperience, topicsToFocusOn, description } = req.body;

    // Step 1: Generate questions + answers from OpenRouter
    const qaList = await generateQuestions({ targetRole, yearsOfExperience, topicsToFocusOn, description });

    // Step 2: Save interview set metadata
    const interviewSet = new InterviewSet({
      targetRole,
      yearsOfExperience,
      topicsToFocusOn,
      description,
      questions: [],
    });

    // Step 3: Save each Q&A pair and push references
    for (const item of qaList) {
      const answer = new Answer({ text: item.answer });
      await answer.save();

      const question = new Questions({
        text: item.question,
        answer: answer._id,
      });
      await question.save();

      interviewSet.questions.push(question._id);
    }

    await interviewSet.save();

    res.status(201).json({
      message: 'Interview questions generated and saved successfully!',
      interviewSetId: interviewSet._id
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong during generation.' });
  }
};

exports.getInterviewSetById = async (req, res) => {
  try {
    const { id } = req.params;

    const set = await InterviewSet.findById(id)
      .populate({
        path: 'questions',
        populate: {
          path: 'answer',
          model: 'Answer',
        },
      });

    if (!set) {
      return res.status(404).json({ message: 'Interview set not found' });
    }

    res.status(200).json(set);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch interview set' });
  }
};
