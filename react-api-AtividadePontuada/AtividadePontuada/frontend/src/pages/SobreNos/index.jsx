import './styles.css';

function SobreNos() {
    return (
        <section className='sobre'>
            <h1>Sobre Nós</h1>
            <h2>Bem-vindo à Farmácia Popular</h2>

            <p>
                Há mais de 15 anos cuidando da saúde da nossa comunidade, a <strong>Farmácia Popular</strong> nasceu com o propósito 
                de tornar o acesso à saúde mais simples, humano e acessível para todos.
            </p>

            <p>
                Trabalhamos em parceria com o Programa Farmácia Popular do Governo Federal, oferecendo medicamentos 
                gratuitos ou com até 90% de desconto para doenças como hipertensão, diabetes e asma.
            </p>

            <p>
                Nosso compromisso é com o bem-estar das pessoas. Contamos com uma equipe de farmacêuticos e 
                atendentes dedicados a oferecer orientação, segurança e um atendimento acolhedor.
            </p>

            <p>
                Aqui, cada cliente é tratado com respeito e atenção, porque acreditamos que cuidar da saúde é cuidar da vida.
            </p>

            <ul>
                <li><strong>Missão:</strong> Promover o acesso à saúde e medicamentos de qualidade a preços acessíveis.</li>
                <li><strong>Visão:</strong> Ser referência em atendimento farmacêutico e cuidado com a comunidade.</li>
                <li><strong>Valores:</strong> Ética, Empatia, Compromisso com a Saúde, Sustentabilidade e Atendimento Humanizado.</li>
            </ul>

            <div className='horarios'>
                <h3>Horário de Funcionamento</h3>
                <p>Segunda a Sexta: 8h às 20h</p>
                <p>Sábado: 8h às 18h</p>
                <p>Domingo e Feriados: 8h às 13h</p>
            </div>
        </section>
    );
}

export default SobreNos;