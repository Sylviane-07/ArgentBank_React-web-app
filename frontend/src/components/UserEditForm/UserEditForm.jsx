import React from 'react'
//styles
import styles from "./UserEditForm.module.css"
//components
import Button from "../Button/Button";

function UserEditForm() {
    return (
      <form>
        <div className={styles.userEditInputWrapper}>
          <label className={styles.userEditLabel} htmlFor="username">
            User name:
          </label>
          <input className={styles.userEditInput} type="text" id="username" />
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
            value={"Ben"}
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
            value={"Hong"}
          />
        </div>
        <Button btnText={"Save"} className={styles.userEditBtn} />
        <Button btnText={"Cancel"} className={styles.userEditBtn} />
      </form>
    );
}

export default UserEditForm
