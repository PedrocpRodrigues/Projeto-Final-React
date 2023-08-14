import styles from "./style.module.scss";
import SocialIcon from "../../components/blocks/socialIcon/socialIcon";
import FormContainer from "../../components/blocks/form/FormContainer";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactInfo}>
        <h2>Contact Info</h2>
        <div className={styles.contactInfoList}>
          <img src="public/assets/mail_icon.svg" alt="" />
          <div>
            <span>mail</span>
            <p>pedro.c.p.rodrigues@gmail.com</p>
          </div>
        </div>
        <div className={styles.contactInfoList}>
          <img src="public/assets/contact_icon.svg" alt="" />
          <div>
            <span>contact</span>
            <p>+351 915 136 375</p>
          </div>
        </div>
        <div className={styles.contactInfoList}>
          <img src="public/assets/location_icon.svg" alt="" />
          <div>
            <span>location</span>
            <p>Santo Tirso - Porto</p>
          </div>
        </div>
        <div className={styles.contactSocial}>
          <h2>Social Info</h2>
          <SocialIcon
            href="https://www.instagram.com/pedrocprodrigues"
            src="public/assets/instagram_icon.svg"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/pedro-rodrigues-97b994123"
            src="public/assets/linkedin_icon.svg"
          />
          <SocialIcon
            href="https://github.com/PedrocpRodrigues"
            src="public/assets/github_icon.svg"
          />
          <SocialIcon href="" src="public/assets/twitter_icon.svg" />
          <SocialIcon
            href="https://fullstackdeve-kjd5999.slack.com/team/U04RTK3S2EB"
            src="public/assets/slack_icon.svg"
          />
        </div>
      </div>
      <FormContainer />
    </div>
  );
};

export default Contact;
