// react-basico3\src\components\CadastrarUsuario\index.jsx

import { useState } from 'react';
import './styles.css';

function CadastrarUsuario({ adicionarUsuario }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');

    function cadastrarUsuario(event) {
        event.preventDefault();
        adicionarUsuario({ nome, email, numero });
        setNome('');
        setEmail('');
        setNumero('');
    }

    return (
        <div className="cadastrar-usuario">
            <h2>Cadastrar Usuário</h2>
            <form onSubmit={cadastrarUsuario}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Número"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastrarUsuario;