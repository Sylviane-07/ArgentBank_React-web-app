import React from "react";
//syles
import styles from "./Profile.module.css";
//components
import UserWelcome from "../../components/UserWelcome/UserWelcome";
import UserEdit from "../../components/UserEdit/UserEdit";
//layouts
import Accounts from "../../layouts/Accounts/Accounts";
//REDUX
import { useSelector } from "react-redux";

function Profile() {
  //Redux ToolKit Selector
  const isUpdateUser = useSelector((state) => state.updateUser.isUpdateUser);
  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      {!isUpdateUser ? <UserWelcome /> : <UserEdit />}
      <Accounts />
    </main>
  );
}

export default Profile;
