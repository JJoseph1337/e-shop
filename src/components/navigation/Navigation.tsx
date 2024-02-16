import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <Link to="/store">Store</Link>
        <Link to="/my-account">My account</Link>
        <Link to=" ">Login</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
