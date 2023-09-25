import React, { useState } from 'react';
import './Faq.css'; // Import your CSS for styling
import NavbarLand from './ComponentS/NavbarLand';

const FaqSection = () => {
  const initialQuestions = [
    "How do I report a crime using this application?",
    "Is my personal information kept confidential when I report a crime?",
    "Can I report a crime anonymously?",
    "What types of crimes can I report through this application?",
    "How can I attach evidence or files when reporting a crime?",
    "What should I do if I witness a crime in progress?"
  ];

  const initialAnswers = [
    "You can report a crime by clicking on the 'Report Crime' button and following the instructions.",
    "Yes, your personal information is kept confidential. We take privacy seriously.",
    "Yes, you can choose to report a crime anonymously if you prefer.",
    "You can report various types of crimes, including theft, vandalism, assault, and more.",
    "You can attach evidence or files during the reporting process. There will be an option to upload files.",
    "If you witness a crime in progress, please call 911 or your local emergency number immediately."
  ];

  const [answers, setAnswers] = useState(initialAnswers);
  const [showAnswerInput, setShowAnswerInput] = useState(Array(initialQuestions.length).fill(false));

  const handleAnswerChange = (index, event) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = event.target.value;
    setAnswers(updatedAnswers);
  };

  const handleToggleAnswerInput = (index) => {
    const updatedShowAnswerInput = [...showAnswerInput];
    updatedShowAnswerInput[index] = !showAnswerInput[index];
    setShowAnswerInput(updatedShowAnswerInput);
  };

  return (
    <div>
      <NavbarLand/>
 
    <section className="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-title">
              <h2>Frequently Asked <span>Questions</span></h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="faq-container">
              {/* FAQ items */}
              {initialQuestions.map((question, index) => (
                <div className="faq-item" key={index}>
                  <div
                    className="faq-question"
                    onClick={() => handleToggleAnswerInput(index)}
                  >
                    {question}
                  </div>
                  {showAnswerInput[index] && (
                    <div className="faq-answer-input">
                      <textarea
                        placeholder="Enter your answer..."
                        value={answers[index]}
                        onChange={(event) => handleAnswerChange(index, event)}
                      />
                    </div>
                  )}
                  <div className="faq-answer">
                    {answers[index]}
                  </div>
                </div>
              ))}
              {/* Add more FAQ items as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default FaqSection;