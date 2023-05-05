import React from "react";
// import { NavLink } from 'react-router-dom';
//Styles
import styles from "./Form.module.css";
//components
import Button from "../../components/Button/Button";

function Form() {
  return (
    <form>
      <div className={styles.inputWrapper}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className={styles.inputRemember}>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {/* <NavLink to="/profile" className={styles.signInButton}>
          Sign In
        </NavLink> */}
      <Button btnText={"Sign In"} className={styles.signInBtn} />
    </form>
  );
}

export default Form;
