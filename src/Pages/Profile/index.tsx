import { useEffect, useState } from 'react';
import './Profile.scss';
import Header, { IPost, IUser } from '../../components/Header';
import axios from 'axios';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Friends from '../../modules/Friends';
import { Avatar, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Post from '../../components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { decrement, increment } from '../../redux/Counter';
import {DropzoneArea, DropzoneDialog} from 'material-ui-dropzone'

const Profile = ({}) => {
    const [user, setUser] = useState<IUser>();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isShow, setIsShow] = useState<boolean>(false);
    const count = useSelector((state: RootState) => state.counter.value)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getUser = async () => {
        const user: IUser = (await axios.get(`http://localhost:3001/users/${localStorage.getItem('userId')}`))?.data;

        setUser(user);
        
    };

    const getPosts = async () => {
        const posts: IPost[] = (await axios.get('http://localhost:3001/posts/')).data

        setPosts(posts)
    }


    useEffect(() => {
        getPosts()
        getUser();
    }, []);

    const onButtonEdit = () => {
        navigate('/edit')
    }

    const onAdd = () => {
        dispatch(increment()) 
    }

    const onReduce = () => {
        dispatch(decrement())
    }

    const onEnter = () => {
        setIsShow(true)
    }

    const onLeave = () => {
        setIsShow(false)
    }

    const sendImage = (files: File[]) => {
        const formData = new FormData();
        formData.append('filedata', files[0])
        
        axios.post(`http://localhost:3003/uploads?userId=${user?.id}`, formData)
    }

    // const handleSendFiles = (files: Blob) => {
        
    //     const formData = new FormData();
    //     formData.append('filedata', files as Blob);

    //     axios.post(BASE_URL + `/uploads?userId=${currentUser.id}`, formData).then(fetchData);
    // };

    return (
        <div className="page-profile">
            <Header isShowSearch={true} user={user}></Header>
            <div className="page-profile__container container">
                <nav className="page-profile__nav">
                    <div>
                        <button onClick={onAdd}>+</button>
                        {count}
                        <button onClick={onReduce}>-</button>
                    </div>
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
                        <div onDragOver={onEnter} onMouseLeave={onLeave} className="page-profile__background-wrap">
                            <img src={`uploads/${user?.imageUrl}`} className="page-profile__background-img" />
                            {isShow ? (
                                <DropzoneArea
                                    acceptedFiles={['image/*', 'video/*', 'application/*']}
                                    // onChange={sendImage}
                                    onDrop={sendImage}
                                    showFileNames
                                    dropzoneText="Arraste o arquivo aqui ou clique para selecionar"
                                    showAlerts={false}
                                    filesLimit={20}
                                />
                            ) : (
                                ''
                            )}
                        </div>

                        <div className="page-profile__background-content">
                            <Avatar className="page-profile__background-avatar" sx={{ height: '100px', width: '100px' }}></Avatar>
                            <div className="page-profile__user-wrap">
                                <h2 className="page-profile__user-title">{user?.name}</h2>
                                <h2 className="page-profile__user-title">{user?.lastName}</h2>
                            </div>

                            <Button onClick={onButtonEdit} className="page-profile__action" variant="text">
                                Редактировать профиль
                            </Button>
                        </div>
                    </div>

                    <div className="page-profile__sub-content">
                        <div className="page-profile__posts">
                            
                            {posts.map(post => {
                                return <Post key={post?.id} post={post} />;
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
