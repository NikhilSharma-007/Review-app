// Step2.js
const Step2 = [
  {
    label: "What did you like about the experience?",
    fieldType: "chicklet",
    simpleSearch: true,
    allowMultiple: true,
    id: "experience_likes",
    value: "experience_likes",
    condition: true,
    conditionValue: [
      {
        questionId: "experience",
        value: ["8", "9", "10"],
      },
    ],
    options: [
      { value: "Effortless Experience", id: "experience_effortless" },
      { value: "Quick Response", id: "experience_quick" },
      { value: "Polite", id: "experience_polite" },
      { value: "User driven", id: "experience_user_driven" },
      { value: "Practical Approach", id: "experience_practical" },
      { value: "Satisfactory", id: "experience_satisfactory" },
    ],
  },
  {
    label: "Please select areas we could do better in.",
    fieldType: "chicklet",
    simpleSearch: true,
    allowMultiple: true,
    id: "Better_experience",
    value: "Better_experience",
    condition: true,
    conditionValue: [
      {
        questionId: "Better",
        value: ["5", "6", "7"],
      },
    ],
    options: [
      { value: "Effortless Experience", id: "experience_effortless" },
      { value: "Quick Response", id: "experience_quick" },
      { value: "Polite", id: "experience_polite" },
      { value: "User driven", id: "experience_user_driven" },
      { value: "Practical Approach", id: "experience_practical" },
      { value: "Satisfactory", id: "experience_satisfactory" },
    ],
  },
  {
    label:
      "Please select areas we could improve and provide you better experience.",
    fieldType: "chicklet",
    simpleSearch: true,
    allowMultiple: true,
    id: "Improve_experience",
    value: "Improve_experience",
    condition: true,
    conditionValue: [
      {
        questionId: "Improve",
        value: ["1", "2", "3", "4"],
      },
    ],
    options: [
      { value: "Effortless Experience", id: "experience_effortless" },
      { value: "Quick Response", id: "experience_quick" },
      { value: "Polite", id: "experience_polite" },
      { value: "User driven", id: "experience_user_driven" },
      { value: "Practical Approach", id: "experience_practical" },
      { value: "Satisfactory", id: "experience_satisfactory" },
    ],
  },
];
export default Step2;
