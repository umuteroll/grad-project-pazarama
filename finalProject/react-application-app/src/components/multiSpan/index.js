import React from "react";
import styles from "./styles.module.css";


const MultiSpan = (props) => {
    return (
        <div onClick={props.onClick} className={styles.spanContainer}>
            <span className={styles.ticketSpan}>{props.ticketLabel1}</span>
            <span className={styles.ticketSpan}>{props.ticketLabel2}</span>
            <span className={styles.ticketSpan}>{props.ticketLabel3}</span>
            <span className={styles.ticketSpan}>{props.ticketLabel4}</span>
        </div>
    );
};

export default MultiSpan;