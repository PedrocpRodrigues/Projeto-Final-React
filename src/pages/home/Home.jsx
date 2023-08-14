import styles from "./style.module.scss";
import SocialIcon from "../../components/blocks/socialIcon/socialIcon";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../../components/blocks/categoryCard/CategoryCard";
import ProfileCard from "../../components/blocks/profileCard/ProfileCard";

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("public/fakeapi/about.json")
      .then((response) => {
        return response.json();
      })
      .then((aboutData) => {
        setData(aboutData);
      });
  }, []);

  return (
    <div className={styles.homepage}>
      <ProfileCard name={data.name} description={data.description} />
      <div className={styles.info_personal}>
        <CategoryCard
          href="/about"
          src="public/assets/credentials_icon.svg"
          description="More about me"
          title="Credentials"
        />
        <CategoryCard
          href="/"
          src="public/assets/projects_icon.svg"
          description="ShowCases"
          title="Projects"
        />
        <CategoryCard
          href=""
          src="public/assets/profile_icon.svg"
          description="Stay With Me"
          title="Profiles"
        />
      </div>
    </div>
  );
};

export default Home;
