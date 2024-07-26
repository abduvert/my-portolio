import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer'>
        <ul>
        <li className="footeritems">
            <a href="https://www.linkedin.com/in/abduvert7/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
        <li className="footeritems">
            <a href="https://github.com/abduvert" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
        <li className="footeritems">
            <a href="https://www.instagram.com/abduvert/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </li>
        
        </ul>
    </div>
  );
}

export default Footer;
