import { useEffect, useState } from 'react';
import './Profile.scss';
import Header, { User } from '../../components/Header';
import axios from 'axios';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Friends from '../../modules/Friends';
import { Avatar, TextField } from '@mui/material';

const Profile = ({}) => {
    const [user, setUser] = useState<User>();
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [formValuesName, setFormValuesName] = useState<string>('')

    const getUser = async () => {
        const user: User = (await axios.get(`http://localhost:3001/users/${localStorage.getItem('userId')}`)).data;

        setUser(user);
        setFormValuesName(user?.name)
    };

    useEffect(() => {
        getUser();
    }, []);

    const onButtonEdit = () => {
        // перекинуть на другую страницу
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValuesName(event.target.value)

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
                            <h2 className='page-profile__user-title'>{user?.name}</h2>
                            <h2 className='page-profile__user-title'>{user?.lastName}</h2>

                            <Button onClick={onButtonEdit} className='page-profile__action' variant='text'>Редактировать профиль</Button>
                        </div>
                    </div>

                    <div className="page-profile__sub-content">
                        <div className="page-profile__posts">sfdasdfasfd</div>
                        <Friends></Friends>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
