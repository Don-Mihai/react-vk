import './Register.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RegisterForm from '../../components/RegisterForm';
import AuthForm from '../../components/AuthForm';
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

    return (
        <div className="register">
            <Header></Header>
            <div className="register__vk">
                <div className="register__content">VK for mobile devices</div>

                <div className="register__wrapper">
                    <AuthForm></AuthForm>
                    <RegisterForm></RegisterForm>
                </div>
            </div>
            <IconButton onClick={handleClickOpen} color="primary">
                <MessageIcon />
            </IconButton>
            <Chat open={open} handleClose={handleClose} />
            <Footer></Footer>
        </div>
    );
};

export default Register;
