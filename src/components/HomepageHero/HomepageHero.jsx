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
          <span className={styles.nonCode}>- Financial advisors will tell you to put 15% of your income into a 401K and get rich in 40 years.</span>
        </p>
        <p>
          <span className={styles.nonCode}>- We tell you to get to a 50% Savings Rate and invest as aggressively as you can to become rich in 5 years.</span>
        </p>
      </h2>
    </div>
  );
}