// react-intermedio/src/pages/FaleConosco/index.jsx

import './styles.css'

function FaleConosco() {
    function handleSubmit(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    }
    return (
        <section className="fale">
            <h1>Fale Conosco</h1>
            <p>
                Acredito que todo contato é uma oportunidade de aprendizado. Seja para trocar
                experiências, compartilhar ideias ou iniciar uma parceria, sua mensagem será
                muito importante para mim. Vamos construir soluções e evoluir juntos!
            </p>

            <form className='form' onSubmit={handleSubmit}>
                <div className='grid cols-3'>
                    <label className='field'>
                        <span>Nome: </span>
                        <input type="text" placeholder="Seu nome" required />
                    </label>
                    <label className='field'>
                        <span>E-mail: </span>
                        <input type="email" placeholder="Seu e-mail" required />
                    </label>
                    <label className='field'>
                        <span>Telefone: </span>
                        <input type="tel" placeholder="Seu Telefone" required />
                    </label>
                    <label className='field'>
                        <span>Assunto: </span>
                        <input type="text" placeholder="Assunto" required />
                    </label>
                    <label className='field'>
                        <span>Mensagem: </span>
                        <textarea placeholder="Escreva sua mensagem aqui..." required />
                    </label>
                    <button className='btn primary' type="submit">Enviar</button>
                </div>
            </form>
        </section>
    )
}

export default FaleConosco;