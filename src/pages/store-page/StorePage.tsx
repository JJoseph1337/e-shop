import styles from "./StorePage.module.css";

const StorePage = () => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default StorePage;
