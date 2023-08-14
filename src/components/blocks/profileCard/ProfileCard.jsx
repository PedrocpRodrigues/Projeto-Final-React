import SocialIcon from "../socialIcon/socialIcon";
import styles from "./profileCard.module.scss";

const ProfileCard = (props) => {
  return (
    <div className={styles.info_about}>
      <img src="./assets/profile-pic.png" alt="" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <div className={styles.info_media}>
        <SocialIcon
          href="https://github.com/PedrocpRodrigues"
          src="public/assets/github_icon_dark.svg"
        />
        <SocialIcon
          href="https://www.instagram.com/pedrocprodrigues"
          src="public/assets/instagram_icon_dark.svg"
        />
        <SocialIcon
          href="https://www.linkedin.com/in/pedro-rodrigues-97b994123"
          src="public/assets/linkedin_icon_dark.svg"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
