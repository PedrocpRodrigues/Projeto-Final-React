import styles from "./input.module.scss";

function Input(props) {
  return (
    <input
      onChange={(event) => {
        // console.log(event.target.value);

        props.onInputChange(event.target.value);
      }}
      className={styles.input}
      type={props.type}
      name={props.name}
      placeholder={
        props.isRequired ? `${props.placeholder}*` : props.placeholder
      }
    ></input>
  );
}

export default Input;
