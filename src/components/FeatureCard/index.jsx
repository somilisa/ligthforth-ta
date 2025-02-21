import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const FeatureCard = ({ feature }) => {
  const { title, description, icon } = feature;

  return (
    <article className={styles.featureCard}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt={`${title} Icon`} />
      </div>
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};
FeatureCard.propTypes = {
  feature: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};
export default FeatureCard;
