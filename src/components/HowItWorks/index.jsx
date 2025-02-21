import styles from "./styles.module.scss";

// import appMockup from "../../assets/app-mockup.png";

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          {/* <img src={appMockup} alt="App mockup" /> */}
        </div>

        <div className={styles.stepsWrapper}>
          <div className="text">
            <h2 className={styles.title}>How Our App Works</h2>
            <ol className={styles.stepsList}>
              <li>
                <h3>Create An Account</h3>
                <p>Sign up with your email or phone number to get started.</p>
              </li>
              <li>
                <h3>Select Exam Category</h3>
                <p>WAEC, UTME, GCE, NECO, and more—pick what you need.</p>
              </li>
              <li>
                <h3>Start Learning</h3>
                <p>
                  Access comprehensive study materials and practice questions.
                </p>
              </li>
            </ol>
          </div>
          <button className={styles.ctaButton}>Start learning now</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
