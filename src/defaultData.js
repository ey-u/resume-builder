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
      gradDate: "2008-07",
      degree: "Master of Air, Airbending",
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
      responsibilities:
        "Mastered all four elements, defeated Firelord Ozai, ended Hundred Year War",
    },
  ],
};

export default defaultData;
