import React from "react";
import styles from "./HomepageHero.module.css";

export default function HomepageHero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>
        <span className={styles.title}>
          <code className={styles.titleCode}>A 21st Century Financial Advisor</code>
        </span>
      </h1>
      <h2 className={styles.tagline}>
        <p>
          <span className={styles.nonCode}>- Financial advisors will tell you to put 15% of your income into a 401K so you can become rich 40 years from now.</span>
        </p>
        <p>
          <span className={styles.nonCode}>- We tell you to save and invest 50% of your income so you can become rich 5 years from now.</span>
        </p>
      </h2>
    </div>
  );
}