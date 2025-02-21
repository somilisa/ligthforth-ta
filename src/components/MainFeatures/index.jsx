import styles from "./styles.module.scss";

import Features from "../Features";
import ExamCoverage from "../ExamCoverage";
import SchoolPerformance from "../SchoolPerformance";
import MobileAppCTA from "../MobileAppCTA";
import CallToAction from "../CallToAction";
import Reviews from "../Reviews";

const MainFeatures = () => {
  return (
    <main className={styles.mainFeatures}>
      <Features />
      <ExamCoverage />
      <ExamCoverage isReverse />
      <SchoolPerformance />
      <MobileAppCTA />
      <CallToAction />
      <Reviews />
    </main>
  );
};

export default MainFeatures;
