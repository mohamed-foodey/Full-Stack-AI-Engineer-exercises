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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-5">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          📝 Todo List
        </h2>

        <div className="flex gap-3 mb-6 max-sm:flex-col">
          <input
            type="text"
            placeholder="Enter a task..."
            value={inputValue}
            onChange={InputHandler}
            className="flex-1 border-2 border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition"
          />

          <button
            onClick={handleAddTodo}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 hover:-translate-y-1 transition duration-300"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {Todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 border-l-4 border-indigo-500 p-4 rounded-xl hover:bg-indigo-50 hover:translate-x-1 transition"
            >
              <span className="text-gray-700">{todo.text}</span>

              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {Todos.length === 0 && (
          <p className="text-center text-gray-500 italic mt-6">
            No tasks yet. Add your first task 🚀
          </p>
        )}
      </div>
    </div>
  );
}

export default Todolist;