let todos = [];

const getAllTodos = () => todos;

const getTodoByID = (id) => todos.find(todo => todo.id === id);

const createTodo = (todo) => {
    todos.push(todo);
    return todo;
}

const updateTodo = (id, updatedTodo) => {
    todos = todos.map(todo => (todo.id === id ? updatedTodo : todo));
    return updatedTodo;
}

const deleteTodo = (id) => {
    todos = todos.filter(todo => todo.id !== id);
}

module.exports = {
    getAllTodos,
    getTodoByID,
    createTodo,
    updateTodo,
    deleteTodo
}
