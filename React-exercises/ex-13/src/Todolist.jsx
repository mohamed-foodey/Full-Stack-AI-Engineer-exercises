import styles from "./Todolist.module.css";
import { useState } from "react";

function Todolist() {
  const [Todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const InputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: inputValue,
      completed: false,
    };

    setTodos([...Todos, newTodo]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(Todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.todoCard}>
        <h2 className={styles.title}>📝 Todo List</h2>

        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Enter a task..."
            value={inputValue}
            onChange={InputHandler}
            className={styles.input}
          />

          <button
            onClick={handleAddTodo}
            className={styles.addButton}
          >
            Add
          </button>
        </div>

        <ul className={styles.todoList}>
          {Todos.map((todo) => (
            <li key={todo.id} className={styles.todoItem}>
              <span>{todo.text}</span>

              <button
                className={styles.deleteButton}
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {Todos.length === 0 && (
          <p className={styles.emptyMessage}>
            No tasks yet. Add your first task 🚀
          </p>
        )}
      </div>
    </div>
  );
}

export default Todolist;