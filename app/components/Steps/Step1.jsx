//Step1.jsx
import React, { useState, useEffect } from "react";
import Activation from "../Activation";
import Step1Data from "../Data/Step1";

const Step1 = ({ onSubmit }) => {
  const [responses, setResponses] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleResponseChange = (questionId, value) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }));
    setHasSubmitted(false);
  };

  useEffect(() => {
    if (Object.keys(responses).length > 0 && !hasSubmitted) {
      onSubmit(responses);
      setHasSubmitted(true);
    }
  }, [responses, onSubmit, hasSubmitted]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {Step1Data.map((question) => (
        <div key={question.id} className="mb-6">
          <Activation
            componentType="radio"
            questionId={question.id}
            onChange={handleResponseChange}
            selectedValue={responses[question.id] || ""}
          />
        </div>
      ))}
    </div>
  );
};

export default Step1;
