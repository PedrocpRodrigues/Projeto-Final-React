import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className={styles.footer}>
      <Link className={styles.logo} to="/">
        <span>PedroRodrigues</span>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <p>
        © All rights reserved by <span>PedroRodrigues</span>
      </p>
    </nav>
  );
};

export default Footer;
