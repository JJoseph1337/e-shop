import styles from "./LoginModal.module.css";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import modal from "../../store/modal";

const LoginModal = observer(() => {
  return (
    <>
      {modal.showModal && (
        <div
          className={styles.modalContainer}
          onClick={() => modal.toggleModal()}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <form method="post">
              <button
                className={styles.closeButton}
                onClick={() => modal.toggleModal()}
              >
                &times;
              </button>

              <label htmlFor="username">
                <span>Username</span>
              </label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter username"
                name="username"
              />

              <label htmlFor="password">
                <span>Password</span>
              </label>
              <input
                className={styles.input}
                type="password"
                placeholder="Enter password"
                name="password"
                required
              />

              <button
                className={styles.button}
                type="submit"
              >
                Login
              </button>
              <label>
                <input
                  type="checkbox"
                  name="remember"
                />
                Remember me
              </label>
            </form>
          </div>
        </div>
      )}
    </>
  );
});

export default LoginModal;
