import React from "react";
//Styles
import styles from "./Button.module.css";

function Button({ className, btnText, type, onClick, onSubmit }) {
  return <button type={type} className={`${styles.button} ${className}`} onClick={onClick} onSubmit={onSubmit}>{btnText}</button>;
}

export default Button;
