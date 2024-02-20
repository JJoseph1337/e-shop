import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import modal from "../../store/modal";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/my-account">My account</Link>
        </li>
        <li>
          <button onClick={() => modal.toggleModal()}>
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
