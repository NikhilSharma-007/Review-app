// Separate file: formConfig.js
export const formConfig = {
  step1: [
    {
      label: "How was your experience with us?",
      fieldType: "radio",
      simpleSearch: true,
      allowMultiple: false,
      id: "radioButton",
      value: "radioButton",
      options: [
        { value: "1", id: "experience_1" },
        { value: "2", id: "experience_2" },
        { value: "3", id: "experience_3" },
        { value: "4", id: "experience_4" },
        { value: "5", id: "experience_5" },
        { value: "6", id: "experience_6" },
        { value: "7", id: "experience_7" },
        { value: "8", id: "experience_8" },
        { value: "9", id: "experience_9" },
        { value: "10", id: "experience_10" },
      ],
    },

    ////////////////////////////////////////////
    { type: "checkbox", label: "Option 1", name: "option1" },
    { type: "checkbox", label: "Option 2", name: "option2" },
    {
      type: "dropdown",
      label: "Select an option",
      name: "dropdown1",
      options: ["A", "B", "C"],
    },
  ],
  step2: [
    { type: "textbox", label: "Enter text", name: "textbox1" },
    {
      type: "radio",
      label: "Choose an option",
      name: "radio1",
      options: ["Yes", "No"],
    },
  ],
  step3: [
    { type: "textboxWithAudio", label: "Speak or type", name: "audioText1" },
  ],
  step4: [
    {
      type: "chiklets",
      label: "Select tags",
      name: "tags1",
      options: ["Tag1", "Tag2", "Tag3"],
    },
  ],
  step5: [{ type: "checkbox", label: "Final Step", name: "finalCheck" }],
};
