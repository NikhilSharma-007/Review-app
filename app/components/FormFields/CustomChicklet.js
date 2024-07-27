// CustomChicklet.js

import React from "react";
import FormDataConfig from "../FormDataConfig";

const Step2 = FormDataConfig.steps.find((step) => step.step === 2).fields;

const CustomChicklet = ({ questionId, onChange, selectedValues }) => {
  const question = Step2.find((q) => q.id === questionId);

  if (!question || !question.options || question.options.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-xl font-semibold mb-2 text-purple-600">
        {question.label}
      </h2>
      <div className="flex flex-wrap gap-2">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`px-4 py-2 rounded-full border-2 ${
              selectedValues.includes(option.value)
                ? "border-purple-600 bg-purple-100 text-purple-600"
                : "border-gray-300 bg-white text-gray-700"
            } flex items-center justify-center font-semibold transition-colors hover:bg-purple-50`}
            onClick={() => onChange(question.id, option.value)}
          >
            {option.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomChicklet;
