const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('db_reacteback', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING, 
        allowNull: false 
    },
    email: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true 
    }
});

const app = express(); 
app.use(cors()); 
app.use(express.json()); 

const port = 3000; 

app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

app.get('/usuarios', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});

app.post('/usuarios', async (req, res) => {
    try {
        const { nome, email } = req.body;
        const novoUsuario = await Usuario.create({ nome, email });
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ mensagem: "E-mail já cadastrado." });
    }
});

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🚀API rodando em http://localhost:${port}`);
        console.log('🚀Conectado ao banco de dados MySQL.');
    });
}).catch(err => {
    console.error('Não foi possível conectar ao banco de dados:');
});