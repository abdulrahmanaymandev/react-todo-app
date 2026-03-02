import { useEffect, useState } from "react";
import "./App.css";
import TodoListForm from "./components/TodoListForm/TodoListForm";
import Todo from "./components/Todo/Todo";
import Buttons from "./components/Buttons/Buttons";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import EditModal from "./components/EditModal/EditModal";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoToShow, setTodoToShow] = useState("all");
  const [deleteModal, setDeleteModal] = useState(null);
  const [editModal, setEditModal] = useState(null);

  const addTodo = (todo) => {
    const updateTodos = [...todos, todo];
    localStorage.setItem("todos", JSON.stringify(updateTodos));
    setTodos(updateTodos);
  };

  const confirmDelete = () => {
    const updateTodos = todos.filter((t) => t.id !== deleteModal);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
    setTodos(updateTodos);
    setDeleteModal(null);
  };

  const cancelDelete = () => {
    setDeleteModal(null);
  };

  const handelComplet = (id) => {
    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  };

  const filteredTodos =
    todoToShow === "active"
      ? todos.filter((todo) => !todo.completed)
      : todoToShow === "completed"
        ? todos.filter((todo) => todo.completed)
        : todos;

  const updateTodo = (id, newTask) => {
    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo,
    );
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  };

  const cancelEdit = () => {
    setEditModal(null);
  };

  const completedCount = todos.filter((t) => t.completed).length;
  const totalCount = todos.length;

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
    setTodos(storedTodos);
  }, []);

  return (
    <>
      <div className="app">
        <div className="todoListApp">
          <div className="app-header">
            <h1>My Tasks</h1>
            {totalCount > 0 && (
              <p className="tasks-summary">
                {completedCount} of {totalCount} tasks completed
              </p>
            )}
          </div>

          <TodoListForm addTodo={addTodo} />
          <Buttons setTodoToShow={setTodoToShow} todoToShow={todoToShow} />

          <div className="tasks">
            {filteredTodos.length === 0 ? (
              <div className="empty-state">
                <p>
                  {todoToShow === "completed"
                    ? "No completed tasks yet"
                    : todoToShow === "active"
                      ? "No active tasks"
                      : "No tasks yet — add one above"}
                </p>
              </div>
            ) : (
              filteredTodos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  handelDel={() => setDeleteModal(todo.id)}
                  handelComplet={() => handelComplet(todo.id)}
                  handelEdit={() => setEditModal(todo)}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {deleteModal !== null && (
        <DeleteModal
          confirmDelete={confirmDelete}
          cancelDelete={cancelDelete}
        />
      )}

      {editModal !== null && (
        <EditModal
          todo={editModal}
          updateTodo={updateTodo}
          cancelEdit={cancelEdit}
        />
      )}
    </>
  );
}

export default App;
