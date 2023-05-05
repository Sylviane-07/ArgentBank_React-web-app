import React from "react";
//Style
import styles from "./Account.module.css";
//components
import Button from "../../components/Button/Button";

function Account({ title, amount, status }) {
  return (
    <section className={styles.account}>
      <div className={styles.accountContentWrapper}>
        <h3 className={styles.accountTitle}>{title}</h3>
        <p className={styles.accountAmount}>{amount}</p>
        <p className={styles.accountAmountDescription}>{status}</p>
      </div>
      <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
        <Button
          btnText={"View transactions"}
          className={styles.transactionBtn}
        />
      </div>
    </section>
  );
}

export default Account;
