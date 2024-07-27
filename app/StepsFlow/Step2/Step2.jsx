//Step2.jsx
import React, { useState, useEffect } from "react";
import Activation from "../../components/Activation";
import FormDataConfig from "../../components/FormDataConfig";

const Step2 = ({ onResponsesChange }) => {
  const [responses, setResponses] = useState({});

  // Extract Step2Data from FormDataConfig
  const Step2Data = FormDataConfig.steps[1].fields;

  useEffect(() => {
    onResponsesChange(responses);
  }, [responses, onResponsesChange]);

  const handleResponseChange = (questionId, value) => {
    setResponses((prev) => {
      const currentValues = prev[questionId] || [];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return {
        ...prev,
        [questionId]: updatedValues,
      };
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
