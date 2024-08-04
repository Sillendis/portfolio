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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam
          eligendi sint maiores earum enim beatae quaerat eveniet molestiae rem?
          Veniam placeat asperiores quia earum corporis magni. Laboriosam in,
          facilis minus dicta illum incidunt accusamus eligendi, porro adipisci,
          vitae sint ex dolores neque expedita magni recusandae labore. Ullam
          soluta dolore autem ipsam cumque quisquam fugiat repudiandae
          voluptates, enim obcaecati aperiam tempora? Quidem nulla adipisci
          tempora, sit, ratione possimus exercitationem repellat numquam
          delectus aspernatur, explicabo laboriosam fuga est? Itaque
          reprehenderit consectetur et reiciendis? Ut molestiae, maiores qui
          iste eligendi explicabo ipsa minus numquam id. Doloremque cum
          laboriosam incidunt, quaerat placeat commodi obcaecati nulla culpa
          impedit totam ipsum vel labore quibusdam ea illum doloribus soluta
          accusantium delectus. Optio deserunt expedita molestiae eaque ut
          mollitia eius blanditiis autem explicabo est a necessitatibus ipsam
          animi, quod veniam, officiis nostrum cupiditate nisi aliquam in ullam
          inventore culpa qui? Facere totam exercitationem neque voluptates
          magni laboriosam? Porro obcaecati voluptas aliquid qui, dolores alias
          aliquam quae autem dolor, nemo sapiente molestias, odio ab enim
          consectetur saepe exercitationem ex voluptatem quis veniam accusantium
          veritatis repellat velit dolorum. Repudiandae?
        </h2>
      </div>
    </div>
  );
};

export default Zeus;
