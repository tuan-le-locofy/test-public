import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

type GroupComponentType = {
  rectangle20?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  frameDivBackgroundImage?: CSSProperties["backgroundImage"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  rectangle20,
  propBackgroundImage,
  frameDivBackgroundImage,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: frameDivBackgroundImage,
    };
  }, [frameDivBackgroundImage]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup} style={frameDivStyle}>
        <img className={styles.frameItem} alt="" src={rectangle20} />
        <div className={styles.frameInner} />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.sobhaHearlandIiVillasParent}>
          <div className={styles.sobhaHearlandIi}>Sobha Hearland II Villas</div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
            bibendum.
          </div>
          <div className={styles.starsParent}>
            <div className={styles.stars}>
              <img
                className={styles.starinactivebigIcon}
                loading="eager"
                alt=""
                src="/starinactivebig.svg"
              />
              <img
                className={styles.starinactivebigIcon1}
                loading="eager"
                alt=""
                src="/starinactivebig-1.svg"
              />
              <img
                className={styles.starinactivebigIcon2}
                loading="eager"
                alt=""
                src="/starinactivebig-2.svg"
              />
              <img
                className={styles.starinactivebigIcon3}
                loading="eager"
                alt=""
                src="/starinactivebig-3.svg"
              />
              <img
                className={styles.starinactivebigIcon4}
                loading="eager"
                alt=""
                src="/starinactivebig-4.svg"
              />
            </div>
            <div className={styles.div}>4.83</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
