import './Register.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RegisterForm from '../../components/RegisterForm';
import AuthForm from '../../components/AuthForm';
import axios from 'axios';
import MessageIcon from '@mui/icons-material/Message';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import Chat from '../../modules/Chat';



const Register = () => {
	const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    
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
			<IconButton onClick={handleClickOpen} color='primary'>
				<MessageIcon/>
			</IconButton>
			<Chat open={open} handleClose={handleClose} />
            <Footer></Footer>
        </div>
    );
};

export default Register;
