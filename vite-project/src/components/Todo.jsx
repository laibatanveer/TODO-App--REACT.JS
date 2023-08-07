import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Todo({ todo, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div>
      <p
        onClick={() => toggleComplete(todo.id)}
        className={`${todo.completed ? "completed" : ""}`}
      >
        {todo.task}
      </p>
      <div>
        <FaEdit onClick={() => editTodo(todo.id)} />

        <MdDelete onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
}
