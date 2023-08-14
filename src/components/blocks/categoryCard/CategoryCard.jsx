import { Link } from "react-router-dom";
import styles from "./categoryCard.module.scss";

const CategoryCard = (props) => {
  return (
    <div className={styles.info_card}>
      <Link to={props.href}>
        <img src={props.src} alt="" />
      </Link>
      <span>{props.description}</span>
      <h2>{props.title}</h2>
    </div>
  );
};

export default CategoryCard;
