// projeto008/src/pages/Servicos/index.jsx

import React from 'react';
import './styles.css';

function Servicos() {
    return (
        <section className='servicos'>
            <h1>Nossos Serviços</h1>
            <p className='lead'>
                Cuidamos da sua saúde com qualidade, atenção e preços acessíveis.
                Confira os principais serviços oferecidos pela Farmácia Popular.
            </p>

            <div className='grid cols-3'>

                {/* Card 1 - Aferição de Pressão Arterial */}
                <div className='card'>
                    <h3>Aferição de Pressão Arterial</h3>
                    <p>
                        Monitore sua pressão com equipamentos calibrados e profissionais capacitados.
                        Um passo simples que faz toda a diferença na sua saúde.
                    </p>
                </div>

                {/* Card 2 - Aplicação de Injetáveis */}
                <div className='card'>
                    <h3>Aplicação de Injetáveis</h3>
                    <p>
                        Realizamos aplicação de medicamentos injetáveis mediante prescrição médica,
                        seguindo todos os protocolos de segurança e higiene.
                    </p>
                </div>

                {/* Card 3 - Testes Rápidos */}
                <div className='card'>
                    <h3>Testes Rápidos</h3>
                    <p>
                        Faça seus testes rápidos para glicemia, COVID-19, colesterol, gravidez e mais,
                        com resultados em poucos minutos e toda a orientação necessária.
                    </p>
                </div>

                {/* Card 4 - Orientação Farmacêutica */}
                <div className='card'>
                    <h3>Orientação Farmacêutica</h3>
                    <p>
                        Nosso farmacêutico está disponível para esclarecer dúvidas sobre o uso correto
                        dos medicamentos, possíveis interações e tratamentos contínuos.
                    </p>
                </div>

                {/* Card 5 - Medicamentos com Desconto */}
                <div className='card'>
                    <h3>Medicamentos com Desconto</h3>
                    <p>
                        Aproveite o programa Farmácia Popular com descontos de até 90% e medicamentos
                        gratuitos para hipertensão, diabetes e asma.
                    </p>
                </div>

                {/* Card 6 - Vacinação */}
                <div className='card'>
                    <h3>Vacinação</h3>
                    <p>
                        Aplicamos vacinas sazonais e de rotina com segurança, em ambiente adequado e com
                        equipe treinada. Proteja-se e mantenha sua imunização em dia.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Servicos;