import React from 'react'
import { useNavigate } from 'react-router-dom';
//Styles
import styles from "./UserWelcome.module.css"
//components
import Button from "../../components/Button/Button";
//import RTK Query
import {useUserProfileMutation} from "../../redux/features/apiSlice"
import UserEdit from '../UserEdit/UserEdit';

function UserWelcome() {
  const [
    userProfile,
    {
      data: profileData,
      isLoading: isProfileLoading,
      isSuccess: isProfileSuccess,
      isError: isProfileError,
      error: profileError,
    },
  ] = useUserProfileMutation({
    fixedCacheKey: "userProfileData"
  });
  const userFirstName = profileData?.firstName;
  const userLastName = profileData?.lastName;

  const navigate = useNavigate()
  const handleOnClickEdit = () => {
    console.log("click")
    navigate("/profile/edit");
  }

    return (
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          {`${userFirstName} ${userLastName} !`}
        </h1>
        <Button btnText={"Edit Name"} className={styles.editBtn} onClick={handleOnClickEdit} />
      </div>
    );
}

export default UserWelcome
