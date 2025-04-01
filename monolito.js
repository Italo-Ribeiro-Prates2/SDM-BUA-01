const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [];
let pedidos = [];

// Listar todos os usuários

app.post('/usuarios', (req, res) => {
    const usuario = req.body
    usuarios.push(usuario);
    res.send({message: 'Usuário cadastrado com sucesso!', usuario});
});

app.get("/dados", (req, res) => {
    res.send({usuarios});
});


app.listen(3001, () => console.log("Servidor rodando na porta 3001"))


// Inserir um novo pedido
app.post('/pedidos', (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    res.send({message: 'Pedido cadastrado com sucesso!', pedido});
});

// Listar todos os pedidos
app.get('/dados-pedidos', (req, res) => {
    res.send({pedidos});
});