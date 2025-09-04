/* src\componets\InfoEstudantes\index.jsx */

import { useState } from 'react'
import './styles.css'
import AdicionarEstudantes from '../AdicionarEstudantes';

function InfoEstudantes() {
  const [estudantes, setEstudantes] = useState([]);

  const adicionarEstudantes = (novoEstudante) => {
    setEstudantes([...estudantes, novoEstudante]);
  }

  return (
    <>
      <AdicionarEstudantes onAdicionarEstudantes={adicionarEstudantes}/>
      <h2>Lista de Estudantes</h2>
      {
        estudantes.length === 0 ? (
          <p>Nenhum estudante adicionado.</p>
        ) : (
          <ul>
            {estudantes.map((estudante, index) => (
              <li key={index}>
                Nome: {estudante.nome} <br/> 
                Idade: {estudante.idade} anos
              </li>
            ))}
          </ul>
        )
      }
    </>
  )
}

export default InfoEstudantes;