import styles from "./BlockWithGoddesses.module.css";
import React from "react";
import GoddessCard from "./GoddessCard";
import HeraStyles from "./Hera.module.css";
import HeraGoddess from "./../../../assets/Hera.png";
import HeraPower from "./../../../assets/Hera_Peacock.png";
import AphroditeStyles from "./Aphrodite.module.css";
import AphroditeGoddess from "./../../../assets/Aphrodite.png";
import AphroditePower from "./../../../assets/aphrodite_Heart.png";
import DemeterStyles from "./Demeter.module.css";
import DemeterGoddess from "./../../../assets/Demeter.png";
import DemeterPower from "./../../../assets/Demeter_Snowflake.png";

const BlockWithGodesses = () => {
  return (
    <div className={styles.mainBlock}>
      <h1 className={styles.title_container}>The Olympic goddesses</h1>
      <div className={styles.info_button}>
        <button>View all goddesses</button>
      </div>
      <GoddessCard
        imageSrc={HeraGoddess}
        imageAlt="Hera"
        title="Hera"
        powerImgSrc={HeraPower}
        powerImgAlt="peacock"
        description={{
          subtitle: "The goddess of marriage, women, and family",
          text: "In Greek mythology, she is queen of the twelve Olympians and Mount Olympus, sister and wife of Zeus, and daughter of the Titans Cronus and Rhea. One of her defining characteristics in myth is her jealous and vengeful nature in dealing with any who offended her, especially Zeus's numerous adulterous lovers and illegitimate offspring. Her iconography usually presents her as a dignified, matronly figure, upright or enthroned, crowned with a polos or diadem, sometimes veiled as a married woman. She is the patron goddess of lawful marriage. She presides over weddings, blesses and legalises marital unions, and protects women from harm during childbirth. Her sacred animals include the cow, cuckoo, and peacock. She is sometimes shown holding a pomegranate as an emblem of immortality. Her Roman counterpart is Juno.",
        }}
        buttonText="Details"
        styles={HeraStyles}
      />
      <GoddessCard
        imageSrc={AphroditeGoddess}
        imageAlt="Aphrodite"
        title="Aphrodite"
        powerImgSrc={AphroditePower}
        powerImgAlt="heart"
        description={{
          subtitle:
            "The goddess of love, lust, beauty, pleasure, passion, procreation.",
          text: "As her syncretized Roman goddess counterpart Venus, desire, sex, fertility, prosperity, and victory. Aphrodite's major symbols include seashells, myrtles, roses, doves, sparrows, and swans. The cult of Aphrodite was largely derived from that of the Phoenician goddess Astarte, a cognate of the East Semitic goddess Ishtar, whose cult was based on the Sumerian cult of Inanna. Aphrodite's main cult centers were Cythera, Cyprus, Corinth, and Athens. Her main festival was the Aphrodisia, which was celebrated annually in midsummer. In Laconia, Aphrodite was worshipped as a warrior goddess. She was also the patron goddess of prostitutes, an association which led early scholars to propose the concept of `sacred prostitution` in Greco-Roman culture, an idea which is now generally seen as erroneous. ",
        }}
        buttonText="Details"
        styles={AphroditeStyles}
      />
      <GoddessCard
        imageSrc={DemeterGoddess}
        imageAlt="Demeter"
        title="Demeter"
        powerImgSrc={DemeterPower}
        powerImgAlt="snowflake"
        description={{
          subtitle: "The Olympian goddess of the harvest and agriculture.",
          text: "Although Demeter is mostly known as a grain goddess, she also appeared as a goddess of health, birth, and marriage, and had connections to the Underworld. She is also called Deo (Δηώ Dēṓ). In Greek tradition, Demeter is the second child of the Titans Rhea and Cronus, and sister to Hestia, Hera, Hades, Poseidon, and Zeus. Like her other siblings except Zeus, she was swallowed by her father as an infant and rescued by Zeus. Through her brother Zeus, she became the mother of Persephone, a fertility goddess and resurrection deity. Her cult titles include Sito (Σιτώ), `she of the Grain`, as the giver of food or grain, and Thesmophoros (θεσμός, thesmos: divine order, unwritten law; φόρος, phoros: bringer, bearer), `giver of customs` or `legislator`, in association with the secret female-only festival called the Thesmophoria. Though Demeter is often described simply as the goddess of the harvest, she presided also over the sacred law and the cycle of life and death. She and her daughter Persephone were the central figures of the Eleusinian Mysteries, a religious tradition that predated the Olympian pantheon and which may have its roots in the Mycenaean period c.1400–1200 BC.",
        }}
        buttonText="Details"
        styles={DemeterStyles}
      />
    </div>
  );
};

export default BlockWithGodesses;
