
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Input = (props) => {
  const { type, placeholder, ...args } = props;
  const [inputType, setInputType] = useState(type);

  //TODO :class değişecek 
  if (props.classdefiner === "query") {
    return (
      <div className={styles.container}>
      <input
        type={inputType}
        placeholder={placeholder}
        className={styles.inputQuery} 
        {...args}
      />
    </div>
    );
  }else if (props.classdefiner === "adminLogin") {
    return (
      <div className={styles.container}>
      <input
        type={inputType}
        placeholder={placeholder}
        className={styles.adminLogin} 
        {...args}
      />
    </div>
    );
  }
 
  return (
    <div className={styles.container}>
      <input
        type={inputType}
        placeholder={placeholder}
        className={styles.input}
        {...args}
      />
      {type === "password" && (
        <i className={styles.icon}>  </i>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "password"]),
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "Placeholder",
};

export default Input;
