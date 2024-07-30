import styles from "./styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import { plans } from "./data";

export function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className="heading">
        <h1 className="title">our pricing</h1>
      </div>
      <div className={styles.box_container}>
        {plans.map((plan, idx) => (
          <div key={idx} className={styles.box}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={plan.icon} />
            </div>
            <h3>{plan.title}</h3>
            <div className={styles.price}>
              <span>$</span>
              {plan.price}
              <span>/mo</span>
              <div className={styles.list}>
                <p>interior design</p>
                <p>refurbishment</p>
                <p>material supply</p>
                <p>maintenance</p>
                <p>24/7 support</p>
              </div>
              <Link to="#" className={styles.btn}>
                choose plan
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
