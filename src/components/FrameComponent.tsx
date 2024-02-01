import { FunctionComponent } from "react";
import GroupComponent2 from "./GroupComponent2";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.isometricrenderingbox}>
      <img
        className={styles.dRenderingIsometricFdgdf1Icon}
        loading="eager"
        alt=""
        src="/3drenderingisometricfdgdf-1@2x.png"
      />
      <div className={styles.subscribenewsletterframe}>
        <img
          className={styles.subscribenewsletterframeChild}
          alt=""
          src="/rectangle-17@2x.png"
        />
        <div className={styles.newslettersubscribertext}>
          <h1 className={styles.subscribeOurNewsletter}>
            Subscribe Our Newsletter
          </h1>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
            pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
            consectetur. Mattis elit adipiscing quisque tellus scelerisque
            vehicula ante nunc.
          </div>
        </div>
        <GroupComponent2
          propWidth="469px"
          propPadding="0px var(--padding-12xs) 0px var(--padding-5xl)"
          propWidth1="469px"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
