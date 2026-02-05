
import './styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Farmácia Popular</h3>
          <p>Cuidando da sua saúde com confiança e qualidade.</p>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <p>📞 (11) 4002-8922</p>
          <p>📧 contato@farmaciapopular.com.br</p>
          <p>📍 Rua da Saúde, 123 - Salvador/BA</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Farmácia Popular — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;