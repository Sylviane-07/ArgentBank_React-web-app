import React, { useState } from "react";
// import { NavLink } from 'react-router-dom';
//Styles
import styles from "./Form.module.css";
//components
import Button from "../../components/Button/Button";

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.inputWrapper}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={onChange} required/>
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={onChange} required/>
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
