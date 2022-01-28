import styles from "./styles.module.css";
import React, { useState } from "react"
import ApplicationForm from "../../components/formCreateApplication";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Heart from "react-heart"


function TicketApplication() {
    const [active, setActive] = useState(true)
    return (
        <div className={styles.floatContainer}>
            <Header />
            <h1 className={styles.subTitle}>Başvuru Formu</h1>
            <div className={styles.floatChildLeft}>
                <div>
                    <ApplicationForm>
                    </ApplicationForm>
                </div>
            </div>
            <div className={styles.floatChildRight}>
                <div style={{ width: "5rem" }}>
                    <h1>Düşünceni önemsiyoruz</h1>
                    <Heart isActive={active} onClick={() => setActive(!active)} />
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default TicketApplication;