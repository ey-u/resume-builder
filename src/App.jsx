import { useReducer } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Section from "./components/Section";
import defaultData from "./defaultData";

export default function App() {
  const [resume, dispatch] = useReducer(resumeReducer, defaultData);

  function handlePersonalInfoChange(e) {
    dispatch({
      type: "updated_personal",
      name: e.target.name,
      value: e.target.value,
    });
  }

  // function handleEducationChange() {

  // }

  // function handleExperienceChange() {

  // }

  return (
    <>
      <h1>Resume Builder</h1>
      <Section initialToggle={true} title={"Personal Info"}>
        <PersonalInfo onChange={handlePersonalInfoChange} resume={resume} />
      </Section>
    </>
  );
}

function resumeReducer(resume, action) {
  switch (action.type) {
    case "updated_personal": {
      return {
        ...resume,
        [action.name]: action.value,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
