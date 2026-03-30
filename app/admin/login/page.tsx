  "use client";

  import { useState } from "react";
  import { useRouter } from "next/navigation";
  import styles from "./login.module.css";
  import Modal from "./components/modal/modal.module";


export default function Login() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter(); 
  
  const handleLogin = () => {
    router.push("/admin/dashboard");
  };

    return (
      <main className={styles.cardbody}>
        <h1 className={styles.cardtitle}>Login</h1>
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
        <button type="submit" className={styles.cardbtnsuccess} onClick={handleLogin} >
          Login
        </button>
              <button type="submit" className={styles.cardbtndanger} onClick={() => setIsOpenModal  (false)}>
          cancel
        </button>
        </div>
        {isOpenModal && <Modal />}
      </main>


    );
  }