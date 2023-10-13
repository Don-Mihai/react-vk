import { useEffect, useState } from 'react';
import './EditProfile.scss';
import Header, { User } from '../../components/Header';
import axios from 'axios';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Avatar, TextField } from '@mui/material';

const EditProfile = ({}) => {
    const [user, setUser] = useState<User>();
    const [formValuesName, setFormValuesName] = useState<string>('')

    const getUser = async () => {
        const user: User = (await axios.get(`http://localhost:3001/users/${localStorage.getItem('userId')}`)).data;

        setUser(user);
        setFormValuesName(user?.name)
    };

    useEffect(() => {
        getUser();
    }, []);

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValuesName(event.target.value)

        // todo: 2) сделать универсалаьную функцию для инпутов (onChange, переделать строку в объект с данными, не забыть написть name)
    }

    const onSave = () => {
        axios.put(`http://localhost:3001/users/${user?.id}`, {
            ...user,
            name: formValuesName
        })
    }

    return (
        <div className="page-profile">
            <Header isShowSearch={true} user={user}></Header>
            <div className="page-profile__container container">
                <nav className="page-profile__nav">
                    <Button variant="text" startIcon={<CloudUploadIcon />}>
                        Upload file
                    </Button>
                    <Button variant="text" startIcon={<CloudUploadIcon />}>
                        Upload file
                    </Button>
                    <Button variant="text" startIcon={<CloudUploadIcon />}>
                        Upload file
                    </Button>
                </nav>
                <div className="page-profile__content">
                    <div className="page-profile__background">
                        <div className='page-profile__background-wrap'>
                            <img src='/028.jpg' className="page-profile__background-img" />
                        </div>
                        <div className="page-profile__background-content">
                            <Avatar sx={{height: '100px', width: '100px'}} ></Avatar>
                            <TextField onChange={onChange} value={formValuesName} variant='outlined' />
                            <TextField onChange={onChange} value={user?.lastName} variant='outlined' />
                            <Button onClick={onSave} variant='contained'>Сохранить</Button>
                        </div>
                    </div>

                    <div className="page-profile__sub-content">
                        <div className="page-profile__posts">sfdasdfasfd</div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
