import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";

export const TodoApp = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("toDos") || []);
  };
  const initialState = [];
  const [toDos, dispatch] = useReducer(todoReducer, initialState, init);

  const onNewTodo = (newTodo) => {
    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
  };

  const onDeleteTodo = (todo) => {
    const action = {
      type: "delete",
      payload: todo.id,
    };
    dispatch(action);
  };

  const onToggleTodo = (todo) => {
    const action = {
      type: "updateState",
      payload: todo.id,
    };
    dispatch(action);
  };

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
