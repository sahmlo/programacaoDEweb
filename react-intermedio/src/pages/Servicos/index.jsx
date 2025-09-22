// react-intermedio\src\pages\Servicos\index.jsx

import './styles.css'

function Servicos() {
    return (
        <section className="servicos">
            <h1>Serviços</h1>

            <div className='grid cols-3'>
                <div className="card">
                    <h3>Lógica de Programação</h3>
                    <h4>A base de todo jogo!</h4>
                    <p>
                        Assim como um jogo precisa de mecânicas bem definidas,
                        todo sistema começa com lógica.
                        Resolver problemas e encontrar soluções criativas me lembra
                        escolher a melhor estratégia para enfrentar um boss em um RPG
                        ou evitar armadilhas em um jogo de terror indie.
                        É aqui que tudo começa, e cada bug corrigido é como vencer mais um obstáculo.
                    </p>
                </div>

                <div className="card">
                    <h3>Desenvolvimento Web</h3>
                    <h4>Construindo mundos digitais!</h4>
                    <p>
                        Como estudante de Desenvolvimento de Sistemas, gosto de transformar ideias em projetos reais.
                        Penso no código como blocos do Minecraft: cada detalhe precisa estar no lugar para formar algo único.
                        Crio páginas e aplicações como se fosse explorar um novo mapa em um jogo de RPG,
                        aprendendo a cada linha de código e evoluindo minhas habilidades.
                    </p>
                </div>

                <div className="card">
                    <h3>Projetos Acadêmicos</h3>
                    <h4>Missões de aprendizado!</h4>
                    <p>
                        Cada trabalho da faculdade é como uma nova fase: desafiador, mas recompensador.
                        Já explorei desde páginas simples até sistemas que simulam problemas reais,
                        sempre encarando como uma oportunidade de treinar lógica, trabalhar em equipe
                        e experimentar novas ferramentas. É como completar quests que me preparam para os próximos desafios.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Servicos;