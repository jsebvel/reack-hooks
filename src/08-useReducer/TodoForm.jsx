import React, { useState } from "react";

export const TodoForm = ({ onNewTodo }) => {
  const [newDescription, setNewDescription] = useState("");
  return (
    <form>
      <input
        type="text"
        placeholder="What you want to do?"
        className="form-control"
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
        onClick={(e) => {
          e.preventDefault();
          if (newDescription.length > 0) {
            onNewTodo({
              id: new Date().getTime() * 3,
              description: newDescription,
              done: false,
            });
          }
        }}
      >
        Add new Task
      </button>
    </form>
  );
};
