import { useEffect, useRef, useState } from 'react';
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
import {DropzoneArea, DropzoneDialog} from 'material-ui-dropzone'
import { Menu } from '../../components/Menu/index';


const Profile = ({}) => {
    const [formValues, setFormValues] = useState<any>({});
    const [user, setUser] = useState<IUser>();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isShow, setIsShow] = useState<boolean>(false);
    const [isFocusCreate, setIsFocusCreate] = useState(false);
    const createPostRef = useRef(null);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // Обработчик клика вне календаря
    const handleClickOutside = (e: any) => {
        //@ts-ignore
        if (createPostRef?.current && !createPostRef?.current?.contains(e.target)) {
            setIsFocusCreate(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        });
      };

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

    const onCreateClick = () => {
        setIsFocusCreate(true)
    }

    const createPost = async () => {
        await axios.post("http://localhost:3001/posts", {...formValues, createTime: new Date(), user});
        setFormValues({ text: "" });
        getPosts();
      };
      

    return (
        <div className="page-profile">
            <Header isShowSearch={true} user={user}></Header>
            <div className="page-profile__container container">
                <Menu></Menu>
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
                            <div className='create-post' ref={createPostRef} onClick={onCreateClick}>
                                <TextField
                                    onChange={onChange}
                                    value={formValues.text}
                                    name="text"
                                    label="Текст для поста"
                                    multiline={isFocusCreate}
                                    rows={2}
                                    variant="outlined"
                                />
                                {isFocusCreate && (
                                    <Button onClick={createPost} variant="contained">
                                        Опубликовать
                                    </Button>
                                )}
                            </div>

                            {posts.filter((post) => user?.id === post.user.id).sort((a, b) => new Date(b?.createTime).getTime() - new Date(a?.createTime).getTime() ).map(post => {
                                return <Post key={post?.id} post={post} onUpdate={getPosts} />;
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
