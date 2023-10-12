import { useEffect, useState } from 'react';
import './Profile.scss';
import Header, { User } from '../../components/Header';
import axios from 'axios';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Friends from '../../modules/Friends';

const Profile = ({}) => {
    const [user, setUser] = useState<User>();

    const getUser = async () => {
        const user: User = (await axios.get(`http://localhost:3001/users/${localStorage.getItem('userId')}`)).data;

        setUser(user);
    };

    useEffect(() => {
        getUser();
    }, []);

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
                    <div className="page-profile__background"></div>

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
