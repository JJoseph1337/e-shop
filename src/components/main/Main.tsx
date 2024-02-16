import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>Account</li>
          <li>Login</li>
        </ul>
      </nav>

      <main className={styles.main}>
        <article>
          <h2>Title</h2>
          <img
            src="https://via.placeholder.com/600/771796"
            alt="image"
          />
        </article>
        <article>
          <h2>Title</h2>
          <img
            src="https://via.placeholder.com/600/d32776"
            alt="image"
          />
        </article>
        <article>
          <h2>Title</h2>
          <img
            src="https://via.placeholder.com/600/f66b97"
            alt="image"
          />
        </article>
      </main>
    </div>
  );
};

export default Main;
