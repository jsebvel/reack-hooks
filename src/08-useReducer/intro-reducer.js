const initialState = [{
    id: 1,
    todo: "get soul stone",
    done: false,
}];

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === "[TODO] Add todo") {
        return [...state, action.payload];
    }

    return state;
};

let todos = todoReducer();

console.log("TODOS", todos);

const newTodo = {
    id: 2,
    todo: "get strength stone",
    done: false,
};

const addTodoAction = {
    type: "[TODO] Add todo",
    payload: newTodo
};

todos = todoReducer(todos, addTodoAction);

console.log("TODO with action", todos);
