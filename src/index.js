const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const todoRoutes = require('./routes/todoRoutes');
app.use('/api', todoRoutes);

app.use(express.json());

app.get('/', (request, response) => {
    response.send('To-Do List API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
