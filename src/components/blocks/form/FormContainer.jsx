import Form from "./form";
import styles from "./formContainer.module.scss";

const FormContainer = () => {
  return (
    <div className={styles.formList}>
      <h2>
        Let's work <span>together.</span>
      </h2>
      <Form />
    </div>
  );
};

export default FormContainer;
