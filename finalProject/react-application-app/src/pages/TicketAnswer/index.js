import styles from "./styles.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Row from "../../components/row";
import { connect } from "react-redux";
import { React, useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getTicketApplication } from "../../redux/actions";
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const TicketAnswer = (props) => {
    const [selected, setSelected] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const getDetailInfos = function (id) {
        if (props.application) {
            var arrApplication = props.application.filter(application => application.applicationCode == id);
            setSelected(arrApplication[0]);
        }
        else {
            getTicketApplication(id);
        }
    }
    const getTicketApplication = (id) => {
        const data = axios.get('https://61e710d9ce3a2d00173595e7.mockapi.io/application?search=' + id)
            .then((response) => {
                var result = response.data;
                setSelected(result[0]);
            }
            )
            .catch(error => error.message);
    }

    useEffect(() => {
        getDetailInfos(id);
    }, [])


    return (
        <div className={styles.floatContainer}>
            <Header />
            <h1 className={styles.subTitle}>Başvuru Durumu</h1>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h1>Cevaplandı!</h1>
                </div>
                <div className={styles.cardBody}>
                    <div className={styles.cardBodyLeft}>
                        <Row label="Ad: " detail={selected.applicantName} />
                        <Row label="Soyad: " detail={selected.applicantSurname} />
                        <Row label="TC: " detail={selected.identityNumber} />
                        <Row label="Başvuru Kodu: "detail={selected.applicationCode} />

                    </div>
                    <div className={styles.cardBodyRight}>
                        <Row label="Başvuru Durumu: " detail={selected.applicationStatu}/>
                        <Row label="Başvuru Nedeni: " detail={selected.applicationReason} />
                        <Row label="Başvuru Cevabı: " detail={selected.applicationAnswer} />
                        <Row label="Cevaplanma Tarihi: " detail={selected.createdAt} />

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        application: state.application
    }
}

export default connect(mapStateToProps,{getTicketApplication})(TicketAnswer);