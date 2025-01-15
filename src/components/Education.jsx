export default function Education({ onChange, onDelete, education, id }) {
  return (
    <div className="formContainer">
      <form>
        <div className="formRow">
          <label htmlFor="school">School</label>
          <input
            id="school"
            name="school"
            type="text"
            value={education.school}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <div className="formRow">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            value={education.location}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <div className="formRow">
          <label htmlFor="gradDate">Graduation Date</label>
          <input
            id="gradDate"
            name="gradDate"
            type="month"
            value={education.gradDate}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <div className="formRow">
          <label htmlFor="degree">Degree</label>
          <input
            id="degree"
            name="degree"
            type="text"
            value={education.degree}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <button className="delete" type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </form>
    </div>
  );
}
