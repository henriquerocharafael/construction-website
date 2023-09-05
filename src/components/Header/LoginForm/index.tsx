import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function LoginForm() {
  return (
    <form action="" className={styles.login_form}>
      <h3>login form</h3>
      <input
        type="email"
        placeholder="enter your email"
        className={styles.box}
      />
      <input
        type="password"
        placeholder="enter your password"
        className={styles.box}
      />
      <div className={styles.flex}>
        <input
          type="checkbox"
          name=""
          id="remember-me"
          className={styles.checkbox}
        />
        <label htmlFor="remember-me">remember me</label>
        <Link to="#">forgot password?</Link>
      </div>
      <input type="submit" value="login now" className={styles.btn} />
      <p className={styles.footer}>
        don't have an account? <Link to="#">create one!</Link>
      </p>
    </form>
  );
}
