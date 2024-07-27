//CustomRadioButton.js

import React from "react";
import Step1 from "../Data/Step1";

const CustomRadioButton = ({ questionId, onChange, selectedValue }) => {
  const question = Step1.find((q) => q.id === questionId);

  if (!question || !question.options || question.options.length === 0) {
    return null;
  }

  const minValue = Math.min(
    ...question.options.map((option) => parseInt(option.value))
  );
  const maxValue = Math.max(
    ...question.options.map((option) => parseInt(option.value))
  );

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-xl font-semibold mb-2 text-purple-600">
        {question.label}
      </h2>
      <div className="flex justify-between">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`w-10 h-10 rounded-full border-2 ${
              selectedValue === option.value
                ? "border-purple-600 bg-purple-100 text-purple-600"
                : "border-gray-300 bg-white text-gray-700"
            } flex items-center justify-center font-semibold transition-colors`}
            onClick={() => onChange(question.id, option.value)}
          >
            {option.value}
          </button>
        ))}
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{question.id === "experience" ? "Very bad" : "Not likely"}</span>
        <span>{question.id === "experience" ? "Awesome" : "Very likely"}</span>
      </div>
    </div>
  );
};

export default CustomRadioButton;
