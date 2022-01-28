import styles from "./styles.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Button from "../../components/button";
import Row from "../../components/row"
import RadioButtons from "../../components/radioButtons"
import { useParams,useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import axios from 'axios';
import { postTicketApplication } from "../../redux/actions";

const AdminLogin = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selected, setSelected] = useState({});
    const [answer, setAnswers] = useState({ applicationAnswer: "", applicationStatus: "" });
    const handleChange = (event) => {
        setAnswers({ ...answer, [event.target.name]: event.target.value });
    };
    const getUsersFromApi = (id) => {
        const data = axios.get('https://61e710d9ce3a2d00173595e7.mockapi.io/user?search=' + id)
            .then((response) => {
                var result = response.data;
                setSelected(result[0]);
            }
            )
            .catch(error => error.message);
    }
    const getDetailInfos = function (id) {
        if (props.user) {
            var arrUsers = props.users.filter(user => user.applicationCode == id);
            setSelected(arrUsers[0]);
        }
        else {
            getUsersFromApi(id);
        }
    }
    const postAnswerToApi = function(){
        var obj = {
            applicationCode: selected.applicationCode,
            applicationAnswer: answer.applicationAnswer,
            applicationStatus: answer.applicationStatus,
            createdAt: new Date().toLocaleDateString(),
            applicantName: selected.firstName,
            applicantSurname: selected.lastName,
            identityNumber: selected.idNO,
            applicationReason: selected.applicationReason,
        }
        props.postTicketApplication(obj);
        alert("Cevap Başarıyla Gönderildi");
        navigate("/admin/basvuru-listesi");

    }
    useEffect(() => {
        getDetailInfos(id);
    }, [])

    return (

        <div>
            <Header />
            <div>
                <div>
                    <h1>Başvuru durumunu güncelleyin</h1>
                </div>
                {!selected ? <p>Yükleniyor...</p> :
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <Row label="Ad: " detail={selected.firstName} />
                            <Row label="Soyad :" detail={selected.lastName} />
                            <Row label="TC :" detail={selected.idNO} />
                            <Row label="Başvuru Kodu :" detail={selected.applicationCode} />

                        </div>
                        <div className={styles.right}>
                            <Row label="Başvuru Tarihi :" detail={selected.createdAt} />
                            <Row label="Başvuru Konusu :" detail={selected.subject} />
                            <Row label="Başvuru Nedeni :" detail={selected.applicationReason} />
                            <Row label="Dosya :" detail={selected.file} />
                        </div>
                    </div>
                }

                <div>
                    <RadioButtons name="applicationStatus" onClick={handleChange} />
                </div>

                <div className={styles.applyReason}>
                    <h1>Başvuru Cevabı</h1>
                    <textarea name="applicationAnswer" className={styles.txtArea} onChange={handleChange}></textarea>
                </div>

                <div>
                    <Button text="Gönder" onClick={postAnswerToApi} />
                </div>

            </div>
            <Footer />
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps,{postTicketApplication})(AdminLogin);

