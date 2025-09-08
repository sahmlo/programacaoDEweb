// src\components\InfoJogadores\index.jsx
import { useState } from 'react'
import './styles.css'
import logo from '../../assets/image/logo.png'

function InfoJogadores() {
    const [jogador, setJogador] = useState('')
    const [numero, setNumero] = useState('')

    const [listaJogadores, setListaJogadores] = useState([])

    function adicionarJogador(event) {
        event.preventDefault();
        setListaJogadores([...listaJogadores, { jogador, numero }])
        setJogador('')
        setNumero('')
    }

    return (
        <div className="info-jogadores">
            <img src={logo} alt="Seleção Brasileira" className="logo" />
            <h2>Cadastro dos Jogadores</h2>
            <form onSubmit={adicionarJogador}>
                <div>
                    <label>Nome do Jogador:</label>
                    <input  type="text" 
                    value={jogador} 
                    onChange={(e) => setJogador(e.target.value)} 
                    required />
                </div>
                <div>
                    <label>Número da Camisa:</label>
                    <input  type="number" 
                    value={numero} 
                    onChange={(e) => setNumero(e.target.value)} 
                    required />
                </div>
                <button type="submit">Adicionar Jogador</button>
            </form>
            <hr />
            <h3>Lista de Jogadores</h3>
            <ul>
                {listaJogadores.map((item, index) => (
                    <li key={index}>{item.jogador} - Camisa nº {item.numero}</li>
                ))}
            </ul>
        </div>
            );
}

export default InfoJogadores;