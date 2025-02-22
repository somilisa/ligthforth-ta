import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import { examLogos } from "../../data/logo";
import pastQuestion from "/public/assets/past-questions.png";
const ExamCoverage = ({ isReverse, children }) => {
  return isReverse ? (
    <Reverse>{children}</Reverse>
  ) : (
    <Normal>{children}</Normal>
  );
};

export const Normal = () => {
  return (
    <section className={styles.examCoverage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>Comprehensive Exam Coverage</h2>
            <p>
              Our simulators include WAEC, NECO, UTME, and GCE past questions,
              tailored to meet the specific needs of each exam.
            </p>
          </div>
          <button className={styles.ctaButton}>Get Started</button>
        </div>

        <div className={styles.examsGrid}>
          {examLogos.map((exam) => (
            <div key={exam.id} className={styles.examItem}>
              <img src={exam.src} alt={`${exam.alt} Logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Reverse = () => {
  return (
    <section className={styles.examCoverage}>
      <div className={`${styles.container} ${styles.reverse}`}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>Access Past Questions and Simulate Exams Before They Start</h2>
          </div>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.image}>
            <img src={pastQuestion} alt={"past questions"} />
          </div>
        </div>
      </div>
    </section>
  );
};
ExamCoverage.propTypes = {
  isReverse: PropTypes.boolean,
  children: PropTypes.node,
};
export default ExamCoverage;
