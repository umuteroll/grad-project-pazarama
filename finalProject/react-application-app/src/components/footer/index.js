import React from "react";
import SocialButton from "../socialButtons";
import styles from "./styles.module.css";

const Footer = (props) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialMedia}>
            </div>
            <div className={styles.footerFoot}>
                <p> Made by Umut Erol </p>
                <p>Copyright © 2022</p>
            </div>
        </footer>
    );
};

export default Footer;