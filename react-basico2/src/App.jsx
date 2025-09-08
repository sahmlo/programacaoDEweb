
import { useState } from 'react';
import logo from './assets/images/logo.png';
import './App.css';
import InfoCliente from './components/InfoCliente';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <InfoCliente />
    </>
  )
}

export default App
