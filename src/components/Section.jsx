import { useState } from "react";

export default function Section({ initialToggle, title, children }) {
  const [isOpen, setIsOpen] = useState(initialToggle);
  function toggleSection() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={() => toggleSection()}>
        {title} {isOpen ? <span>&#9660;</span> : <span>&#9650;</span>}
      </button>
      {isOpen && <div className="form">{children}</div>}
    </div>
  );
}
