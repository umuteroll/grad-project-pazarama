import React  from "react";
import styles from "./styles.module.css";

const Row = (props) => {
    return (
        <span className={styles.row}>
            <h6 className={styles.rowLabel}>{props.label}</h6>
            <p className={styles.rowDetail}>{props.detail}</p>
        </span>
    );
};

export default Row;