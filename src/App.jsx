import { useReducer } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Section from "./components/Section";
import defaultData from "./defaultData";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import resumeReducer from "./resumeReducer";

export default function App() {
  const [resume, dispatch] = useReducer(resumeReducer, defaultData);

  function handlePersonalInfoChange(e) {
    dispatch({
      type: "updated_personal",
      name: e.target.name,
      value: e.target.value,
    });
  }

  function handleEducationChange(e, id) {
    dispatch({
      type: "updated_education",
      id: id,
      name: e.target.name,
      value: e.target.value,
    });
  }

  function handleNewEducation() {
    dispatch({
      type: "added_education",
    });
  }

  function handleDeletedEducation(id) {
    dispatch({
      type: "deleted_education",
      id: id,
    });
  }

  function handleExperienceChange(e, id) {
    dispatch({
      type: "updated_experience",
      id: id,
      name: e.target.name,
      value: e.target.value,
    });
  }

  function handleNewExperience() {
    dispatch({
      type: "added_experience",
    });
  }

  function handleDeletedExperience(id) {
    dispatch({
      type: "deleted_experience",
      id: id,
    });
  }

  return (
    <>
      <div className="container">
        <div className="left">
          <h1>Resume Builder</h1>
          <div className="editingSection">
            <Section initialToggle={true} title={"Personal Info"}>
              <PersonalInfo
                onChange={handlePersonalInfoChange}
                resume={resume}
              />
            </Section>
            <Section initialToggle={false} title={"Education"}>
              {resume.education.map((entry) => {
                return (
                  <Education
                    key={entry.id}
                    onChange={handleEducationChange}
                    onDelete={handleDeletedEducation}
                    education={entry}
                    id={entry.id}
                  />
                );
              })}
              <button className="add" onClick={handleNewEducation}>
                Add Education
              </button>
            </Section>
            <Section initialToggle={true} title={"Experience"}>
              {resume.experience.map((entry) => {
                return (
                  <Experience
                    key={entry.id}
                    onChange={handleExperienceChange}
                    onDelete={handleDeletedExperience}
                    experience={entry}
                    id={entry.id}
                  />
                );
              })}
              <button className="add" onClick={handleNewExperience}>
                Add Experience
              </button>
            </Section>
          </div>
        </div>
        <div>
          <Resume resume={resume} />
        </div>
      </div>
    </>
  );
}
