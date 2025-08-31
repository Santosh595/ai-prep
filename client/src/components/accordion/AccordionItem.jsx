import React, { useState } from 'react';
import { ChevronDown, Brain, ExternalLink } from 'lucide-react'; // Using lucide-react for icons

const AccordionItem = ({ question, answer, aiExplanation, onLearnMoreClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Accordion Header */}
      <button
        className="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none transition-colors duration-200"
        onClick={toggleAccordion}
        aria-expanded={isExpanded}
      >
        <span className="flex-1 pr-4 text-base sm:text-lg">{question}</span>
        <div className="flex items-center space-x-2">
          {/* AI Icon and Learn More text (visible on hover or when expanded) */}
          {(isHovered || isExpanded) && (
            <span
              className="flex items-center text-accent text-sm sm:text-base font-medium transition-opacity duration-200"
              onClick={(e) => {
                e.stopPropagation(); // Prevent accordion from toggling when clicking "Learn more"
                onLearnMoreClick(); // Trigger the function to load details
              }}
            >
              <Brain className="w-4 h-4 mr-1" /> {/* AI icon */}
              Learn more
            </span>
          )}
          {/* Chevron Icon - rotates on expand */}
          <ChevronDown
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </button>

      {/* Accordion Content */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 pt-0 text-gray-700 text-sm sm:text-base border-t border-gray-100">
            <p className="mb-2">{answer}</p>
            <button
              onClick={onLearnMoreClick}
              className="flex items-center text-deep-green hover:text-accent transition-colors duration-200 text-sm font-medium mt-2"
            >
              <ExternalLink className="w-4 h-4 mr-1" /> See Full AI Explanation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
