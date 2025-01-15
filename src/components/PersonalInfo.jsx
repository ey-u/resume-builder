export default function PersonalInfo({ onChange, resume }) {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={resume.name}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={resume.email}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={resume.phone}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            value={resume.location}
            onChange={(e) => onChange(e)}
          />
        </div>
      </form>
    </div>
  );
}
