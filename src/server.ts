import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({message: 'Hello World'})
});

app.post('/', (req, res) => {
    return res.json({message: 'Os Dados foram salvos com sucesso!'})
});

app.listen(5500, () => console.log('hi'));