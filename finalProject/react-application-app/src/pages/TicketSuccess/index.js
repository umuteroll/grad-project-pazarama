import styles from "./styles.module.css";
import Header from "../../components/header";
import Footer from  "../../components/footer";
import React, { useState } from "react"
import Heart from "react-heart";
import { connect } from "react-redux";


const TicketQuery = (props) => {
    const [active, setActive] = useState(true)
    return (
        <div className={styles.floatContainer}>
            <Header/> 
            <div className={styles.success}>
                <h1>Başvurunuz başarılı!</h1>
                <h1>En kısa zamanda yanıtlanacaktır.</h1>
                <h1> Başvuru kodunuz: {props.lastApplicationCode.applicationCode}.</h1>
                <Heart style={{ width: "5rem" }} isActive={active} onClick={() => setActive(!active)} />
            </div>
            <Footer/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        lastApplicationCode: state.lastApplicationCode
    }
}
export default connect(mapStateToProps)(TicketQuery);