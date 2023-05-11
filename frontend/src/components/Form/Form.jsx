import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Styles
import styles from "./Form.module.css";
//components
import Button from "../../components/Button/Button";
//import RTK Query
import { useUserLoginMutation } from "../../redux/features/apiSlice";

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const [userLogin, { data, isLoading, isSuccess, isError, error }] =
    useUserLoginMutation();

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //Query to set userToken to localStorage
    userLogin({ email, password });
    //Reset form imputs
    setFormData({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    //userLogin side effect => navigate to profil if logged-in
    if (isSuccess && localStorage.getItem("accessToken")) {
      //Checking if stored token is === to response token
      const userToken = JSON.parse(localStorage.getItem("accessToken"));
      const responseToken = data?.body?.token;
      // console.log(responseToken);
      // console.log(userToken);
      if (userToken === responseToken) {
        navigate("/profile");
      }
    }
  }, [isSuccess, data, navigate]);

  return (
    <form onSubmit={onSubmit} id="loginForm">
      <div className={styles.inputWrapper}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
      </div>
      <div className={styles.inputRemember}>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Button
        type={"submit"}
        btnText={"Sign In"}
        className={styles.signInBtn}
      />
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error?.data?.message}</p>}
    </form>
  );
}

export default Form;
