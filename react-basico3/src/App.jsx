import { useState } from 'react';
import './App.css';
import CadastrarUsuario from './components/CadastrarUsuario';
import ListarUsuarios from './components/ListarUsuarios';

function App() {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  function adicionarUsuario(usuario) {
    setListaUsuarios([...listaUsuarios, usuario]);
  }

  return (
    <>
      <CadastrarUsuario adicionarUsuario={adicionarUsuario} />
      <ListarUsuarios listaUsuarios={listaUsuarios} />
    </>
  );
}

export default App;