const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// Criando conexão com o banco de dados MySQL.
const sequelize = new Sequelize('db_atividade', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    formapagamento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

// Definindo o modelo para tabela no banco de dados.
const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    validade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

    
const app = express(); 
app.use(cors()); 
app.use(express.json()); 

const port = 3000; 


app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

app.get('/clientes', async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
});


app.post('/clientes', async (req, res) => {
    try {
        const { nome, email, telefone, formapagamento, endereco } = req.body;
        const novoCliente = await Cliente.create({ nome, email, telefone, formapagamento, endereco });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ message: "Cliente já cadastrado." });
    }
});

app.get('/produtos', async (req, res) => {
    const produtos = await Produto.findAll();
    res.json(produtos);
});

app.post('/produtos', async (req, res) => {
    try {
        const { nome, lote, validade, categoria, quantidade } = req.body;
        const novoProduto = await Produto.create({ nome, lote, validade, categoria, quantidade });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(400).json({ message: "Produto já cadastrado." });
    }
});


// SINCRONIZA O MODELO COM O BANCO DE DADOS E INICIA O SERVIDOR
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🚀API rodando em http://localhost:${port}`);
        console.log('🚀Conectado ao banco de dados MySQL.');
    });
}).catch(err => {
    console.error('Não foi possível conectar ao banco de dados:');
});