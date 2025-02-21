import styles from "./styles.module.scss";

import playStoreBadge from "/public/assets/google-play.png";
import appStoreBadge from "/public/assets/app-store.png";

const MobileAppCTA = () => {
  return (
    <section className={styles.mobileAppCTA}>
      <div className={styles.container}>
        <div className={styles.filter}></div>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>Download the ExcelMind Mobile App</h2>
            <p>
              Join thousands of successful users who have reached their goals
              with ExcelMind.{" "}
            </p>
          </div>
          <div className={styles.badges}>
            <a href="#">
              <img src={playStoreBadge} alt="Get it on Google Play" />
            </a>
            <a href="#">
              <img src={appStoreBadge} alt="Download on the App Store" />
            </a>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/assets/mobile-app.png" />
        </div>
      </div>
    </section>
  );
};

export default MobileAppCTA;
