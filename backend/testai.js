// openrouter-test.js

const axios = require('axios');

// Replace with your actual API key
const API_KEY = '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';

const prompt = "What are some good project ideas using Node.js and React?";

async function askOpenRouter(prompt) {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'mistralai/mistral-7b-instruct', // You can change model
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost',  // Required header
          'X-Title': 'Console Test App',       // Optional
        }
      }
    );

    // Console log the entire response (if needed)
    // console.dir(response.data, { depth: null });

    // Just log the AI reply
    console.log("🤖 AI Reply:", response.data.choices[0].message.content);
  } catch (err) {
    console.error("❌ Error:", err.response?.data || err.message);
  }
}

askOpenRouter(prompt);
