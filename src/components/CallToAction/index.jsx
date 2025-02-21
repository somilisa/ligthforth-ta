import styles from "./styles.module.scss";
import PropTypes from "prop-types";

export const CTACard = ({ children }) => {
  return <div className={styles.ctaCard}>{children}</div>;
};
CTACard.propTypes = {
  children: PropTypes.node,
};

const ReferralProgram = () => {
  return (
    <section className={styles.callToAction}>
      <div className={styles.container}>
        <CTACard>
          <div className={styles.filter}></div>

          <div className={styles.text}>
            <h2>All-In-One Edu-Tech Platform</h2>
            <p>
              ExcelMind helps you practice strategically, and improve your exam
              performance.
            </p>
          </div>
          <button className={styles.ctaButton}>
            Get Started with ExcelMind
          </button>
        </CTACard>
        <CTACard>
          <div className={styles.text}>
            <h2>Become an Ambassador</h2>
            <p>
              Refer your friends, classmates, or colleagues to ExcelMind and
              earn monthly rewards for each referral.
            </p>
          </div>
          <button className={styles.ctaButton}>Become an Ambassador</button>
        </CTACard>
      </div>
    </section>
  );
};

export default ReferralProgram;
