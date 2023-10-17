import { useEffect, useState } from 'react';
import './Profile.scss';
import Header, { User } from '../../components/Header';
import axios from 'axios';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Friends from '../../modules/Friends';
import { Avatar, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Profile = ({}) => {
    const [user, setUser] = useState<User>();
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate()


    const getUser = async () => {
        const user: User = (await axios.get(`http://localhost:3001/users/${localStorage.getItem('userId')}`)).data;


        setUser(user);
    };

    
    const getPosts = async () => {
        const posts: any = (await axios.get(`http://localhost:3001/posts`)).data;
        
        setPosts(posts);
    }

    useEffect(() => {
       
        // todo: 1) получить массив постов и отобразить его
        // тут получить массив постов
        getUser();
        getPosts()
    }, []);

    const onButtonEdit = () => {
        navigate('editProfile')
        // перекинуть на другую страницу
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

                            {/* todo: 3) сделать ссылку при помощи react-router-dom чтоб вела на страницу EditProfile (не забыть добавть объект в массиве ссылок) */}
                            <Button onClick={onButtonEdit} className='page-profile__action' variant='text'>Редактировать профиль</Button>
                        </div>
                    </div>

                    <div className="page-profile__sub-content">
                        <div className="page-profile__posts">
                            {posts.map((item) => {
                                return <div>{item.text}</div>
                            })} 
                            
                        </div>
                        <Friends></Friends>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
