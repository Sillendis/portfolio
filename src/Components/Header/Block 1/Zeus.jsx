import styles from "../Block 1/Zeus.module.css";
import god from "../../../assets/Zeus.png";
import power from "../../../assets/Zeus_Lightning.png";

const Zeus = (props) => {
  return (
    <div className={styles.All}>
      <div>
        <img src={god} className={styles.Zeus} alt="Zeus"></img>
      </div>
      <div className={styles.info}>
        <div className={styles.title_container}>
          <h1>
            Zeus
            <img src={power} className={styles.lightning} alt="lightning" />
          </h1>
        </div>
        <h2>
          Zeus is the sky and thunder god in ancient Greek religion and
          mythology, who rules as king of the gods on Mount Olympus. His name is
          cognate with the first syllable of his Roman equivalent Jupiter. Zeus
          is the child of Cronus and Rhea, the youngest of his siblings to be
          born, though sometimes reckoned the eldest as the others required
          disgorging from Cronus's stomach. In most traditions, he is married to
          Hera, by whom he is usually said to have fathered Ares, Eileithyia,
          Hebe, and Hephaestus. At the oracle of Dodona, his consort was said to
          be Dione,by whom the Iliad states that he fathered Aphrodite.
          According to the Theogony, Zeus' first wife was Metis, by whom he had
          Athena. Zeus was also infamous for his erotic escapades. These
          resulted in many divine and heroic offspring, including Apollo,
          Artemis, Hermes, Persephone, Dionysus, Perseus, Heracles, Helen of
          Troy, Minos, and the Muses. He was respected as a sky father who was
          chief of the gods and assigned roles to the others: "Even the gods who
          are not his natural children address him as Father, and all the gods
          rise in his presence." He was equated with many foreign weather gods,
          permitting Pausanias to observe "That Zeus is king in heaven is a
          saying common to all men". Zeus' symbols are the thunderbolt, eagle,
          bull, and oak. In addition to his Indo-European inheritance, the
          classical "cloud-gatherer" (Greek: Νεφεληγερέτα, Nephelēgereta) also
          derives certain iconographic traits from the cultures of the ancient
          Near East, such as the scepter.
        </h2>
      </div>
    </div>
  );
};

export default Zeus;
