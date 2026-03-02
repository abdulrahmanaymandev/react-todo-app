import React from "react";
import "./Buttons.css";

const Buttons = ({ setTodoToShow, todoToShow }) => {
  const filters = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <div className="buttons">
      {filters.map((f) => (
        <button
          key={f.value}
          className={`filter-btn ${todoToShow === f.value ? "active" : ""}`}
          onClick={() => setTodoToShow(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
