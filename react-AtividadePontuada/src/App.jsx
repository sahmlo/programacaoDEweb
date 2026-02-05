import { useState } from 'react'
import './App.css'
import InfoJogadores from './components/InfoJogadores'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InfoJogadores />
    </>
  )
}

export default App