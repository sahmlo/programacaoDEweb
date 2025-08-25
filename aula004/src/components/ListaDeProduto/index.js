// C:\Users\aluno.den\Downloads\JS\Programacao_de_Aplicativo-M2-1\aula004\src\components\ListaDeProduto\index.js
import React from "react";
import './styles.css';

const ListaDeProdutos = ({ itens = [] }) => {
    return (
        <ol className="lista-produtos">
            {itens.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ol>
    );
}

export default ListaDeProdutos;