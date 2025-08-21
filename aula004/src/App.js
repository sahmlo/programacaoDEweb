import './App.css';
import { useState } from 'react';

function App() {
  const [produto, setProduto] = useState ('');
  const [produtos, setProdutos] = useState (["Computador", "Celular", "Notebook"]);

  const adicionarProduto = () => {
    if (produtos.includes(produto)) {
      alert ("Produto já Existe!")
      return;
    }
    setProdutos([...produtos, produto]);
    setProduto('');

  };
  return (
<div className="App">
      <h1>Adicionar Produtos</h1>
      <input 
        type="text" 
        value={produto} 
        onChange={(e) => setProduto(e.target.value)} 
        placeholder="Digite o nome do produto"
      />
      <button onClick={adicionarProduto}>Adicionar Produto</button>
      
      <hr />
      <h2>Lista de Produtos</h2>
      <ul>
        {produtos.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>   
    </div>
  );
}

export default App;