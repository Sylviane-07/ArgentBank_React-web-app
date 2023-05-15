import React from "react";
import { useState } from "react";
//styles
import styles from "./UserEditForm.module.css";
//components
import Button from "../Button/Button";
//RTK Query
import {
  useUserProfileMutation,
  useUserUpdateMutation,
} from "../../redux/features/apiSlice";
import { useDispatch } from "react-redux";
import { setIsUpdateUser } from "../../redux/features/updateUserSlice";

function UserEditForm() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  //RTK Query
  const [
    // eslint-disable-next-line
    userProfile,
    { data: profileData },
  ] = useUserProfileMutation({
    fixedCacheKey: "userProfileData",
  });

  const [userUpdate] = useUserUpdateMutation({
    fixedCacheKey: "userProfileData",
  });

  //Event Handlers
  //Set UserUpdate to false to display WelcomeUser
  const handleCancelUpdate = () => {
    dispatch(setIsUpdateUser(false));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const userToken = JSON.parse(localStorage.getItem("accessToken"));
      if (userName) {
        //Send Query
        userUpdate({ token: userToken, username: userName });
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
          placeholder={`${profileData?.userName}` || ""}
          onChange={(e) => setUserName(e.target.value)}
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
          value={profileData?.firstName || ""}
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
          value={profileData?.lastName || ""}
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
