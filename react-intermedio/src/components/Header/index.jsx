// react-intermedio/src/components/Header/index.jsx

import { Link, Navlink } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/guittersallyface.png';

function Header() {
    return (
        <header className="header">
            <div className="header__wrap">
                <Link to="/" className="brand">
                    <img src={logo} alt="Guitter Sally Face" />
                    <spam> Sally Face O MELHOR JOGO </spam>
                </Link>
                <nav className="nav">
                    <Navlink to="/servicos" className={({ isActive }) => isActive ? 'link active' : 'link' }>Serviços</Navlink>
                    <Navlink to="/sobre-nos" className={({ isActive }) => isActive ? 'link active' : 'link' }>Sobre nós</Navlink>
                    <Navlink to="/fale-conosco" className={({ isActive }) => isActive ? 'link active' : 'link' }>Fale conosco</Navlink>
                </nav>
            </div>

        </header>
    );
}

export default Header;