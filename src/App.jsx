import { useReducer } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Section from "./components/Section";
import defaultData from "./defaultData";
import Education from "./components/Education";
import Experience from "./components/Experience";

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
      <h1>Resume Builder</h1>
      <Section initialToggle={true} title={"Personal Info"}>
        <PersonalInfo onChange={handlePersonalInfoChange} resume={resume} />
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
        <button onClick={handleNewEducation}>Add Education</button>
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
        <button onClick={handleNewExperience}>Add Experience</button>
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
    case "updated_education": {
      return {
        ...resume,
        education: resume.education.map((entry) => {
          if (action.id === entry.id) {
            return {
              ...entry,
              [action.name]: action.value,
            };
          } else {
            return entry;
          }
        }),
      };
    }
    case "added_education": {
      return {
        ...resume,
        education: [
          ...resume.education,
          {
            id: crypto.randomUUID(),
            school: "",
            location: "",
            gradDate: "",
            degree: "",
          },
        ],
      };
    }
    case "deleted_education": {
      return {
        ...resume,
        education: resume.education.filter((entry) => entry.id !== action.id),
      };
    }
    case "updated_experience": {
      return {
        ...resume,
        experience: resume.experience.map((entry) => {
          if (action.id === entry.id) {
            return {
              ...entry,
              [action.name]: action.value,
            };
          } else {
            return entry;
          }
        }),
      };
    }
    case "added_experience": {
      return {
        ...resume,
        experience: [
          ...resume.experience,
          {
            id: crypto.randomUUID(),
            position: "",
            company: "",
            location: "",
            startDate: "",
            endDate: "",
            summary: "",
          },
        ],
      };
    }
    case "deleted_experience": {
      return {
        ...resume,
        experience: resume.experience.filter((entry) => entry.id !== action.id),
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
