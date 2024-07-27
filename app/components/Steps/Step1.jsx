import React, { useState, useEffect } from "react";
import CustomRadioButton from "../FormFields/CustomRadioButton";
import Step1Data from "../Data/Step1";

const Step1 = ({ onSubmit }) => {
  const [responses, setResponses] = useState({});

  const handleResponseChange = (questionId, value) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  // This effect will only run when the responses object changes
  useEffect(() => {
    // Only submit if there are any responses
    if (Object.keys(responses).length > 0) {
      onSubmit(responses);
    }
  }, [responses]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {Step1Data.map((question) => (
        <div key={question.id} className="mb-6">
          <CustomRadioButton
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
