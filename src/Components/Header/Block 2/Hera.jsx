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
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          similique hic deserunt rem animi quibusdam distinctio dolorem odio
          consectetur. Impedit est fugit similique obcaecati voluptas rem quo
          deleniti consequatur sed!
        </h3>
      </div>
    </div>
  );
};

export default Hera;
