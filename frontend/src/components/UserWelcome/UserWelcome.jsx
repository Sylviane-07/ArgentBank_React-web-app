import React from "react";
//Styles
import styles from "./UserWelcome.module.css";
//components
import Button from "../../components/Button/Button";
//import RTK Query
import { useUserProfileMutation } from "../../redux/features/apiSlice";
import { useDispatch } from "react-redux";
import { setIsUpdateUser } from "../../redux/features/updateUserSlice";

function UserWelcome() {
  const dispatch = useDispatch();
  //RTK Query
  const [
    // eslint-disable-next-line
    userProfile,
    { data: profileData },
  ] = useUserProfileMutation({
    fixedCacheKey: "userProfileData",
  });

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
        {`${profileData?.firstName} ${profileData?.lastName} !`}
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
