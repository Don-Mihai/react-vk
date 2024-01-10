import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import './Chat.scss';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
    handleClose: () => void;
    open: boolean;
}

export default function Chat({ open, handleClose }: Props) {
    const [formValues, setFormValues] = useState<any>({});
    const [users, setUsers] = useState<any[]>([]);
    const [currentRecipient, setCurrentRecipient] = useState<any>({});

    useEffect(() => {
        getUsers();
    }, []);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const onSend = async (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            const userId = localStorage.getItem('userId');
            const sender = (await axios.get(`http://localhost:3001/users/${userId}`)).data;

            const payload = {
                text: formValues.message,
                createDate: new Date(),
                sender,
                recipient: currentRecipient,
            };
            await axios.post('http://localhost:3001/messages', payload);
            setFormValues({});
        }
    };

    const getUsers = async () => {
        const users = (await axios.get('http://localhost:3001/users')).data;
        setUsers(users);
    };

    const onUserClick = (user: any) => {
        setCurrentRecipient(user);
    };

    return (
        <>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Чат
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="chat__content">
                    <div className="chat__users">
                        {users.map(user => {
                            return (
                                <div onClick={() => onUserClick(user)} className="chat__user">
                                    {user?.name}
                                </div>
                            );
                        })}
                    </div>

                    <div className="messages">
                        <h1>{currentRecipient.name}</h1>
                        <div className="message">Привет, это моё первое сообщение!</div>
                        <div className="message message--my">Мы никого не ждали, уходите отсюда!</div>
                        <TextField
                            sx={{ marginTop: 'auto' }}
                            id="input-with-icon-textfield"
                            label="Отправить сообщение"
                            onChange={onChange}
                            onKeyDown={onSend}
                            name="message"
                            value={formValues?.message || ''}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SendIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="filled"
                            fullWidth
                        />
                    </div>
                </div>
            </Dialog>
        </>
    );
}
