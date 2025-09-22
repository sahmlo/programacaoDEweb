import { Link, NavLink } from 'react-router-dom'; 
import './styles.css';
import logo from '../../assets/gameover.png';

function Header() {
    return (
        <header className="header">
            <div className="header__wrap">
                    <Link to="/" className="brand">
                        <span>Home</span>
                    </Link>
                    <img src={logo} alt="Game Over" className="header-logo" />
                    <nav className="nav">
                        <NavLink
                            to="/servicos"
                            className={({ isActive }) => isActive ? 'link active' : 'link'}>
                            Serviços
                        </NavLink>
                        <NavLink
                            to="/sobre-nos"
                            className={({ isActive }) => isActive ? 'link active' : 'link'}>
                            Sobre nós
                        </NavLink>
                        <NavLink
                            to="/fale-conosco"
                            className={({ isActive }) => isActive ? 'link active' : 'link'}>
                            Fale conosco
                        </NavLink>
                    </nav>
            </div>
        </header>
    );
}

export default Header;
