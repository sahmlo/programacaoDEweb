// aula004\src\components\AdicionarProduto\index.js
import React, { useState } from "react";
import './styles.css';

const AdicionarProduto = ({ onAdd }) => {
    const [texto,setTexto] = useState('');

    const enviar = (e) => {
        e.preventDefault();
        if(texto.trim()) {
            onAdd(texto);
            setTexto('');
        }
    };
    
    return (
        <form className="form" onSubmit={enviar}>
            <input
                type="text"
                placeholder="Adicionar personagens..."
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}


export default AdicionarProduto;