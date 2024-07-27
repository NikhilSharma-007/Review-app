// Activation.js

import React from "react";
import CustomChicklet from "./FormFields/CustomChicklet";
import CustomRadioButton from "./FormFields/CustomRadioButton";

const Activation = ({
  componentType,
  questionId,
  onChange,
  selectedValue,
  selectedValues,
}) => {
  switch (componentType) {
    case "chicklet":
      return (
        <CustomChicklet
          questionId={questionId}
          onChange={onChange}
          selectedValues={selectedValues}
        />
      );
    case "radio":
      return (
        <CustomRadioButton
          questionId={questionId}
          onChange={onChange}
          selectedValue={selectedValue}
        />
      );
    default:
      return null;
  }
};

export default Activation;
