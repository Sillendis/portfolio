import React from "react";

const GoddessCard = ({
  imageSrc,
  imageAlt,
  title,
  powerImgSrc,
  powerImgAlt,
  description,
  buttonText,
  styles, // получаем классы как пропс
}) => {
  return (
    <div className={styles.All}>
      <div>
        <img src={imageSrc} className={styles.goddess} alt={imageAlt} />
      </div>
      <div className={styles.info}>
        <div className={styles.title_container}>
          <h1>
            {title}
            <img
              src={powerImgSrc}
              className={styles.powerIcon}
              alt={powerImgAlt}
            />
          </h1>
        </div>
        <h2>{description.subtitle}</h2>
        <p>{description.text}</p>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </div>
  );
};

export default GoddessCard;
