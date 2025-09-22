// react-intermedio\src\components\Footer\index.jsx

import './styles.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrap">
                <strong>  </strong>
            </div>
            <div>
                Desenvolvido por um estudante para teste de front-end
            </div>
            <div className='copyright'>
                © {new Date().getFullYear()} Todos os direitos reservados.
            </div>

        </footer>
    );
}

export default Footer;