const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// Criando conexão com o banco de dados MySQL.
const sequelize = new Sequelize('db_cadastro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definindo o modelo para tabela no banco de dados.
const Funcionario = sequelize.define('Funcionario', {
    nome: {
        type: DataTypes.STRING, 
        allowNull: false 
    },
    cpf: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true
    },
    rg: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true
    },
    matricula: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true
    },
    datadenascimento: {
        type: DataTypes.DATEONLY, 
        allowNull: false
    },
    salario: {
        type: DataTypes.DOUBLE, 
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true 
    },
});

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
        type: DataTypes.DATEONLY,
        allowNull: false
    },
});

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    datadenascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    protocolodeatendimento: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
});
    
const app = express(); 
app.use(cors()); 
app.use(express.json()); 

const port = 3000; 


app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

app.get('/funcionarios', async (req, res) => {
    const funcionarios = await Funcionario.findAll();
    res.json(funcionarios);
});


app.post('/funcionarios', async (req, res) => {
    try {
        const { nome, cpf, rg, matricula, datadenascimento, salario, telefone, email } = req.body;
        const novoFuncionario = await Usuario.create({ nome, cpf, rg, matricula, datadenascimento, salario, telefone, email });
        res.status(201).json(novoFuncionario);
    } catch (error) {
        res.status(400).json({ message: "Funcionário já cadastrado." });
    }
});

app.get('/produtos', async (req, res) => {
    const produtos = await Produto.findAll();
    res.json(produtos);
});


app.post('/produtos', async (req, res) => {
    try {
        const { nome, lote, validade } = req.body;
        const novoProduto = await Produto.create({ nome, lote, validade });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(400).json({ message: "Produto já cadastrado." });
    }
});

app.get('/clientes', async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
});


app.post('/clientes', async (req, res) => {
    try {
        const { nome, datadenascimento, protocolodeatendimento } = req.body;
        const novoCliente = await Cliente.create({ nome, datadenascimento, protocolodeatendimento });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ message: "Cliente já cadastrado." });
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