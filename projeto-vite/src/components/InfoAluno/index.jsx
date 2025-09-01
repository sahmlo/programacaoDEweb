// projeto-vite\src\components\InfoAluno\index.jsx

import './styles.css';

function InfoAluno() {
    const nome = 'Sara Melo'
    const idade = '21'
    const curso = 'Desenvolvimento de Sistemas'
    return (
        <div className="info-aluno">
            <h2>Informações do Estudante</h2>
            <p>Nome: { nome }</p>
            <p>Idade: { idade }</p>
            <p>Curso: { curso }</p>
        </div>
    );
}

export default InfoAluno;