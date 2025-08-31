AI Prep

AI Prep is a full-stack web application that allows users to create topics and generate AI-powered questions and answers for those topics. The app is built with a Node.js backend and a Vite + React frontend.

Features

User authentication with signup and login from the landing page.

Home page shows cards for each topic created by the user.

Button on the home page opens a modal form where you can add a new topic.

When a topic is created, initial questions and answers are generated and shown in a new card.

Clicking on a topic card opens the topic details page.

Topic details page displays the topic heading and description at the top, with an accordion of questions and answers below.

Each question in the accordion has a button to generate a more detailed answer if it doesn’t already exist in the database.

Application Flow

Landing page with signup/login.

Home page with existing topic cards and an option to create a new topic.

Create topic using a form modal → AI generates questions and answers → new card is added.

Topic details page shows topic heading, description, and a list of questions and answers with options to generate more details.

Tech Stack

Frontend: React (Vite), TailwindCSS

Backend: Node.js, Express

Database: (MongoDB)

Authentication: (JWT)

AI API: OpenAI (Open Router)

Getting Started

Clone the repository:

git clone https://github.com/Santosh595/ai-prep.git
cd ai-prep


Install dependencies:

cd backend
npm install

cd ../client
npm install


Run the app:

# Start backend
cd backend
npm start

# Start frontend
cd client
npm run dev

## License

This project is licensed under the [MIT License](./LICENSE) © 2025 Santosh Kumar Kar
