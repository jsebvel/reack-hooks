export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case "ABC":
            throw new Error("Action.type === ABC is not implemented yet");
        case "add":
            return [...initialState, action.payload];
        case "updateState": 
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        case "delete":
            return initialState.filter(todo => todo.id !== action.payload);
        default:
            return initialState;
    }
}