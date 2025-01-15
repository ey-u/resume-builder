export default function Education({ onChange, education, id }) {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="school">School</label>
          <input
            id="school"
            name="school"
            type="text"
            value={education.school}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            value={education.location}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <div>
          <label htmlFor="gradDate">Graduation Date</label>
          <input
            id="gradDate"
            name="gradDate"
            type="month"
            value={education.gradDate}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <div>
          <label htmlFor="degree">Degree</label>
          <input
            id="degree"
            name="degree"
            type="text"
            value={education.degree}
            onChange={(e) => onChange(e, id)}
          />
        </div>
      </form>
    </div>
  );
}
