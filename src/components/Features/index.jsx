import styles from "./styles.module.scss";
import FeatureCard from "../FeatureCard";

// Data for the features
const featuresData = [
  {
    id: 1,
    title: "Offline Practice",
    description:
      "Study anytime, anywhere. Download past questions and practice without needing internet access after logging in.",
    icon: "/public/assets/svgs/offline-practice.svg", // Adjust path
  },
  {
    id: 2,
    title: "Track Your Progress",
    description:
      "Easily monitor your study progress with our user-friendly interface. See at a glance how much more you need to cover.",
    icon: "/public/assets/svgs/track-progress.svg", // Adjust path
  },
  {
    id: 3,
    title: "Affordable Fees",
    description:
      "We offer competitive rates because your success is our priority. Focus on learning without financial stress.",
    icon: "/public/assets/svgs/affordable-fees.svg", // Adjust path
  },
];

const Features = () => {
  return (
    <section className={styles.Features}>
      <header className={styles.sectionHeader}>
        <p className={styles.text}>Practice with 50+ Examination Simulators</p>
        <h2>Join a Community of Success-Driven Students</h2>
      </header>
      <div className={styles.featuresGrid}>
        {featuresData.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
