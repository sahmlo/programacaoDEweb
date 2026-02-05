// frontend\src\components\Footer\index.jsx
import 'styles.css';

export function Footer() {
    return (
        <footer className="footer-container">
            <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.
                <br/> Desenvolvido pela Bancada McDonaldes.
            </p>
        </footer>
    );
}

export default Footer;