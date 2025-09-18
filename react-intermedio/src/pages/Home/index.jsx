// react-intermedio\src\pages\Home\index.jsx

import './styles.css'

function Home() {
  return (
    <div className="home">
    <section className="hero">
        <div className="hero__text">
            <h1>Bem-vindos ao meu mundo Tech com uma pitada de Jogos Indie</h1>
            <p>Explorando tecnologia, desenvolvimento web e jogos indie com paixão e criatividade.</p>
            <div className="hero__buttons">
                <Link to="/servicos" className="btn primary">Serviços</Link>
                <Link to="/faleconosco" className="btn secondary">Fale Conosco</Link>
            </div>
            <div className="hero__image">
                <img src={hero} alt="Tech and Gaming" />
            </div>
            <section className='features'>
                <div className='grid cols-3'>
                    <div className='card'>
                        <h3>Desenvolvimento Web</h3>
                        <p>Criação de sites e aplicações web modernas e responsivas.</p>
                    </div>
                    <div className='card'>
                        <h3>Jogos Indie</h3>
                        <p>Desenvolvimento e análise de jogos independentes.</p>
                    </div>
                    <div className='card'>
                        <h3>Tecnologia</h3>
                        <p>Exploração das últimas tendências e inovações tecnológicas.</p>
                    </div>
                </div>
            </section>
            <section className='testimonials'>
                <div className='socialProof__image'>
                    <img src={office} alt="Meus clientes" />
                </div>
                <div className='socialProof__text'>
                    <h2>O que nossos clientes dizem</h2>
                    <p>"Excelente serviço e suporte! Transformaram nossa presença online."</p>
                    <p>- Cliente Satisfeito</p>
                </div>
            </section>
        </div>

    </section>
    </div>
  )
}