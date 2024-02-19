import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import modal from "../../store/modal";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <Link to="/store">Store</Link>
        <Link to="/my-account">My account</Link>
        <button onClick={() => modal.toggleModal()}>
          Login
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
