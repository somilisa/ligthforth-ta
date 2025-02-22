import styles from "./styles.module.scss";
import HowItWorks from "../HowItWorks";
import HelpSection from "../HelpSection";
import FAQSection from "../FAQSection";
const InfoSection = () => {
  return (
    <section className={styles.infoSection}>
      <HowItWorks />
      <HelpSection />
      <FAQSection />
    </section>
  );
};

export default InfoSection;
