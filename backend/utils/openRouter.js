// utils/openRouter.js
const axios = require('axios');

const generateQuestions = async ({ targetRole, yearsOfExperience, topicsToFocusOn, description }) => {
  const prompt = `Generate 10 interview questions and answers for a ${targetRole} with ${yearsOfExperience} years of experience.
Focus on: ${topicsToFocusOn}. ${description}. Format the response strictly as a JSON array like this:
[
  { "question": "What is X?", "answer": "X is..." },
  ...
]`;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a expert interview question generator.' },
          { role: 'user', content: prompt }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const content = response.data.choices[0].message.content;

    // Parse JSON output from model
    const parsed = JSON.parse(content);
    return parsed;
  } catch (error) {
    console.error('AI generation error:', error.message);
    throw new Error('Failed to generate questions via OpenRouter');
  }
};

const generateDetailedExplanation = async (prompt) =>{
  try{
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages:[
          { 
            role: 'system',
            content: 'You are an expert technical mentor.'
          },
          {
            role: 'user',
            content: prompt,
          },
          ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response);
    return response.data.choices[0].message.content;
  } catch(err){
    console.error('OpenRouter explanation error:', err.response?.data || err.message);
    throw new Error('Explanation generation failed');
  }
}

module.exports = { generateQuestions , generateDetailedExplanation};
