import styles from "./styles.module.css";
import Header from "../../components/header";
import Footer from  "../../components/footer";
import Input from "../../components/input";
import Button from "../../components/button";
import { connect } from "react-redux";
import { getTicketApplication } from "../../redux/actions";
import { React, useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const TicketQuery = (props) => {
    const navigate = useNavigate();
    const [id, setId] = useState({ id:""});
    const handleChange = (event) => {
        setId({ id : event.target.value });
    };
    const onClickQuery = () => {
        props.getTicketApplication(id.id) //TODO: inputtan veriyi al
        if(props.application.length > 0){
            navigate("/basvuru/" + id.id);
        }else{
            alert("ilgili basvuru bulunamadi");
        }
    };

    return (
        <div className={styles.floatContainer}>
            <Header/> 
            <h1 className={styles.subTitle}>Başvuru Sorgula</h1>
            <div className={styles.floatChildLeft}>
                <div className={styles.componentsDiv}>
                    <Input classdefiner="query"  onChange={handleChange} />
                    <Button classdefiner="query" text="Sorgula" onClick={onClickQuery}/>
                </div>
            </div>
            <div>
                <div className={styles.floatChildRight}>
                    <h1>Başvuru Sorgulama</h1>
                    <p className={styles.p}>Başvuru kodunuzu yandaki alana girerek durumunu sorgulayabilirsiniz.</p>
                </div>
            </div>
            <div className={styles.description}>
                <p>Başvurularınız 24 saat içerisinde yanıtlanacaktır.</p>
            </div>
            <Footer/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        application: state.application
    }
}

export default connect(mapStateToProps,{getTicketApplication})(TicketQuery);