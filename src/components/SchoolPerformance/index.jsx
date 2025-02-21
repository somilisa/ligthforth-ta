import styles from "./styles.module.scss";
import { benefits } from "../../data/benefits";
import schoolPerformance from "/public/assets/school-performance.png";

const SchoolPerformance = () => {
  return (
    <section className={styles.schoolPerformance}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img
            src={schoolPerformance}
            alt="a woman graduating giving thumbs up"
          />
        </div>
        <div className={styles.text}>
          <h3>Enhance Your School&apos;s Performance</h3>
          <ul className={styles.benefits}>
            {benefits.map((benefit) => (
              <li key={benefit.id} className={styles.benefitContainer}>
                <div
                  className={`${styles.iconWrapper} ${styles[benefit.bgColor]}`}
                >
                  <img src={benefit.src} alt={benefit.alt} />
                </div>
                <div className={styles.benefitText}>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SchoolPerformance;
