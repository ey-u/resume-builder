function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
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
            gradDate: formatDate(new Date()),
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
            startDate: formatDate(new Date()),
            endDate: formatDate(new Date()),
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

export default resumeReducer;
