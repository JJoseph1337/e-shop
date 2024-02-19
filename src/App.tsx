import Header from "./components/header/Header";
import Main from "./components/main/Main";
import styles from "./App.module.css";
import LoginModal from "./components/login-modal/LoginModal";

function App() {
  return (
    <div className={styles.layout}>
      <Header />
      <Main />
      <LoginModal />
    </div>
  );
}

export default App;
