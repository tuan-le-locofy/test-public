import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <img
              className={styles.rectangleIcon}
              loading="eager"
              alt=""
              src="/rectangle-12.svg"
            />
          </div>
          <div className={styles.buildWrapper}>
            <img
              className={styles.buildIcon}
              loading="eager"
              alt=""
              src="/build.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.rectangleDiv} />
        <div className={styles.aboutUs}>About us</div>
        <div className={styles.projects}>Projects</div>
        <div className={styles.agents}>Agents</div>
        <div className={styles.services}>Services</div>
        <div className={styles.listings}>Listings</div>
        <img
          className={styles.vuesaxlinearsearchNormalIcon}
          loading="eager"
          alt=""
          src="/vuesaxlinearsearchnormal.svg"
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.otherServicesParent}>
            <div className={styles.otherServices}>Other services</div>
            <input className={styles.vuesaxlineararrowRight} type="checkbox" />
          </div>
        </div>
        <Button
          className={styles.frameButton}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#1f1f1f",
            fontSize: "16",
            background: "#fefeff",
            borderRadius: "40px",
            "&:hover": { background: "#fefeff" },
            height: 60,
          }}
        >
          Contact us
        </Button>
      </div>
    </header>
  );
};

export default FrameComponent5;
