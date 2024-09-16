import React, { useState } from "react";

const Collapse = ({ collapseMenu, title, text }) => {
  const [isOpen, setIsOpen] = useState(collapseMenu);

  return (
    <div className="collapse">
      <div className="collapse__header">
        <h1>{title}</h1>
        <div className="collapse__toggle">
          <div
            className={`collapse__toggle-icon ${
              isOpen ? "collapse__toggle-icon--open" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src="/closearrow.png" alt="arrow collapse" />
          </div>
        </div>
      </div>
      <div
        className={`collapse__content ${
          isOpen ? "collapse__content--open" : ""
        }`}
      >
        <div className="collapse__content-inner">{text}</div>
      </div>
    </div>
  );
};

export default Collapse;
