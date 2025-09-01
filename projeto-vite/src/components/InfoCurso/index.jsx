// projeto-vite\src\components\InfoCurso\index.jsx
import { useState } from 'react';
import './styles.css';

function InfoCurso() {
    const nome = 'Desenvolvimento de Sistemas';
    const cargahoraria = '1.200';
    const local = 'SENAI - Dendezeiros';
    const inicio = '2025';
    const termino = '2026';

    const [curso, setCurso] = useState();
    return (
        <div className="info-curso">
            <h2>Informações do Curso</h2>
            <p>Nome: { nome }</p>
            <p>Carga Horária: { cargahoraria } horas</p>
            <p>Local: { local }</p>
            <p>Início: { inicio }</p>
            <p>Término: { termino }</p>
        </div>
    );  
}

export default InfoCurso;