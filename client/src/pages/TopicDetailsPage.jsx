import React, { useState } from 'react';
import AnswerDetailSection from '../components/answerdetails/AnswerDetailSection';
import Navbar from '../components/navbar/Navbar';
import AccordionItem from '../components/accordion/AccordionItem';
 // New component for right panel

// Dummy data for questions and answers related to a specific role
// In a real app, this would be fetched based on the selected card's targetRole/topics
const dummyQuestions = {
  "Frontend Developer": [
    {
      id: 'fe1',
      question: "Explain the event loop in JavaScript.",
      answer: "The event loop is a fundamental concept in JavaScript that handles asynchronous callbacks. It continuously checks the message queue for tasks to execute after the call stack is empty. This non-blocking behavior is crucial for web browsers and Node.js.",
      aiExplanation: "The event loop is crucial for understanding how JavaScript handles asynchronous operations like `setTimeout`, `fetch`, and user events. It ensures that the main thread (where your JavaScript code runs) doesn't get blocked while waiting for long-running operations to complete. When an asynchronous operation finishes, its callback is placed in a 'message queue'. The event loop's job is to constantly check if the 'call stack' (where synchronous code executes) is empty. If it is, the event loop takes the first callback from the message queue and pushes it onto the call stack to be executed. This continuous cycle allows JavaScript to appear 'multi-threaded' even though it's single-threaded, enabling smooth user interfaces and efficient server-side operations."
    },
    {
      id: 'fe2',
      question: "What is the virtual DOM in React?",
      answer: "The Virtual DOM (VDOM) is a lightweight copy of the actual DOM. React uses it to improve performance by first updating the VDOM, comparing it with the previous VDOM, and then only updating the real DOM where changes occurred. This process is called reconciliation.",
      aiExplanation: "The Virtual DOM is a core optimization in React. Instead of directly manipulating the browser's slow and expensive real DOM, React creates a virtual representation of the UI in memory. When state or props change, React builds a new Virtual DOM tree and efficiently 'diffs' it against the previous one. Finally, React applies only these necessary updates to the actual DOM, minimizing costly reflows and repaints. This declarative approach simplifies UI development and leads to highly performant applications."
    },
    {
      id: 'fe3',
      question: "Differentiate between 'let', 'const', and 'var'.",
      answer: "'var' is function-scoped and hoisted. 'let' is block-scoped and not hoisted (but initialized with 'undefined'). 'const' is block-scoped, not hoisted, and must be initialized, and its value cannot be reassigned.",
      aiExplanation: "Understanding 'var', 'let', and 'const' is fundamental to modern JavaScript. 'var' has function scope, meaning it's accessible throughout the function it's declared in, and it's 'hoisted' (its declaration is moved to the top of its scope). This can lead to unexpected behavior. 'let' and 'const' were introduced in ES6 to address 'var's shortcomings. Both are block-scoped, meaning they are only accessible within the block (e.g., if statement, loop, function) where they are declared. 'const' adds the additional constraint that its value cannot be reassigned after initialization, making it ideal for values that should not change. While 'let' allows reassignment, it avoids the hoisting issues of 'var'. Best practice is to use 'const' by default and 'let' when reassignment is necessary, avoiding 'var' entirely."
    },
    {
      id: 'fe4',
      question: "What are React Hooks?",
      answer: "React Hooks are functions that let you 'hook into' React state and lifecycle features from function components. They allow you to use state and other React features without writing a class.",
      aiExplanation: "React Hooks, introduced in React 16.8, revolutionized how stateful logic is handled in functional components. Before Hooks, if you needed state or lifecycle methods (like `componentDidMount`), you had to convert your functional component into a class component. Hooks like `useState` (for managing component-specific state), `useEffect` (for side effects like data fetching or DOM manipulation), `useContext` (for accessing context), and `useReducer` (for complex state logic) provide a more concise, readable, and reusable way to add these capabilities to functional components. They promote a more functional programming paradigm and help avoid the complexities often associated with class components, such as `this` binding issues and complex lifecycle methods."
    },
    {
      id: 'fe5',
      question: "Explain CSS Box Model.",
      answer: "The CSS Box Model describes how HTML elements are modeled as rectangular boxes. Each box has content, padding, border, and margin. These properties add space around the content.",
      aiExplanation: "The CSS Box Model is a fundamental concept for understanding layout in web design. Every HTML element is treated as a box, and this box is composed of four layers, from innermost to outermost: the **content area** (where the actual text or image resides), **padding** (transparent space around the content, inside the border), **border** (a line that goes around the padding and content), and **margin** (transparent space outside the border, separating the element from other elements). Understanding how these properties interact is crucial for controlling spacing, alignment, and overall page layout. Browsers can render boxes in two main modes: 'content-box' (default, where width/height apply only to content) and 'border-box' (where width/height apply to content + padding + border), which can be controlled with the `box-sizing` CSS property."
    },
  ],
  "Backend Engineer": [
    {
      id: 'be1',
      question: "What is RESTful API design?",
      answer: "REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use standard HTTP methods (GET, POST, PUT, DELETE) to interact with resources, which are identified by URIs.",
      aiExplanation: "RESTful API design is a widely adopted standard for building web services. It emphasizes a stateless client-server communication model, where each request from a client to a server contains all the information needed to understand the request. Key principles include: **Resources** (everything is a resource, identified by a unique URI), **Statelessness** (server doesn't store client context between requests), **Client-Server Architecture** (separation of concerns), **Cacheability** (responses can be cached), and **Layered System** (intermediaries can be used). RESTful APIs typically use standard HTTP methods (GET for retrieving, POST for creating, PUT for updating, DELETE for removing) to perform operations on resources, making them intuitive and scalable."
    },
    {
      id: 'be2',
      question: "Explain database normalization.",
      answer: "Database normalization is the process of organizing the columns and tables of a relational database to minimize data redundancy and improve data integrity. It involves breaking down large tables into smaller, related tables and defining relationships between them.",
      aiExplanation: "Database normalization is a systematic approach to designing relational database schemas to reduce data redundancy and improve data integrity. It involves a series of 'normal forms' (1NF, 2NF, 3NF, BCNF, etc.), each building upon the last, with specific rules for organizing data. The primary goals are to: 1) Eliminate redundant data (e.g., storing the same customer address multiple times), which saves storage and prevents update anomalies. 2) Ensure data dependencies make sense (e.g., a non-key attribute depends on the whole primary key). While higher normal forms reduce redundancy, they can sometimes lead to more complex queries due to increased joins. Therefore, denormalization (intentionally introducing redundancy) is sometimes used for performance optimization in specific scenarios, but it must be done carefully."
    },
  ],
  "DevOps Specialist": [
    {
      id: 'do1',
      question: "What is CI/CD?",
      answer: "CI/CD stands for Continuous Integration and Continuous Delivery/Deployment. It's a methodology that automates the stages of software delivery, from code integration to deployment, to enable faster and more reliable software releases.",
      aiExplanation: "CI/CD is a cornerstone of modern DevOps practices. **Continuous Integration (CI)** involves frequently merging code changes into a central repository, followed by automated builds and tests. This helps detect integration issues early. **Continuous Delivery (CD)** extends CI by ensuring that software can be released to production at any time, often involving automated testing and staging environments. **Continuous Deployment** takes CD a step further by automatically deploying every change that passes all tests to production, without manual intervention. The benefits include faster release cycles, reduced risk, improved code quality, and quicker feedback loops, leading to more efficient software development."
    },
    {
      id: 'do2',
      question: "Explain Docker containers.",
      answer: "Docker containers are lightweight, standalone, executable packages of software that include everything needed to run an application: code, runtime, system tools, libraries, and settings. They ensure applications run consistently across different environments.",
      aiExplanation: "Docker containers provide a standardized way to package, distribute, and run applications. Unlike virtual machines, containers share the host OS kernel, making them much lighter and faster to start. A Docker container bundles an application and all its dependencies into a single, isolated unit. This isolation ensures that an application runs consistently regardless of the underlying infrastructure, solving the 'it works on my machine' problem. Key concepts include Docker Images (read-only templates for creating containers), Dockerfiles (scripts to build images), and Docker Hub (a registry for sharing images). Containers are crucial for microservices architectures, enabling rapid deployment, scaling, and portability across development, testing, and production environments."
    },
  ],
};


const TopicDetailsPage = ({ selectedCardData =    {
      targetRole: "Frontend Developer",
      yearsOfExperience: "3-5",
      topicsToFocusOn: "React JavaScript CSS",
      description: "Cover all the basic questions for a frontend developer role, focusing on core web technologies and modern frameworks."
    } }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null); // State to hold the currently selected answer for the right panel
  const [isDetailViewOpen, setIsDetailViewOpen] = useState(false); // Controls full-screen detail view on small screens
  const [expandedAccordionId, setExpandedAccordionId] = useState(null); // State to track which accordion item is open

  // Destructure details from selectedCardData
  const { targetRole, yearsOfExperience, topicsToFocusOn, description } = selectedCardData || {};

  // Determine which set of questions to display based on the targetRole
  const questionsToDisplay = dummyQuestions[targetRole] || [];

  // Placeholder content for when no answer is selected
  const placeholderContent = {
    title: "Detailed Explanation",
    text: "Click 'Learn more' on any question to see a detailed AI explanation here.",
    color: "text-gray-400"
  };

  // Handler for "Learn more" click in AccordionItem
  const handleLearnMoreClick = (qa) => {
    setSelectedAnswer(qa);
    setIsDetailViewOpen(true); // Open the full-screen detail view on small screens
  };

  // Handler for "Back to Questions" button in AnswerDetailSection (on small screens)
  const handleBackToQuestions = () => {
    setIsDetailViewOpen(false); // Close the full-screen detail view
    setSelectedAnswer(null); // Clear the selected answer
  };

  // Handler for accordion item toggle
  const handleAccordionToggle = (id) => {
    if (expandedAccordionId === id) {
      setExpandedAccordionId(null); // Close if already open
      setSelectedAnswer(null); // Reset right panel when accordion closes
    } else {
      setExpandedAccordionId(id); // Open the new accordion item
      setSelectedAnswer(null); // Reset right panel when a new accordion opens
    }
  };

  const topicsArray = topicsToFocusOn ? topicsToFocusOn.split(' ') : [];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar /> {/* Reusing the Navbar component */}

      {/* New Section: Details of the selected topic - always visible below Navbar */}
      {/* Applied styling similar to CardComponent for consistency */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6 lg:px-8 py-4 sm:py-5 mt-20 mx-4 sm:mx-6 lg:mx-auto max-w-7xl w-auto"> {/* Adjusted mt, added mx-auto, max-w-7xl, w-auto, rounded-xl, shadow-lg, border */}
        <h2 className="text-xl sm:text-2xl font-bold text-deep-green mb-2">
          {targetRole} Interview Prep
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-1">
          <span className="font-semibold">Experience:</span> {yearsOfExperience}
        </p>
        <p className="text-gray-700 text-sm sm:text-base mb-1">
          <span className="font-semibold">Topics:</span> {topicsArray.join(', ')} {/* Display topics as comma-separated */}
        </p>
        <p className="text-gray-600 text-xs sm:text-sm">
          {description}
        </p>
      </div>

      {/* Main content area: Accordion (left) and Answer Details (right) */}
      {/* The relative class is important for positioning the fixed detail view on small screens */}
      <div className="flex flex-1 pt-4 sm:pt-6 lg:pt-8 overflow-hidden relative">
        {/* Left Section: Accordion (70% width on larger screens) */}
        {/* On small screens, this section is hidden when isDetailViewOpen is true */}
        <div className={`w-full lg:w-7/10 p-4 sm:p-6 lg:p-8 overflow-y-auto custom-scrollbar ${isDetailViewOpen ? 'hidden lg:block' : ''}`}>
          <h3 className="text-xl sm:text-2xl font-bold text-deep-green mb-6">
            Questions
          </h3>
          <div className="space-y-4">
            {questionsToDisplay.length > 0 ? (
              questionsToDisplay.map((qa) => (
                <AccordionItem
                  key={qa.id}
                  id={qa.id} // Pass id to AccordionItem
                  question={qa.question}
                  answer={qa.answer}
                  aiExplanation={qa.aiExplanation}
                  onLearnMoreClick={() => handleLearnMoreClick(qa)}
                  isExpanded={expandedAccordionId === qa.id} // Control expansion from parent
                  onToggle={handleAccordionToggle} // Pass toggle handler
                />
              ))
            ) : (
              <p className="text-gray-600 text-lg">No questions available for this role yet.</p>
            )}
          </div>
        </div>

        {/* Right Section: Answer Details (30% width on larger screens) */}
        {/*
          On small screens:
          - 'fixed inset-0' makes it full screen
          - 'z-40' ensures it's above the accordion but below the navbar
          - 'flex flex-col' for internal layout
          - Conditionally shown based on isDetailViewOpen
          On large screens:
          - 'lg:block lg:w-3/10' makes it visible and 30% width
          - 'lg:relative' makes it part of the normal flow
          - 'lg:border-l lg:border-gray-200 lg:bg-white lg:shadow-inner lg:overflow-y-auto lg:custom-scrollbar' for its styling
        */}
        <div className={`
          ${isDetailViewOpen ? 'fixed inset-0 w-full h-full bg-white z-40 flex flex-col p-4 sm:p-6 lg:p-8' : 'hidden'}
          lg:block lg:w-3/10 lg:relative lg:border-l lg:border-gray-200 lg:bg-white lg:shadow-inner lg:overflow-y-auto lg:custom-scrollbar
        `}>
          <AnswerDetailSection
            content={selectedAnswer || placeholderContent}
            onBackToQuestions={handleBackToQuestions}
            isDetailViewOpen={isDetailViewOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default TopicDetailsPage;
