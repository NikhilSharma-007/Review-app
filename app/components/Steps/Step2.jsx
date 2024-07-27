//Step2.jsx
import React, { useState } from "react";
import Activation from "../Activation";
import FormDataConfig from "../FormDataConfig";

const Step2 = ({ onResponsesChange }) => {
  const [responses, setResponses] = useState({});

  // Extract Step2Data from FormDataConfig
  const Step2Data = FormDataConfig.steps[1].fields;

  const handleResponseChange = (questionId, value) => {
    setResponses((prev) => {
      const currentValues = prev[questionId] || [];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      const newResponses = {
        ...prev,
        [questionId]: updatedValues,
      };

      onResponsesChange(newResponses); // Call the parent function with the new responses
      return newResponses;
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {Step2Data.map((question) => (
        <div key={question.id} className="mb-6">
          <Activation
            componentType="chicklet"
            questionId={question.id}
            onChange={handleResponseChange}
            selectedValues={responses[question.id] || []}
          />
        </div>
      ))}
    </div>
  );
};

export default Step2;
