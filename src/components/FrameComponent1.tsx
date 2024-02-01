import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.welcomeText}>
      <h1 className={styles.weAreA}>
        We are a global, boutique real estate brokerage
      </h1>
      <div className={styles.threeColumnsFrame}>
        <div className={styles.projectsTitle}>
          <div className={styles.searchComponent}>
            <div className={styles.recentProjectsFrame}>
              <div className={styles.sobhaVillasGroup}>
                <h1 className={styles.theTransferOf}>
                  The transfer of real estate
                </h1>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
                  pellentesque sollicitudin. Egestas faucibus lacus diam in
                  senectus consectetur. Mattis elit adipiscing quisque tellus
                  scelerisque vehicula ante nunc. Tellus consequat nisl quis
                  nisl justo.
                </div>
              </div>
              <div className={styles.callToActionFrame}>
                <Button
                  className={styles.bookNowReadMore}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fefeff",
                    fontSize: "16",
                    background: "#1f1f1f",
                    borderRadius: "40px",
                    "&:hover": { background: "#1f1f1f" },
                    height: 60,
                  }}
                >
                  Book Now!
                </Button>
                <Button
                  className={styles.bookNowReadMore1}
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
                  Read More
                </Button>
              </div>
            </div>
            <div className={styles.rectangleShape}>
              <div className={styles.subscribeAreaFrame}>
                <div className={styles.emailInput}>12+</div>
                <div className={styles.customers}>Customers</div>
              </div>
              <div className={styles.subscribeAreaFrame1}>
                <div className={styles.div}>14+</div>
                <div className={styles.officesWrapper}>
                  <div className={styles.offices}>Offices</div>
                </div>
              </div>
              <div className={styles.subscribeAreaFrame2}>
                <div className={styles.div1}>10+</div>
                <div className={styles.students}>Students</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-27@2x.png"
          />
          <div className={styles.newsletterSubscription} />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
