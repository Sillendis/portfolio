import styles from "../Header/Headers.module.css";
import mountain from "../../assets/Mountain_MainGods.png";
import cerberus from "../../assets/Cerberus.png";
import medusa from "../../assets/Medusa.png";
import ancientGrecee from "../../assets/ancient_Greece.png";
const Header = (props) => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.main_above}>
        <h1>Olympians</h1>
      </div>
      <div className={styles.blue_one}>
        <b>
          <a href="" className={styles.blue_link}>
            Main Gods
            <img
              src={mountain}
              className={styles.mountain}
              alt="mountain"
            />{" "}
          </a>
        </b>
      </div>
      <div className={styles.others}>
        <b>
          <a href="" className={styles.link}>
            Underworld
            <img
              src={cerberus}
              className={styles.cerberus}
              alt="cerberus"
            />{" "}
          </a>
        </b>
      </div>
      <div className={styles.others}>
        <b>
          <a href="" className={styles.link}>
            {" "}
            Other creatures
            <img src={medusa} className={styles.medusa} alt="medusa" />{" "}
          </a>
        </b>
      </div>
      <div className={styles.others}>
        <b>
          <a href="" className={styles.link}>
            {" "}
            Ancient Greece
            <img
              src={ancientGrecee}
              className={styles.ancientGrecee}
              alt="ancient Greece"
            />{" "}
          </a>
        </b>
      </div>
    </header>
  );
};

export default Header;
