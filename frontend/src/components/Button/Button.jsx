import React from "react";
//Styles
import styles from "./Button.module.css";

function Button({ className, btnText, type }) {
  return <button type={type} className={`${styles.button} ${className}`}>{btnText}</button>;
}

export default Button;
