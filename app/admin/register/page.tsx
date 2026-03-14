import styles from "./register.module.css";

export default function Register() {
  return (
    <form className={styles.cardbody}>
      <h1 className={styles.cardtitle}>Register</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName1"
          aria-describedby="nameHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
            <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          aria-describedby="confirmPasswordHelp"
        />
      </div>
            <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          No Telpon
        </label>
        <input
          type="tel"
          className="form-control"
          id="telp"
          aria-describedby="telpHelp"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label "  htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <div className={styles.cardbtn}>
      <button type="submit" className={styles.cardbtnsuccess}>
        Submit
      </button>
            <button type="submit" className={styles.cardbtndanger}>
        cancel
      </button>
      </div>
    </form>
  );
}