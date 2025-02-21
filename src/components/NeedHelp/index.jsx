import styles from "./styles.module.scss";

// Example image placeholder
import supportAgent from "../../assets/support-agent.png";

const HelpSection = () => {
  return (
    <section className={styles.helpSection}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>Need Help?</h2>
          <p>We are always here to assist you.</p>
          <ul className={styles.contactList}>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+2348145054463">+234 814 505 4463</a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
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
