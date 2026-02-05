// AtividadePontuada\frontend\src\pages\Home\index.jsx

import { Link } from 'react-router-dom';
import './styles.css';
import hero from '../../assets/logo.png';
import atendimento from '../../assets/image.png';

function Home() {
    return (
        <div className='home'>
            {/* Seção principal (Hero) */}
            <section className='hero'>
                <div className='hero__text'>
                    <h1>Farmácia Popular — Cuidando de Você e da Sua Família</h1>
                    <p>
                        Saúde acessível e atendimento humanizado. Aqui você encontra medicamentos com descontos
                        especiais, testes rápidos e serviços farmacêuticos de qualidade. Tudo com o cuidado que você merece.
                    </p>
                    <div className='hero__cta'>
                        <Link to="/servicos" className='btn primary'>Conheça Nossos Serviços</Link>
                        <Link to="/fale-conosco" className='btn'>Fale Conosco</Link>
                    </div>
                </div>

                <div className='hero__image'>
                    <img src={hero} alt="Logo da Farmácia Popular" />
                </div>
            </section>

            {/* Seção de vantagens */}
            <section className='features'>
                <h2>Por que escolher a Farmácia Popular?</h2>
                <div className='grid cols-3'>
                    <div className='card'>
                        <h3>Medicamentos com Desconto</h3>
                        <p>
                            Aproveite o programa Farmácia Popular com até 90% de desconto em medicamentos essenciais
                            e gratuitos para hipertensão, diabetes e asma.
                        </p>
                    </div>

                    <div className='card'>
                        <h3>Serviços Farmacêuticos</h3>
                        <p>
                            Oferecemos aferição de pressão, glicemia, aplicação de injetáveis e testes rápidos, realizados
                            por profissionais qualificados e com segurança.
                        </p>
                    </div>

                    <div className='card'>
                        <h3>Atendimento Humanizado</h3>
                        <p>
                            Nossa equipe está pronta para orientar você sobre o uso correto dos medicamentos e cuidados
                            com a saúde no dia a dia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Seção institucional */}
            <section className='socialProof'>
                <div className='socialProof__image'>
                    <img src={atendimento} alt='Atendimento na Farmácia Popular' />
                </div>
                <div className='socialProof__text'>
                    <h2>Mais de 15 anos cuidando da saúde da comunidade</h2>
                    <p>
                        Presente em diversas cidades do Brasil, a Farmácia Popular é referência em atendimento acessível,
                        com profissionais que se dedicam ao bem-estar de cada cliente.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Home;