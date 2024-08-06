import styles from "./BlockWithGodesses.module.css";
import Hera from "./Hera";

const BlockWithGodesses = (props) => {
  return (
    <div className={styles.mainBlock}>
      <h1 className={styles.tytle_container}>The Olympic goddesses</h1>
      <div className={styles.button}>
        <button>View all goddesses</button>
      </div>
      <Hera />
    </div>
  );
};

export default BlockWithGodesses;
