import { useEffect, useState } from 'react';
import './EditProfile.scss';
import Header, { IUser } from '../../components/Header';
import axios from 'axios';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Avatar, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { decrement, increment } from '../../redux/Counter';
import { Menu } from '../../components/Menu/index';
import FileDrop from '../../components/FileDrop';

export const initialUser: IUser = {
    id: 0,
    name: '',
    lastName: '',
    email: '',
    birthDate: '',
}

const EditProfile = ({}) => {
    const [user, setUser] = useState<IUser>(initialUser);
    const [formValues, setFormValues] = useState<Partial<IUser>>(initialUser)

    const dispatch = useDispatch()

    const getUser = async () => {
        const user: IUser = (await axios.get(`http://localhost:3001/users/${localStorage.getItem('userId')}`)).data;

        setUser({...initialUser, ...user});
        setFormValues({...initialUser, ...user})
    };

    useEffect(() => {
        getUser();
    }, []);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const onSave = async () => {
       await axios.put(`http://localhost:3001/users/${user?.id}`, formValues)
    //    getUser()
    }

    const sendImageAvatar = (files: Blob) => {
        const formData = new FormData();
        formData.append('filedata', files)
        
        axios.post(`http://localhost:3003/upload-avatar?userId=${user?.id}`, formData)
    }

    return (
        <div className="page-edit">
            <Header isShowSearch={true} user={user}></Header>
            <div className="page-edit__container container">
                <nav className="page-edit__nav">
                    <Menu></Menu>
                </nav>
                <div className="page-edit__content">
                    <div className="page-edit__background">
                        <div className='page-edit__background-wrap'>
                            <img src='/028.jpg' className="page-edit__background-img" />
                        </div>
                        <div className="page-edit__background-content">
                        <FileDrop onSendFiles={sendImageAvatar} >
                            <Avatar src={`uploads/${user.avatarImageUrl}`} sx={{height: '100px', width: '100px'}} ></Avatar> 
                         </FileDrop>

                            <div className="page-edit__user-wrap">
                                <h2 className="page-edit__user-title">{user?.name}</h2>
                                <h2 className="page-edit__user-title">{user?.lastName}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="page-edit__sub-content">
                        <div className='page-edit__inputs'>
                            <TextField onChange={onChange} name='name' value={formValues.name} variant='outlined' label='Имя' />
                            <TextField onChange={onChange} name='lastName' value={formValues.lastName} variant='outlined' label='Фамилия' />
                            <TextField onChange={onChange} name='email' value={formValues.email} variant='outlined' label='Емейл' />
                            <TextField onChange={onChange} name='birthDate' value={formValues.birthDate} variant='outlined' label='Дата рождения' />
                            <Button onClick={onSave} variant='contained'>Сохранить</Button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
