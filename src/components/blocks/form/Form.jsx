import { useState } from "react";
import Input from "./Input";
import styles from "./form.module.scss";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(name);
        if (!name) {
          console.log("empty name");
          setErrorName(true);
        } else {
          console.log(name);
          setErrorName(false);
        }
        if (!email) {
          console.log("empty email");
          setErrorEmail(true);
        } else {
          console.log(email);
          setErrorEmail(false);
        }
      }}
      className={styles.form}
      action=""
    >
      <Input
        type="text"
        name="field1"
        placeholder="Name"
        isRequired={true}
        onInputChange={(value) => {
          setName(value);
        }}
      />
      <span className={styles.errorMessage}>
        {errorName ? "required field" : ""}
      </span>
      <Input
        type="email"
        name="field2"
        placeholder="Email"
        isRequired={true}
        onInputChange={(value) => {
          setEmail(value);
        }}
      />
      <span className={styles.errorMessage}>
        {errorEmail ? "required field" : ""}
      </span>
      <Input type="text" name="field3" placeholder="Your Subject" />
      <textarea name="field4" placeholder="Your Message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Form;
