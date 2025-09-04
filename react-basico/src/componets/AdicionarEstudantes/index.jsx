// src\componets\AdicionarEstudantes\index.jsx
import { useState } from 'react';
import './style.css';

function AdicionarEstudantes({onAdicionarEstudantes}) {
    const [nome, setNome] = useState('');
    const[idade, setIdade] = useState('');

    const addEstudantes = (event) => {
        event.preventDefault();
        onAdicionarEstudantes({nome, idade});
        setNome('');
        setIdade('');
    }
    return (
        <>  
        <form onSubmit={addEstudantes}>
            <h2>Adicionar Estudantes</h2>
            <input 
                type="text" 
                placeholder="Nome do Estudante"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
            <input 
                type="number" 
                placeholder="Idade do Estudante"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                />
            <button type="submit">Adicionar</button>
        </form>
        </>
    );
}

export default AdicionarEstudantes;
