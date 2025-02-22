import styles from "./styles.module.scss";

import supportAgent from "/public/assets/support-agent.png";

const HelpSection = () => {
  return (
    <section className={styles.helpSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>Need Help?</h2>
            <p>We are always available to assist you with your inquiries:</p>
          </div>
          <ul className={styles.contactList}>
            <li>
              {/* <strong>Phone:</strong>{" "} */}
              <a href="tel:+2348145054463">+234 814 505 4463</a>
            </li>
            <li>
              {/* <strong>Email:</strong>{" "} */}
              <a href="mailto:info@excelmind.org">info@excelmind.org</a>
            </li>
          </ul>
        </div>

        <div className={styles.imageWrapper}>
          <img src={supportAgent} alt="Customer support agent" />
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
