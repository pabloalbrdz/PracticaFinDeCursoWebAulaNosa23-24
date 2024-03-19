import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

// footer, sin más
function Footer() {
  return (
    <footer id="footer-campus" className='mt-5'>
      <div className="container containercampus" id="container-footer-campus">
        <span className="evol-footer-2">Contacta con nosotros en correodeejemplo@gmail.com</span>
      </div>
    </footer>
  );
}

export default Footer;