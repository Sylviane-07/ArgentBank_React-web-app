import React from "react";
//syles
import styles from "./Profile.module.css";
//components
import UserWelcome from "../../components/UserWelcome/UserWelcome";
//layouts
import Accounts from "../../layouts/Accounts/Accounts";

function Profile() {
  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <UserWelcome />
      <Accounts />
    </main>
  );
}

export default Profile;
