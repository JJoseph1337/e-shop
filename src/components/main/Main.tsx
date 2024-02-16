import styles from "./Main.module.css";
import { Routes, Route, Link } from "react-router-dom";
import StorePage from "../../pages/store-page/StorePage";
import MyAccountPage from "../../pages/my-account-page/MyAccountPage";
import Navigation from "../navigation/Navigation";

const Main = () => {
  return (
    <div className={styles.container}>
      <Navigation />

      <main className={styles.main}>
        <Routes>
          <Route
            path="/store"
            element={<StorePage />}
          />
          <Route
            path="/my-account"
            element={<MyAccountPage />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default Main;
