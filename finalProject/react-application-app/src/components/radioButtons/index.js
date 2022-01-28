import React from "react";
import styles from "./styles.module.css";

const RadioButtons = (props) => {
    return (
        <div className={styles.wrapper}>
            <input type="radio" id="accepted" value="Kabul Edildi" name={props.name}  onClick={props.onClick}/>
            <label for="accepted">Kabul Edildi    </label> 
            <input type="radio" id="rejected" value="Reddedildi" name={props.name}  onClick={props.onClick} />
            <label for="rejected">Reddedildi    </label> 
            <input type="radio" id="waiting" value="Beklemede" name={props.name}  onClick={props.onClick}/>
            <label for="waiting">Beklemede    </label> 
        </div>
    );  
}

export default RadioButtons;