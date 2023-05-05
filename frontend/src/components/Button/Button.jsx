import React from "react";
//Styles
import styles from "./Button.module.css";

function Button({ className, btnText }) {
  return <button className={`${styles.button} ${className}`}>{btnText}</button>;
}

export default Button;
