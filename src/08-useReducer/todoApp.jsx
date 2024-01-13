import React, { useEffect } from "react";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { useTodo } from "./useTodo";

export const TodoApp = () => {
 
  const { toDos, onNewTodo, onDeleteTodo, onToggleTodo } = useTodo();

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);
  return (
    <>
      <h1>
        TODO APP: 10 - <small>Pending: 5</small>{" "}
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={toDos}
            onDelete={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <TodoForm onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
