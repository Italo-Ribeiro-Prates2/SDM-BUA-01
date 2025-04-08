const express = require('express');//comuninca com servidores usando metodo http
const axios = require('axios'); //comunicar com duas api distintas

const app = express(); //instancia do express

app.use(express.json()); //para receber json no body da requisição

app.post('/pedidos', async (req, res) => { 
    const pedido = req.body; //pega o body da requisição
     console.log('Pedido recebido:', pedido); //log do pedido recebido
     res.send({message: 'Pedido recebido com sucesso!', pedido}); //resposta para o cliente

    });

    app.listen(4000, () => {console.log('Servidor rodando na porta 4000')}); //inicia o servidor na porta 4000
