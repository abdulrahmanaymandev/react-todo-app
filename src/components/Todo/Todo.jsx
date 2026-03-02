import React from "react";
import "./Todo.css";

const Todo = ({ todo, handelDel, handelComplet, handelEdit }) => {
  return (
    <div className="todo">
      <button
        className={`todo-checkbox ${todo.completed ? "checked" : ""}`}
        onClick={handelComplet}
        title={todo.completed ? "Mark as active" : "Mark as complete"}
      />

      <p
        className={`task ${todo.completed ? "completed" : ""}`}
        onClick={handelComplet}
      >
        {todo.task}
      </p>

      <div className="todo-actions">
        <button className="btn-edit" onClick={handelEdit} title="Edit task">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
        <button className="btn-delete" onClick={handelDel} title="Delete task">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="m19 6-.867 12.142A2 2 0 0 1 16.138 20H7.862a2 2 0 0 1-1.995-1.858L5 6" />
            <path d="M10 11v6M14 11v6" />
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Todo;
