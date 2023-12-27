import './Register.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RegisterForm from '../../components/RegisterForm';
import AuthForm from '../../components/AuthForm';
import axios from 'axios';

const Register = () => {

    

    return (
        <div className="register">
            <Header></Header>
            <div className="register__vk">
                <div className="register__content">VK for mobile devices</div>
                {/* <button onClick={send}>Отправить запрос</button> */}
                <div className="register__wrapper">
                    <AuthForm></AuthForm>
                    <RegisterForm></RegisterForm>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;
