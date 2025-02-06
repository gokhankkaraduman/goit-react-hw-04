import { FaGithub } from "react-icons/fa";
import css from './Footer.module.css';

function Footer() {
  return (
    <footer className={css.footer}> 
      <div className={css.content}> 
        <a
          href="https://github.com/gokhankkaraduman"
          className={css.link}
          target="_blank"  
          rel="noopener noreferrer" 
        >
          <div className={css.text}> 
            gokhankkaraduman <FaGithub className={css.icon} />
          </div>
        </a>
      </div>
      <div className={css.copyright}> 
        &copy; {new Date().getFullYear()} Gökhan Karaduman. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

export default Footer;