import React, { useState } from "react";
import "./TodoListForm.css";
import { v4 as uuidv4 } from "uuid";

const TodoListForm = ({ addTodo }) => {
  const [inputTask, setInputTask] = useState("");

  const handelAddbtn = (e) => {
    e.preventDefault();
    if (inputTask.trim() === "") return;
    addTodo({
      id: uuidv4(),
      task: inputTask.trim(),
      completed: false,
    });
    setInputTask("");
  };

  return (
    <form onSubmit={handelAddbtn}>
      <input
        className="form-input"
        type="text"
        placeholder="Add a new task..."
        onChange={(e) => setInputTask(e.target.value)}
        value={inputTask}
        autoComplete="off"
      />
      <button
        className="form-button"
        type="submit"
        disabled={inputTask.trim() === ""}
        title="Add task"
      >
        +
      </button>
    </form>
  );
};

export default TodoListForm;
