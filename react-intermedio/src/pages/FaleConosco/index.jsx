// react-intermedio\src\pages\FaleConosco\index.jsx

import './styles.css'

function FaleConosco() {
    function handleSubmit(even) {
        even.preventDefault();
        alert('Mensagem enviada com sucesso!');
    }
    return (
        <section className="fale">
            <h1>Fale Conosco</h1>
            <p>Tire suas dúvidas em um canal de Youtube muito bom e que ainda faz v</p>
            <form className='form' onSubmit={handleSubmit}>
                <div className='grid cols-3'>
                    <label className='field'>
                        <spam>Nome: </spam>
                        <input type="text" placeholder="Seu nome" required />
                    </label>
                    <label className='field'>
                        <spam>E-mail: </spam>
                        <input type="text" placeholder="Seu e-mail" required />
                    </label>
                    <label className='field'>
                        <spam>Telefone: </spam>
                        <input type="text" placeholder="Seu Telefone" required />
                    </label>
                    <label className='field'>
                        <spam>Assunto: </spam>
                        <input type="text" placeholder="Assunto" required />
                    </label>
                    <label className='field'>
                        <spam>Mensagem: </spam>
                        <input type="text" placeholder="Escreva sua mensagem aqui..." required />
                    </label>
                    <button className='btn primary' type="submit">Enviar</button>
                </div>
            </form>
        </section>
    )
}

export default FaleConosco;