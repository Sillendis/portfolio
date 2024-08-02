import styles from "../Header/Headers.module.css";
const Header = (props) => {
  return (
    <header className={styles.wrapper}>
        <></>
      <div className={styles.main_above}>
        <h1>Olympians</h1>
      </div>
      <div className={styles.blue_one}>
        <b>
          <a href="" className={styles.blue_link}>
            Main Gods{" "}
          </a>
        </b>
      </div>
      <div className={styles.others}>
        <b>
          <a href="" className={styles.link}>
            Underworld{" "}
          </a>
        </b>
      </div>
      <div className={styles.others}>
        <b>
          <a href="" className={styles.link}>
            {" "}
            Other creatures{" "}
          </a>
        </b>
      </div>
      <div className={styles.others}>
        <b>
          <a href="" className={styles.link}>
            {" "}
            Ancient Greece{" "}
          </a>
        </b>
      </div>
    </header>
  );
};

export default Header;
