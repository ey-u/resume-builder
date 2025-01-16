import { format, addMonths } from "date-fns";

export default function Resume({ resume }) {
  const { name, email, phone, location, education, experience } = resume;

  return (
    <div className="resume">
      <div className="resume-header">
        <h2>{name}</h2>
        <p>
          {email} | {phone} | {location}
        </p>
      </div>
      <div>
        {education.length > 0 && (
          <h3>
            <u>EDUCATION</u>
          </h3>
        )}
        <div className="resume-section">
          {education.map((school) => {
            return (
              <div key={school.id}>
                <p className="split-line">
                  <span>
                    <em>{school.school}</em>, {school.location}
                  </span>
                  <span>
                    <b>{formatDate(school.gradDate)}</b>
                  </span>
                </p>
                <p>
                  <b>{school.degree}</b>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {experience.length > 0 && (
          <h3>
            <u>WORK EXPERIENCE</u>
          </h3>
        )}
        <div className="resume-section">
          {experience.map((work) => {
            return (
              <div key={work.id}>
                <p className="split-line">
                  <span>
                    <b>{work.position}</b>, <em>{work.company}</em>,{" "}
                    {work.location}
                  </span>
                  <span>
                    <b>
                      {formatDate(work.startDate)} - {formatDate(work.endDate)}
                    </b>
                  </span>
                </p>
                <ul>
                  {work.summary.split(";").map((point) => {
                    return <li key={crypto.randomUUID()}>{point}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function formatDate(date) {
  return format(addMonths(new Date(date), 1), "MMM yyyy");
}
