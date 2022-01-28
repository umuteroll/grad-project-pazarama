import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Errors from '../../components/errors';

const Label = (props) => {
  
  return (
   <>
<div>
    <label className={styles.label}>{props.label} <Errors errors={props.error}/></label>
</div>
   </>
  );
};



export default Label;