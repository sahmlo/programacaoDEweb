const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('db_prova', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Contato = sequelize.define('Contato', {
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    telefone: {
        type: DataTypes.STRING,
    },
    mensagem: {
        type: DataTypes.TEXT,
    }
},
    {
        tableName: 'clientes',
    });

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get('/api/contatos', async (req, res) => {
    try {
        const todosContatos = await Contato.findAll();
        res.json(todosContatos);
    } catch (error) {
        console.error('Erro ao buscar contatos:', error);
        // Envia informação mínima ao cliente e registra detalhes no servidor
        res.status(500).json({ mensagem: 'Erro ao buscar contatos no banco de dados.' });
    }
});

app.post('/api/contatos', async (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;
    try {
        const novoContato = await Contato.create({ nome, email, telefone, mensagem });
        res.status(201).json({ mensagem: 'Contato criado com sucesso!' });
    } catch (error) {
        console.error('Erro ao criar contato:', error);
        // Retorna mensagem genérica para o cliente
        res.status(400).json({ mensagem: 'Erro ao criar contato.' });
    }
});

// Autentica a conexão antes de sincronizar os modelos e iniciar o servidor.
(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexão com o banco de dados autenticada.');
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`🔌Servidor rodando na porta ${PORT}`);
            console.log('🚀 Conectado ao banco de dados MySQL');
        });
    } catch (error) {
        // Log detalhado para diagnóstico (inclui SQL original quando disponível)
        console.error('❌ Erro ao conectar/sincronizar com o banco de dados:');
        console.error(error && error.original ? error.original : error);
        process.exit(1); // encerra o processo para evitar servidor rodando sem DB
    }
})();