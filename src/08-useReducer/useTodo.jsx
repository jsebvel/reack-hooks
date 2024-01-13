import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodo = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("toDos") || []);
  };
  const [toDos, dispatch] = useReducer(todoReducer, init, init);

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

  return {
    toDos,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
  };
};
