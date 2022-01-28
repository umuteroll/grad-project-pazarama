import styles from "./styles.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { connect } from "react-redux";
import MultiSpan from "../../components/multiSpan";
import { getTicketUsers } from "../../redux/actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";




const AdminTicketList = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        props.getTicketUsers();
    }, [])
    function navToDetailPage(id) {
        navigate("/admin/basvuru/" + id);

    }
    return (
        <div>
            <Header />
            <div className={styles.listContainer}>
                <div className={styles.listHeader}>
                    <span className={styles.ticketSpan}>Başvuru Kodu</span>
                    <span className={styles.ticketSpan}>Başvuru Tarihi</span>
                    <span className={styles.ticketSpan}>Başvuru Konusu</span>
                    <span className={styles.ticketSpan}>Email</span>
                </div>
                <div className={styles.listBody}>
                    {props.users.map(ticket => (
                        <MultiSpan key={ticket.id} onClick={() => { navToDetailPage(ticket.applicationCode) }} ticketLabel1={ticket.applicationCode}
                            ticketLabel2={ticket.createdAt} ticketLabel3={ticket.subject} ticketLabel4={ticket.email} />))}
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

export default connect(mapStateToProps, { getTicketUsers })(AdminTicketList);