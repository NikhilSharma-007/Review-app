import React, { useState } from "react";
import CustomChicklet from "../FormFields/CustomChicklet";
import Step2Data from "../Data/Step2";

const Step2 = ({ onResponsesChange }) => {
  const [responses, setResponses] = useState({});

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
          <CustomChicklet
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