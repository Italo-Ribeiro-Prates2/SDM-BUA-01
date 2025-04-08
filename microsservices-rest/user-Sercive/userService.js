    const express = require('express');//comuninca com servidores usando metodo http
    const axios = require('axios'); //comunicar com duas api distintas
    
    const app = express(); //instancia do express
    
    app.use(express.json()); //para receber json no body da requisição
    
    app.post('/usuarios', async (req, res) => { 
        const usuario = req.body; //pega o body da requisição
    
        await axios.post('http://localhost:4000/pedidos', {userId: usuario.id}) //faz a requisição para o microserviço de usuarios
    
        res.send({message: 'Usuario criado com sucesso!'}); //resposta para o cliente
        });
    
    app.listen(3000, () => {console.log('Servidor rodando na porta 3000')});
