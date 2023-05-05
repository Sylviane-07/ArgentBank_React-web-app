import React from 'react'
//Styles
import styles from "./UserWelcome.module.css"
//components
import Button from "../../components/Button/Button";

function UserWelcome() {
    return (
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <Button btnText={"Edit Name"} className={styles.editBtn} />
      </div>
    );
}

export default UserWelcome
