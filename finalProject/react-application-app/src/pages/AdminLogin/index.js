import styles from "./styles.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Input from "../../components/input";
import Button from "../../components/button";
import { useFormik } from 'formik';
import { loginSchema } from '../../helper/yup.js';
import Errors from "../../components/errors";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function AdminLogin() {
    const navigate = useNavigate();
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            userName: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            handleClick(values);
        },

    });
    const handleClick = async (values) => {
      let infos = await getAdminLoginInfos(values.userName);
      if(infos[0].password == values.password){
        window.localStorage.setItem('isAdmin', true);  
        navigate("/admin/basvuru-listesi")
      }
    }
    const getAdminLoginInfos = async (userName) =>  {
        const data = await axios.get('https://61e710d9ce3a2d00173595e7.mockapi.io/admin?search=' + userName)
        .then(response => response.data )   
        .catch(error => error.message);
        return data;
        
    }
    return (
        <div>
            <Header />
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.adminLoginForm}>
                    <h1>Admin Girişi</h1>
                    <input
                        id="userName"
                        name="userName"
                        type="text"
                        placeholder="   Kullanıcı Adı"
                        className={styles.adminLogin}
                        onChange={handleChange}
                        value={values.username}
                    />
                    <Errors errors={errors.username} />
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="   Şifre"
                        className={styles.adminLogin}
                        onChange={handleChange}
                        value={values.password}
                    />
                    <Errors errors={errors.password} />
                    <Button classdefiner="adminLoginButton" text="Giriş"  />
                </div>
            </form>

            <Footer />
        </div>
    )
}

export default AdminLogin;

