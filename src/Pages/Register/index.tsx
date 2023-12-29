import './Register.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RegisterForm from '../../components/RegisterForm';
import AuthForm from '../../components/AuthForm';
import axios from 'axios';

const Register = () => {

    
	const send = () => {
		const payload = {
			name: 'Миша',
			text: 'Сколько это всё стоит?'
		}

		axios.post('http://localhost:3003/telegram', payload)

	}

    return (
        <div className="register">
            <Header></Header>
            <div className="register__vk">
                <div className="register__content">VK for mobile devices</div>

                <button onClick={send}>Отправить запрос</button>

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
