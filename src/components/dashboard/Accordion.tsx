// Import necessary packages and components
import React, { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

// Define the properties for the Accordion component
interface AccordionProps {
  title: ReactNode; // The title of the accordion
  children: ReactNode; // The content of the accordion
}

// Define the Accordion component
const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  // Define a state variable to track if the accordion is open
  const [isOpen, setIsOpen] = useState(true);

  // Define a function to toggle the accordion open/closed
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Define a function to stop event propagation when the content is clicked
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  // Define a function to stop event propagation when the title is clicked
  const handleTitleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  // Return the JSX for the Accordion component
  return (
    <div className="border-b">
      <div
        className="flex items-center justify-center py-4 font-medium transition-all cursor-pointer"
        onClick={toggleAccordion} // When this div is clicked, toggle the accordion
      >
        <div className="flex justify-center items-center gap-4">
          <div onClick={handleTitleClick} className="pb-8">{title}</div> 
          <div className='items-center'>
            <ChevronDown
              className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : '' // Rotate the icon if the accordion is open
              }`}
            />
          </div>
        </div>
      </div>
      {isOpen && ( // If the accordion is open, display the content
        <div className="overflow-hidden text-sm transition-all">
          <div className="pb-4 pt-0" onClick={handleContentClick}>
            {children} 
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
