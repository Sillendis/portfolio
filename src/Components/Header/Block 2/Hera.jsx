import goddess from "../../../assets/Hera.png";
import styles from "./Hera.module.css";
import power from "./../../../assets/Hera_Peacock.png";

const Hera = (props) => {
  return (
    <div className={styles.All}>
      <div>
        <img src={goddess} className={styles.Hera} alt="Hera" />
      </div>
      <div className={styles.info}>
        <div className={styles.title_container}>
          <h1>
            Hera
            <img src={power} className={styles.peacock} alt="peacock" />
          </h1>
        </div>
        <h2>The goddess of marriage, women, and family</h2>
        <br></br>
        <h3>
          In Greek mythology, she is queen of the twelve Olympians and Mount
          Olympus, sister and wife of Zeus, and daughter of the Titans Cronus
          and Rhea. One of her defining characteristics in myth is her jealous
          and vengeful nature in dealing with any who offended her, especially
          Zeus's numerous adulterous lovers and illegitimate offspring. Her
          iconography usually presents her as a dignified, matronly figure,
          upright or enthroned, crowned with a polos or diadem, sometimes veiled
          as a married woman. She is the patron goddess of lawful marriage. She
          presides over weddings, blesses and legalises marital unions, and
          protects women from harm during childbirth. Her sacred animals include
          the cow, cuckoo, and peacock. She is sometimes shown holding a
          pomegranate as an emblem of immortality. Her Roman counterpart is
          Juno.
        </h3>
        <br></br>
        <br></br>
        <div>
          <button className={styles.button_Hera}>Details</button>
        </div>
      </div>
    </div>
  );
};

export default Hera;
