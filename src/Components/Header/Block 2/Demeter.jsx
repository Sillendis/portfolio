import goddess from "./../../../assets/Demeter.png";
import styles from "./Demeter.module.css";
import power from "./../../../assets/Demeter_Snowflake.png";

const Demeter = (props) => {
  return (
    <div className={styles.All}>
      <div>
        <img src={goddess} className={styles.Demeter} alt="Demeter" />
      </div>
      <div className={styles.info}>
        <div className={styles.title_container}>
          <h1>
            Demeter
            <img src={power} className={styles.winter} alt="winter" />
          </h1>
        </div>
        <h2>
          The Olympian goddess of the harvest and agriculture, presiding over
          crops, grains, food, and the fertility of the earth
        </h2>
        <br></br>
        <h3>
          Although Demeter is mostly known as a grain goddess, she also appeared
          as a goddess of health, birth, and marriage, and had connections to
          the Underworld. She is also called Deo (Δηώ Dēṓ). In Greek tradition,
          Demeter is the second child of the Titans Rhea and Cronus, and sister
          to Hestia, Hera, Hades, Poseidon, and Zeus. Like her other siblings
          except Zeus, she was swallowed by her father as an infant and rescued
          by Zeus. Through her brother Zeus, she became the mother of
          Persephone, a fertility goddess and resurrection deity.
        </h3>
        <br></br>
        <br></br>
        <div>
          <button className={styles.button_Demeter}>Details</button>
        </div>
      </div>
    </div>
  );
};

export default Demeter;
