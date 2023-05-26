import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//Styles
import styles from "./Form.module.css";
//components
import Button from "../../components/Button/Button";
//import RTK Query
import {
  useUserLoginMutation,
  useUserProfileMutation,
} from "../../redux/features/apiSlice";
import { setIsAuthenticated } from "../../redux/features/authSlice";
import {
  setIsRemembered,
  setIsEmail,
} from "../../redux/features/rememberUserSlice";

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  //if isRemembered Selectors
  const isRemembered = useSelector((state) => state.remember.isRemembered);
  const isEmail = useSelector((state) => state.remember.isEmail);

  const [isChecked, setIsChecked] = useState(isRemembered);

  //Calling hooks from RTK Query
  const [
    userLogin,
    { isLoading: isLoginLoading, isError: isLoginError, error: loginError },
  ] = useUserLoginMutation({
    fixedCacheKey: "userLoginToken",
  });
  const [
    userProfile,
    {
      isLoading: isProfileLoading,
      isSuccess: isProfileSuccess,
      isError: isProfileError,
      error: profileError,
    },
  ] = useUserProfileMutation({
    fixedCacheKey: "userProfileData",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
    // console.log(isChecked);
    dispatch(setIsRemembered(!isChecked));
    if (isChecked) {
      localStorage.removeItem("isRemembered");
      dispatch(setIsEmail(""));
    }
  };
  // Reset email input on focus if not remembered
  const handleOnFocusReset = () => {
    if (!isRemembered) {
      setFormData((prevState) => ({
        ...prevState,
        email: "",
      }));
    }
  };

  useEffect(() => {
    // Check if isRemembered & isEmail to display saved user email
    if (isRemembered && isEmail) {
      setFormData((prevState) => ({
        ...prevState,
        email: isEmail,
      }));
    }
  }, [isRemembered, isEmail]);

  const onSubmit = async (e) => {
    e.preventDefault();
    //Query to get token & set it under userToken in localStorage
    try {
      const result = await userLogin({ email, password }).unwrap();
      if (result) {
        if (isRemembered) {
          dispatch(setIsEmail(email));
          localStorage.setItem("isRemembered", JSON.stringify(email));
        }
        //Query to get userProfile info with the token
        try {
          dispatch(setIsAuthenticated(true));
          const userToken = JSON.parse(localStorage.getItem("accessToken"));
          userProfile({ token: userToken });
        } catch (isProfileError) {
          // console.log(isProfileError);
        }
      }
    } catch (isLoginError) {
      // console.log(isLoginError);
    } finally {
      //Reset form imputs
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  useEffect(() => {
    //userLogin && userProfil fetch side effect => navigate to profil if logged-in
    if (isProfileSuccess) {
      // console.log(isProfileSuccess);
      navigate("/profile");
    }
  }, [isProfileSuccess, navigate]);

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
          onFocus={handleOnFocusReset}
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
        <input
          type="checkbox"
          id="remember-me"
          checked={isChecked}
          onChange={handleCheckbox}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Button
        type={"submit"}
        btnText={"Sign In"}
        className={styles.signInBtn}
      />
      {isLoginLoading ? (
        <p className={styles.isLoadingMessage}>Loading...</p>
      ) : (
        isProfileLoading && (
          <p className={styles.isLoadingMessage}>Loading...</p>
        )
      )}
      {isLoginError ? (
        <p className={styles.isErrorMessage}>{loginError?.data?.message}</p>
      ) : (
        isProfileError && (
          <p className={styles.isErrorMessage}>{profileError?.data?.message}</p>
        )
      )}
    </form>
  );
}

export default Form;
