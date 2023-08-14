const SocialIcon = (props) => {
  return (
    <a target="_blank" href={props.href}>
      <img src={props.src} alt="" />
    </a>
  );
};

export default SocialIcon;
