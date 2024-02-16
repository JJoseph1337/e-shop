import Header from "./components/header/Header";
import Main from "./components/main/Main";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.layout}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
