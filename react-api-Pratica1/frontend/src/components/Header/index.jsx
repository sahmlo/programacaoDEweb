// frontend\src\components\Header\index.jsx
import 'styles.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="header-container">
            <div className= 'logo'>Sistema de Clientes</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/lista">Lista</Link>
            </nav>
        </header>
    );
}

export default Header;