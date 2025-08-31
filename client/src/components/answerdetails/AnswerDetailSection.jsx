import React from 'react';
import Button from '../button/Button';

const AnswerDetailSection = ({ content, onBackToQuestions, isDetailViewOpen }) => {
  return (
    <div className=" flex flex-col">
      {/* Back button for small screens - visible only when detail view is open and on non-large screens */}
      {isDetailViewOpen && ( // Only show if detail view is open (implies small screen context)
        <div className="lg:hidden mb-4"> {/* Hidden on large screens */}
          <Button variant="outline" onClick={onBackToQuestions} className="text-sm px-4 py-2 border-deep-green"> {/* Added border-deep-green for outline variant */}
            ← Back to Questions
          </Button>
        </div>
      )}

      {/* Title of the section */}
      <h3 className="text-xl sm:text-2xl font-bold text-deep-green mb-4">
        {content.title || "Detailed Explanation"}
      </h3>

      {/* Conditional rendering for content or placeholder */}
      {content.aiExplanation ? (
        <div className="space-y-4 text-gray-700 text-sm sm:text-base flex-1 overflow-y-auto custom-scrollbar pr-2"> {/* Added pr-2 for scrollbar spacing */}
          <p className="font-semibold text-gray-800">{content.question}</p>
          <p>{content.answer}</p>
          <p className="bg-gray-50 p-3 rounded-md border border-gray-100 italic text-gray-600">
            {content.aiExplanation}
          </p>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className={`text-center ${content.color || 'text-gray-400'} text-lg italic`}>
            {content.text || "Select a question to view its detailed AI explanation here."}
          </p>
        </div>
      )}
    </div>
  );
};

export default AnswerDetailSection;
