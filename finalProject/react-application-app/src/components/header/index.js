import React, { useState } from "react";
import styles from "./styles.module.css";
import LinkSpan from "../linkSpan";

const Header = (props) => {
const isLoggedIn = window.localStorage.getItem('isAdmin');  
const handleClick = function () {
     localStorage.clear();
}



    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <span className={styles.logo}> LOGO </span>
            </div>
            <div className={styles.links}>
                <LinkSpan link="/" displayName="Anasayfa"/>
                <LinkSpan link="/basvuru-sorgula" displayName="Başvuru Sorgula"/>
                {isLoggedIn ? <LinkSpan link="/" displayName="Çıkış" onClick={handleClick}/> : <LinkSpan link="/admin" displayName="Admin"/>}
            </div>

        </header>
    );
};

export default Header;