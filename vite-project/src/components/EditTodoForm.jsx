import React, { useState } from "react";

export default function EditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="TodoForm rounded shadow p-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input rounded shadow"
        value={value}
        placeholder="Edit Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn btn-dark">
        Update Task
      </button>
    </form>
  );
}
