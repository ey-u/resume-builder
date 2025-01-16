const defaultData = {
  name: "Avatar Aang",
  email: "aangis@thetemple.com",
  phone: "333-333-3333",
  location: "Southern Air Temple",
  education: [
    {
      id: crypto.randomUUID(),
      school: "Air Acolyte Academy",
      location: "Southern Air Temple",
      gradDate: "2005-07",
      degree: "Master of Air, Airbending",
    },
    {
      id: crypto.randomUUID(),
      school: "Peacekeeper University",
      location: "Earth",
      gradDate: "2008-07",
      degree: "Master of Peacekeeping, War Ender",
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      position: "Avatar",
      company: "The Hundred Year War",
      location: "Earth",
      startDate: "2005-02",
      endDate: "2008-07",
      summary:
        "Mastered all four elements, lorem ipsum odor amet, consectetuer adipiscing elit; Defeated Firelord Ozai, vestibulum finibus interdum non interdum vulputate; Ended Hundred Year War, tristique consequat fusce at dis facilisi quam",
    },
    {
      id: crypto.randomUUID(),
      position: "Waterbending Student",
      company: "The Katara School of Waterbending",
      location: "Earth",
      startDate: "2005-02",
      endDate: "2005-12",
      summary:
        "Studied under Katara and mastered waterbending; Urna mattis donec curae ante quis, fringilla ex magna taciti proin accumsan eros consectetur habitasse; Dui sollicitudin porta mollis quis sociosqu laoreet finibus, est est ullamcorper tristique fringilla risus mauris; Lorem vehicula dictum elementum sapien, risus sociosqu nam tempus",
    },
  ],
};

export default defaultData;
