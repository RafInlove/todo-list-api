const express = require('express');
const router = express.Router();
const { getAllTodos, getTodoByID, createTodo, updateTodo, deleteTodo } = require('../models/todo');

router.get('/todos', (request, response) => {
    response.json(getAllTodos());
});

router.get('/todos/:id', (request, response) => {
    const todo = getTodoByID(request.params.id);

    if (todo) {
        response.json(todo);
    } else {
        response.status(404).send('Tarefa não encontrada');
    }
});

router.post('/todos', (request, response) => {
    const newTodo = {id: Date.now().toString(), ...request.body }
    createTodo(newTodo);
    response.status(201).json(newTodo);
});

router.put('/todos/:id', (resquest, response) => {
    const updatedTodo = {id: express.request.params.id, ...request.body}
    updatedTodo(request.params.id, updateTodo);
    response.json(updateTodo);
});

router.delete('/todos/:id', (request, response) => {
    deleteTodo(request.params.id);
    response.status(204).send();
});

module.exports = router;