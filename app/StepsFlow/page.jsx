//StepsFlow
"use client";
import React, { useState } from "react";
import Step1 from "../components/Steps/Step1";
import Step2 from "../components/Steps/Step2";

export default function StepsFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [step2Responses, setStep2Responses] = useState({});

  const handleStep1Submit = (data) => {
    setFormData((prev) => ({ ...prev, step1: data }));
  };

  const handleStep2ResponsesChange = (responses) => {
    setStep2Responses(responses);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      console.log("Step 1 data:", formData.step1);
      setCurrentStep(2);
    } else {
      setFormData((prev) => ({ ...prev, step2: step2Responses }));
      console.log("Form submitted!", { ...formData, step2: step2Responses });
      // Here you would typically send the data to a server
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {currentStep === 1 ? (
        <Step1 onSubmit={handleStep1Submit} />
      ) : (
        <Step2 onResponsesChange={handleStep2ResponsesChange} />
      )}
      <button
        className="mt-6 bg-purple-600 text-white px-8 py-2 rounded-full hover:bg-purple-700 transition-colors text-sm font-semibold"
        onClick={handleNext}
      >
        {currentStep === 1 ? "Next" : "Submit"}
      </button>
    </div>
  );
}
