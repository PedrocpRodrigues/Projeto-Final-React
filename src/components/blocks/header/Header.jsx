import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className={styles.navbar}>
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
      <Link to="/contact">
        <button>Let's talk</button>
      </Link>
    </nav>
  );
};

export default Header;
