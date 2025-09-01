import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem'
import InfoAluno from './components/InfoAluno'
import InfoCurso from './components/InfoCurso'

function App() {

  return (
    <>
      <div>
        <h1></h1>
        <Mensagem />
        <hr />
        <InfoAluno />
        <hr />
        <InfoCurso />
      </div> 
    </>
  )
}

export default App
