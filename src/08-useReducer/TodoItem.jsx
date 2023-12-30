import React from "react";

export const TodoItem = ({ todo, onDelete, onToggleTodo }) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between"
      key={todo.id}
    >
      <span
        className={`align-self-center ${
          todo.done
            ? "text-decoration-line-through"
            : ""
        }`}
        onClick={() => onToggleTodo(todo)}
      >
        {" "}
        {todo.description}
      </span>
      <span className="align-self-center"> {todo.done.toString()}</span>
      <button
        className="btn btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </li>
  );
};
