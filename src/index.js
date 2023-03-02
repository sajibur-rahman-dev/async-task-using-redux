const { createStore, applyMiddleware } = require("redux");
const { asyncActionMiddleware } = require("./middleware");
const { fetchTodo, fetchUsers } = require("./utlis");

// intial state 

const intialState = {
    todos:[],
    users:[],
}

// reducer 

const reducer = (state = intialState,action) => {
    switch (action.type) {
        case "todos/todoAdded":
            return {
                ...state,
                todos:[...state.todos,...action.payload],
            }

            case "todos/usersAdded":
                return {
                    ...state,
                    users:[...state.users,...action.payload],
                }
        default:
            return state;
    }
}

// store 

const store = createStore(reducer,applyMiddleware(asyncActionMiddleware));

// subscribe to the store 

store.subscribe(() => {
    console.log(store.getState());
});

// dispatch  fetch data action

store.dispatch(fetchTodo);
store.dispatch(fetchUsers);


