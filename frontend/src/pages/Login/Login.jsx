import React from "react";
//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
//Styles
import styles from "./Login.module.css";
//Components
import Form from "../../components/Form/Form"

function Login() {
  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <section className={styles.signInContent}>
        <FontAwesomeIcon
          aria-hidden="true"
          className={styles.signInIcon}
          icon={faUserCircle}
        />
        <h1>Sign In</h1>
        <Form/>
      </section>
    </main>
  );
}

export default Login;
