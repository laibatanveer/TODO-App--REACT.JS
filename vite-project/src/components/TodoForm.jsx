import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form className="TodoForm rounded shadow p-3" onSubmit={handleSubmit}>
      <input 
        type="text"
        className="todo-input rounded shadow"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn rounded btn-dark">
        Add Task
      </button>
    </form>
  );
}
