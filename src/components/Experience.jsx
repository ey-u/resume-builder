export default function Experience({ onChange, onDelete, experience, id }) {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="position">Job Title</label>
          <input
            id="position"
            name="position"
            type="text"
            value={experience.position}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <div>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            value={experience.company}
            onChange={(e) => onChange(e, id)}
            autoComplete="on"
          />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            value={experience.location}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            name="startDate"
            type="month"
            value={experience.startDate}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            name="endDate"
            type="month"
            value={experience.endDate}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <div>
          <label htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            name="summary"
            value={experience.summary}
            onChange={(e) => onChange(e, id)}
            placeholder="Please enter your responsibilities as a comma separated list"
          />
        </div>

        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </form>
    </div>
  );
}
