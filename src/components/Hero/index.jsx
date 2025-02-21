import styles from "./styles.module.scss";

import heroImage from "/public/assets/hero-img.png";
import googlePlayBadge from "/public/assets/google-play.png";
import appStoreBadge from "/public/assets/app-store.png";
import checkIcon from "/public/assets/check-icon.png";

import { examLogos } from "../../data/logo";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>
              Achieve Exam Success with <span>ExcelMind</span>
            </h1>
            <p>
              Boost your exam performance with ExcelMind and ace your WAEC,
              UTME, GCE, NECO, and professional exams!
            </p>
          </div>

          <div className={styles.storeButtons}>
            <a href="#">
              <img
                src={googlePlayBadge}
                alt="Get it on Google Play"
                className={styles.badge}
              />
            </a>
            <a href="#">
              <img
                src={appStoreBadge}
                alt="Download on the App Store"
                className={styles.badge}
              />
            </a>
          </div>
        </div>

        {/* Right Image/Badges */}
        <div className={styles.imageWrapper}>
          <img
            src={heroImage}
            alt="Student celebrating exam success"
            className={styles.heroImage}
          />

          {/* Overlay Elements */}
          <div className={styles.checkIcon}>
            <img src={checkIcon} alt="Green check" />
          </div>
          <div className={styles.infoBadge}>100% Exams For Students</div>
          <div className={styles.congratsBadge}>
            Congratulations! You scored 100/100
          </div>
        </div>
      </div>
      <div className={styles.examLogos}>
        {examLogos.map((logo) => (
          <div key={logo.id} className={styles.logoContainer}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
