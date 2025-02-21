import PropTypes from "prop-types";
import styles from "./styles.module.scss";
const CTACard = ({ children }) => {
  return <div className={styles.ctaCard}>{children}</div>;
};
CTACard.propTypes = {
  children: PropTypes.node,
};
export default CTACard;
