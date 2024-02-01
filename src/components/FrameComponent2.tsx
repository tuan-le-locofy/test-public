import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.bestprojectcontainerParent}>
      <div className={styles.bestprojectcontainer}>
        <div className={styles.bestProjectOf}>Best Project of the Years</div>
        <div className={styles.starratinggroup}>
          <h1 className={styles.ourRecentProjects}>Our recent projects</h1>
          <div className={styles.sobhahearlandvillasgroup}>
            <img
              className={styles.sobhahearlandvillasgroupChild}
              loading="eager"
              alt=""
              src="/group-10.svg"
            />
            <div className={styles.wrapperGroup11}>
              <img
                className={styles.wrapperGroup11Child}
                loading="eager"
                alt=""
                src="/group-11.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <GroupComponent
          rectangle20="/rectangle-19@2x.png"
          frameDivBackgroundImage="unset"
        />
        <GroupComponent
          rectangle20="/rectangle-20@2x.png"
          frameDivBackgroundImage="url('/rectangle-20@2x.png')"
        />
        <GroupComponent
          rectangle20="/rectangle-21@2x.png"
          frameDivBackgroundImage="unset"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
