import styles from "../Block 1/Zeus.module.css";
import god from "../../../assets/Zeus.png";
import power from "../../../assets/Zeus_Lightning.png";

const Zeus = (props) => {
  return (
    <div className={styles.All}>
      <div>
        <img src={god} className={styles.Zeus}></img>
      </div>
      <div className={styles.info}>
        <h1>
          Zeus<img src={power} className={styles.lightning}></img>
        </h1>
        <h2>
          Is the sky and thunder god in ancient Greek religion and mythology,
          who rules as king of the gods on Mount Olympus. His name is cognate
          with the first syllable of his Roman equivalent Jupiter.
        </h2>
      </div>
    </div>
  );
};

export default Zeus;
