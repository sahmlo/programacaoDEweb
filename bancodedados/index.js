const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// Configuração do Sequelize para conectar ao banco de dados MySQL.
const sequelize = new Sequelize('db_aula', 'root', '', {
    host: 'localhost', 
    dialect:'mysql'  
});

// Definição da tabela de Usuários.
const usuario = sequelize.define('usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Configuração do Servidor Express.
const app = express(); // Criação do app Express
app.use(cors()); // Habilita CORS para permitir requisições do frontend.
app.use(express.json()); // Middleware para parsear JSON no corpo das requisições.
const port = 3000; // Porta onde o servidor irá escutar'

// Criando as rotas da API.
// Rota para listar todos os usuários e adicionar um novo usuário.
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários' });
    }   
});

app.post('/usuarios', async (req, res) => {
    try {
        const {nome, email, telefone} = req.body;
        const novoUsuario = await usuario.create({ nome, email, telefone });
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ message: 'Verificar se o e-mail já existe.' });
    }
}); 

// Inicia o servidor após sicronizar criar tabela no banco de dados.
sequelize.sync().then(() => {
    // Criar a tabela no banco de dados e iniciar o servidor.
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`); //Crase
        console.log('Conectado ao banco de dados MySQL');
    });
}).catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
});