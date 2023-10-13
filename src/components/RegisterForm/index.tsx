import { useState } from 'react';
import './RegisterForm.scss';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { User } from '../Header';
import { Link } from 'react-router-dom';

const RegisterForm = ({}) => {
    const [formValues, setFormValues] = useState<Partial<User>>({})
    const [showModal, setShowModal] = useState<boolean>(false);

    const onShowModal = () => {
        setShowModal(true);
    };

    const onRegister = () => {
        axios.post('http://localhost:3001/users', {
            name: formValues.name,
            lastName: formValues.lastName,
        });

        setShowModal(false)
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };


    const onClearInput = (key: string) => {
        setFormValues({...formValues, [key]: ''})
    };

    const onClose = () => {
        setShowModal(false);
    };

    return (
        <div className="component-register-form">
            <Button onClick={onShowModal} variant="contained" color="success">
                Регистрация
            </Button>

            <Dialog open={showModal}>
                <div className="component-register-form__modal">
                    <h2 className="component-register-form__title">Регистрация</h2>

                    <TextField
                        onChange={onChange}
                        value={formValues.name}
                        name='name'
                        label="Имя"
                        variant="filled"
                        InputProps={{
                            endAdornment: <ClearIcon onClick={() => onClearInput('name')} sx={{cursor: 'pointer'}} />,
                        }}
                    />
                    <TextField
                        onChange={onChange}
                        value={formValues.lastName}
                        name='lastName'
                        label="Фамилия"
                        variant="filled"
                        InputProps={{
                            endAdornment: <ClearIcon onClick={() => onClearInput('lastName')} sx={{cursor: 'pointer'}} />,
                        }}
                    />
                    <div className="component-register-form__actions">
                        <Button onClick={onClose} variant="outlined">
                            Отменить
                        </Button>
                        <Button onClick={onRegister} variant="contained">
                            <Link to={'profile'}>Регистрироваться</Link>
                        </Button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default RegisterForm;
