import Aphrodite from "./Aphrodite";
import styles from "./BlockWithGodesses.module.css";
import Demeter from "./Demeter";
import Hera from "./Hera";

const BlockWithGodesses = (props) => {
  return (
    <div className={styles.mainBlock}>
      <h1 className={styles.tytle_container}>The Olympic goddesses</h1>
      <div className={styles.info_button}>
        <button>View all goddesses</button>
      </div>
      <Hera />
      <Aphrodite />
      <Demeter />
    </div>
  );
};

export default BlockWithGodesses;
