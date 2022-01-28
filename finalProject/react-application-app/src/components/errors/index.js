import React  from "react";
import styles from "./styles.module.css";

const Errors = (props) => {
    return (
        <span className={styles.errors}>
           {props.errors && <span> {props.errors} </span >}
        </span>
    );
};

export default Errors;