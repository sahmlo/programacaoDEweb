// react-intermedio/src/pages/Home/index.jsx

import './styles.css'
import office from '../../assets/office.png'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero__text">
                    <h1>Bem-vindos!</h1>
                    <p>
                        Unindo lógica, criatividade e paixão por programação, transformo ideias em soluções digitais únicas.
                    </p>

                    <hr />

                    <section className='features'>
                        <div className='grid cols-3'>
                            <div className='card'>
                                <h3>Prática de Programação</h3>
                                <p>
                                    Como estudante de Desenvolvimento de Sistemas, pratico lógica, resolução de problemas e
                                    criação de pequenos projetos que simulam situações reais. Cada desafio me ajuda a evoluir
                                    e aplicar os conceitos que aprendo na teoria.
                                </p>
                            </div>

                            <div className='card'>
                                <h3>Desenvolvimento Web</h3>
                                <p>
                                    Crio páginas e aplicações web utilizando HTML, CSS, JavaScript e outras tecnologias,
                                    aplicando os conceitos aprendidos em sala de aula em projetos práticos.
                                </p>
                            </div>

                            <div className='card'>
                                <h3>Explorando Novas Tecnologias</h3>
                                <p>
                                    Estudo constantemente novas ferramentas, linguagens e frameworks para ampliar minhas habilidades
                                    e aplicar soluções mais eficientes em projetos acadêmicos e pessoais.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className='testimonials'>
                    
                        <div className='socialProof__text'>
                            <h2>O que eu digo sobre</h2>
                            <p>"Foi uma prática bem interessante para meu aprendizado web. "</p>
                            <p>- Estudante Satisfeito</p>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Home;