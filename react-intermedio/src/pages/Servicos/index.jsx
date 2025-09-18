// react-intermedio\src\pages\Servicos\index.jsx

import './styles.css'

function Servicos() {
  return (
    <section className="servicos">
        <h1>Serviços</h1>
        <p>Conheça nossos serviços</p>
       
        <div className='grid cols-3'>
            <div className='card'>
                <h3>Desenvolvimento Web</h3>
                <h4>A gente cria o mapa!</h4>
                <p>
                    Transformo suas ideias em experiências digitais. 
                    Crio sites e aplicações web personalizadas, responsivas e otimizadas,
                    como se estivesse programando uma nova fase de um jogo,
                    com cada linha de código no lugar certo.
                    </p>
            </div>
            <div className='card'>
                <h3>Marketing Digital</h3>
                <h4>Aumente seu EXP!</h4>
                <p>Não adianta ter um projeto incrível se ninguém o conhece. 
                    Eu ajudo a montar a estratégia para aumentar sua presença online, 
                    fazendo sua marca ser notada e seu público crescer. 
                    Pense nisso como as melhores estratégias para upar de nível e dominar o jogo.</p>
            </div>
            <div className='card'>
                <h3>Consultoria de TI</h3>
                <h4>Seu build otimizado!</h4>
                <p>A tecnologia pode ser complexa, mas eu estou aqui para ser seu guia. 
                    Ofereço consultoria especializada para otimizar seus recursos tecnológicos, 
                    encontrar as melhores soluções e evitar os bugs que podem te atrasar. 
                    É como escolher o build perfeito para vencer o boss final.</p>
            </div>
        </div>
    </section>
    )
}

export default Servicos;