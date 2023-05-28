import React from "react";
import { useState } from "react";
//styles
import styles from "./UserEditForm.module.css";
//components
import Button from "../Button/Button";
//RTK Query
import { useUserUpdateMutation } from "../../redux/features/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setIsUpdateUser } from "../../redux/features/updateUserSlice";

function UserEditForm() {
  const dispatch = useDispatch();
  const [userNameEdit, setUserNameEdit] = useState("");

  const [userUpdate] = useUserUpdateMutation({
    fixedCacheKey: "userProfileData",
  });

  const userName = useSelector((state) => state.auth.userName);
  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);

  //Event Handlers
  //Set UserUpdate to false to display WelcomeUser
  const handleCancelUpdate = () => {
    dispatch(setIsUpdateUser(false));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const userToken = JSON.parse(sessionStorage.getItem("accessToken"));
      if (userNameEdit) {
        //Send Query
        userUpdate({ token: userToken, username: userNameEdit });
        //Display WelcomeUser
        handleCancelUpdate();
      }
    } catch (error) {
      // console.log(error)
    }
  };

  return (
    <form onSubmit={handleEditSubmit}>
      <div className={styles.userEditInputWrapper}>
        <label className={styles.userEditLabel} htmlFor="username">
          User name:
        </label>
        <input
          className={styles.userEditInput}
          type="text"
          id="username"
          placeholder={`${userName}` || ""}
          onChange={(e) => setUserNameEdit(e.target.value)}
        />
      </div>
      <div className={styles.userEditInputWrapper}>
        <label className={styles.userEditLabel} htmlFor="firstname">
          First name:
        </label>
        <input
          className={`${styles.userEditInput} ${styles.readOnlyInput}`}
          type="text"
          id="firstname"
          readOnly
          value={firstName || ""}
        />
      </div>
      <div className={styles.userEditInputWrapper}>
        <label className={styles.userEditLabel} htmlFor="lastname">
          Last name:
        </label>
        <input
          className={`${styles.userEditInput} ${styles.readOnlyInput}`}
          type="text"
          id="lastname"
          readOnly
          value={lastName || ""}
        />
      </div>
      <Button btnText={"Save"} className={styles.userEditBtn} />
      <Button
        btnText={"Cancel"}
        className={styles.userEditBtn}
        onClick={handleCancelUpdate}
      />
    </form>
  );
}

export default UserEditForm;
