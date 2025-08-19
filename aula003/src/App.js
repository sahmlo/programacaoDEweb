import './App.css';
import { useState } from 'react';
function App() {
  // Cria uma variavel e um tetter (forma de adicionar dados) para o usuário.
  const[usuario, setUsuario] = useState('');
  
  // Cria uma variavel e um tetter (forma de adicionar dados) para o usuário.
  // Inicializa a lista com alguns usuários pré definido.
  const[usuarios, setUsuarios] = useState(["Ana", "Bruno", "Carlos"]);
// Funçaõ para verificar se o usuário já existe e adiciona o usuário na lista. 
  const adicionarUsuario = () => {
    // Se o usuário existir na lista, exibe um alerta.
    if(usuarios.includes(usuario)){
      alert("Usuário já existe!");
      return;
    }
    // Se não existir, adiciona o usuário a lista e limpa o campo de input.
    // Adiciona o novo usuário na lista de usuários.
    setUsuarios([...usuarios, usuario]);
    setUsuario('');

  };
  
  return(
    <div className="App">
      <h1>Adicionar usuários</h1>
      <input 
        type="text" 
        value={usuario} 
        onChange={(e) => setUsuario(e.target.value)} 
        placeholder="Digite um nome de usuário"
      />
      <button onClick={adicionarUsuario}>Adicionar Usuário</button>
      
      <hr />
      <h2>Lista de Usuários</h2>
      <ol>
        {usuarios.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ol>   
    </div>
  )

}

export default App;