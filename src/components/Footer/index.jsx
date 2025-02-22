import styles from "./styles.module.scss";
import logo from "/public/assets/svgs/logo_footer.svg";
import facebook from "/public/assets/svgs/Facebook.svg";
import twitter from "/public/assets/svgs/Twitter.svg";
import instagram from "/public/assets/svgs/Instagram.svg";
import linkedin from "/public/assets/svgs/LinkedIn.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.brandSection}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="ExcelMind Logo" className={styles.logo} />
              <span className={styles.brand}>
                Excel<span>Mind</span>
              </span>
            </div>{" "}
            <p>
              At Excel Mind, we believe everyone deserves the best chance
              possible to excel academically. We are driven to provide
              innovations through technology that makes learning convenient,
              accessible and pocket friendly.
            </p>
            <div className={styles.socials}>
              <a href="#">
                <img src={facebook} alt="facebook logo" />{" "}
              </a>
              <a href="#">
                <img src={twitter} alt="twitter logo" />{" "}
              </a>
              <a href="#">
                <img src={instagram} alt="instagram logo" />{" "}
              </a>
              <a href="#">
                <img src={linkedin} alt="linkedin logo" />{" "}
              </a>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.quickLinks}>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Exams</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
            <div className={styles.support}>
              <h4>Support Center</h4>
              <ul>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Support Center</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© ExcelMind 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
