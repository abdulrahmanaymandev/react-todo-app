import React, { useState } from "react";
import "./EditModal.css";

const EditModal = ({ todo, updateTodo, cancelEdit }) => {
  const [newTask, setNewTask] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      updateTodo(todo.id, newTask.trim());
      cancelEdit();
    }
  };

  return (
    <div className="modal-overlay" onClick={cancelEdit}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-icon edit-icon">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </div>
        <h3>Edit Task</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="edit-input"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            autoFocus
            autoComplete="off"
          />
          <div className="modal-buttons">
            <button
              type="submit"
              className="btn-update"
              disabled={newTask.trim() === "" || newTask.trim() === todo.task}
            >
              Update
            </button>
            <button type="button" className="btn-cancel" onClick={cancelEdit}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
