import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Todo({ todo, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="d-flex justify-content-between align-items-center rounded p-3 m-3 shadow">
      <p
        onClick={() => toggleComplete(todo.id)}
        className={ `${todo.completed ? "completed" : ""}`}
      >
        {todo.task}
      </p>
      <div>
        <FaEdit onClick={() => editTodo(todo.id)} className="ms-2"/>

        <MdDelete onClick={() => deleteTodo(todo.id)} className="ms-2" />
      </div>
    </div>
  );
}
