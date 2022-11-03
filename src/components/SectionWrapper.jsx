import React from "react";
import assets from "../assets";
import styles from "../styles/Global";
import Button from "./Button";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}
    >
      <div className={`flex items-center ${styles.boxClass}`}>
        <div className={`${styles.descDiv} fadeLeftMini`}>
          <h1 className={`${styles.h1Text}`}>{title}</h1>
          <p className={`${styles.descriptionText}`}>{description}</p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="https://expo.dev/@mohaiminul_shishir/nft-marketplace-app?serviceType=c"
            />
          )}
        </div>
      </div>
      <img src={mockupImg} alt="" />
    </div>
  );
};

export default SectionWrapper;
