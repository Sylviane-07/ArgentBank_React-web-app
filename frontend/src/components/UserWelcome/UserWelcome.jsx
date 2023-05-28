import React from "react";
//Styles
import styles from "./UserWelcome.module.css";
//components
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setIsUpdateUser } from "../../redux/features/updateUserSlice";

function UserWelcome() {
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);

  //Event Handler
  //Set UserUpdate to true to display EditUser
  const handleIsUpdateUser = () => {
    dispatch(setIsUpdateUser(true));
  };

  return (
    <div className={styles.header}>
      <h1>
        Welcome back
        <br />
        {`${firstName} ${lastName} !`}
      </h1>
      <Button
        btnText={"Edit Name"}
        className={styles.editBtn}
        onClick={handleIsUpdateUser}
      />
    </div>
  );
}

export default UserWelcome;
