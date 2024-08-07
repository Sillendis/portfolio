import goddess from "./../../../assets/Aphrodite.png";
import styles from "./Aphrodite.module.css";
import power from "./../../../assets/aphrodite_Heart.png";

const Aphrodite = (props) => {
  return (
    <div className={styles.All}>
      <div>
        <img src={goddess} className={styles.Aphrodite} alt="Aphrodite" />
      </div>
      <div className={styles.info}>
        <div className={styles.title_container}>
          <h1>
            Hera
            <img src={power} className={styles.heart} alt="heart" />
          </h1>
        </div>
        <h2>
          The goddess of love, lust, beauty, pleasure, passion and procreation
        </h2>
        <br></br>
        <h3>
          As her syncretized Roman goddess counterpart Venus, desire, sex,
          fertility, prosperity, and victory. Aphrodite's major symbols include
          seashells, myrtles, roses, doves, sparrows, and swans. The cult of
          Aphrodite was largely derived from that of the Phoenician goddess
          Astarte, a cognate of the East Semitic goddess Ishtar, whose cult was
          based on the Sumerian cult of Inanna. Aphrodite's main cult centers
          were Cythera, Cyprus, Corinth, and Athens. Her main festival was the
          Aphrodisia, which was celebrated annually in midsummer. In Laconia,
          Aphrodite was worshipped as a warrior goddess. She was also the patron
          goddess of prostitutes, an association which led early scholars to
          propose the concept of "sacred prostitution" in Greco-Roman culture,
          an idea which is now generally seen as erroneous.
        </h3>
        <br></br>
        <br></br>
        <div>
          <button className={styles.button_Aphrodite}>Details</button>
        </div>
      </div>
    </div>
  );
};

export default Aphrodite;
