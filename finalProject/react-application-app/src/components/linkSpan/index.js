import React  from "react";
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';

const LinkSpan = (props) => {
    return (   
        <span>
            <Link className={styles.links} onClick={props.onClick} to={props.link}>{props.displayName}</Link>
        </span>
    );
};

export default LinkSpan;