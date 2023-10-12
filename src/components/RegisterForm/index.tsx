import { useState } from 'react';
import './RegisterForm.scss';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

const RegisterForm = ({}) => {
    const [inputText, setInputText] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);

    const onShowModal = () => {
        setShowModal(true);
    };

    const onRegister = () => {
        axios.post('http://localhost:3001/users', {
            name: inputText,
        });

        setShowModal(false)
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputText(e.target.value);
    };

    const onClearInput = () => {
        setInputText('');
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
                        value={inputText}
                        label="Имя"
                        variant="filled"
                        InputProps={{
                            endAdornment: <ClearIcon onClick={onClearInput} sx={{cursor: 'pointer'}} />,
                        }}
                    />
                    <div className="component-register-form__actions">
                        <Button onClick={onClose} variant="outlined">
                            Отменить
                        </Button>
                        <Button onClick={onRegister} variant="contained">
                            Регистрироваться
                        </Button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default RegisterForm;
