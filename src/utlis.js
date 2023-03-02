const fetch = require('node-fetch');

const fetchTodo = async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const todos = await response.json();
        dispatch({
            type:"todos/todoAdded",
            payload:todos,
        })
}

const fetchUsers = async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        dispatch({
            type:"todos/usersAdded",
            payload:users,
        });
}


module.exports = {
    fetchTodo,
    fetchUsers,
}