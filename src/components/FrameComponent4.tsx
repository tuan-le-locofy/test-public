import { FunctionComponent } from "react";
import GroupComponent2 from "./GroupComponent2";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <img
        className={styles.frameChild}
        loading="eager"
        alt=""
        src="/group-2@2x.png"
      />
      <div className={styles.rectangleParent}>
        <img className={styles.frameItem} alt="" src="/rectangle-14@2x.png" />
        <div className={styles.welcomeToRealstateParent}>
          <div className={styles.welcomeToRealstate}>Welcome to Realstate</div>
          <h1 className={styles.manageYourProperty}>Manage Your Property</h1>
        </div>
        <div className={styles.yourWillHave}>
          Your will have everything nearby supermarket, buses , station, the
          carmen neighborhood, etc
        </div>
        <GroupComponent2
          propWidth="438px"
          propPadding="0px 0px 0px var(--padding-5xl)"
          propWidth1="438px"
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
