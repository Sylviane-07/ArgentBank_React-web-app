import React from "react";
//styles
import styles from "./UserEdit.module.css";
//components
import UserEditForm from "../UserEditForm/UserEditForm";

function UserEdit() {
  return (
    <div className={styles.userEditheader}>
      <h1>Edit user info</h1>
      <UserEditForm/>
    </div>
  );
}

export default UserEdit;
