const Questions = require("../models/question");
const { generateDetailedExplanation } = require("../utils/openRouter");

const explainQuestion = async (req, res)=>{
    const { questionId } = req.params;
    
    try{
        const questionDoc = await Questions.findById(questionId).populate("answer");
        if(!questionDoc) return res.status(404).json({ error: 'Question not found'});
    
    if(questionDoc.detailedExplanation){
        return res.status(200).json({
            question: questionDoc.text,
            explanation: questionDoc.detailedExplanation,
            source: 'cached',
        })
    }

    const answerText = questionDoc.answer?.text || 'Not available';

const prompt = `
Question: "${questionDoc.text}"
Answer: "${answerText}"

Explain this answer in-depth using proper technical terminology, relevant concepts, and examples where appropriate.
`;
    const detailedExplanation = await generateDetailedExplanation(prompt);
    questionDoc.detailedExplanation = detailedExplanation;
    await questionDoc.save();
    
    res.status(200).json({
        question: questionDoc.text,
        explanation: detailedExplanation,
        source: 'ai-generated',
    })

    }catch(err){
        console.error('Explanation error:', err.message);
        res.status(500).json({ error: 'Failed to generate explanation'});
    }
}

module.exports = explainQuestion;