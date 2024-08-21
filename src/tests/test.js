const request = require('supertest');
const express = require('express');
const todoRoutes = require('../routes/todoRoutes');

const app = express();
app.use(express.json());
app.use('/api', todoRoutes);

// teste pra retornar todos
describe('Todo API', () => {
    it('tem que pegar all todos', async() => {
        const response = await request(app).get('/api/todos');
        expect(response.statusCode).toEqual(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
// teste pra criar uma tarefa nova
    it('tem que criar uma nova todo', async() => {
        const response = await request(app)
            .post('/api/todos')
            .send({ title: 'Test todo', description: 'Testando criação de todo' });
        expect(response.statusCode).toEqual(201);
        expect(response.body).toHaveProperty('title', 'Test todo');
    });
});
