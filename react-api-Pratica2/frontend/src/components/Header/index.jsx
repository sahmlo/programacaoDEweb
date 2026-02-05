// frontend\src\components\Header\index.jsx

import 'styles.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="header-container">
            <div>Gerenciamento de Usuários</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cadastro">Cadastrar</Link>
                <Link to="/lista">Listar Usuários</Link>
            </nav>
        </header>
    );
}

export default Header;