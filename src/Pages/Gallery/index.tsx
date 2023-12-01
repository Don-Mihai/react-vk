import ImageList from '@mui/material/ImageList';
import Header, { IUser } from '../../components/Header';
import { Menu } from '../../components/Menu';
import './Gallery.scss';
import ImageListItem from '@mui/material/ImageListItem';
import { Button } from '@mui/material';
import FileDrop from '../../components/FileDrop';
import axios from 'axios';
import { initialUser } from '../EditProfile';
import { useEffect, useState } from 'react';

const Gallery = () => {
    const [user, setUser] = useState<IUser>(initialUser);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const user: IUser = (await axios.get(`http://localhost:3001/users/${localStorage.getItem('userId')}`)).data;

        setUser({...initialUser, ...user});
    };

    const sendImageGallery = (files: Blob) => {
        const formData = new FormData();
        formData.append('filedata', files)
        axios.post(`http://localhost:3003/upload-photos-gallery?userId=${user?.id}&date=${Date.now()}`, formData)
    }
    
    return (
        <div className="page-edit">
            <Header isShowSearch={true} user={user}></Header>
            <div className="page-edit__container container">
                <Menu></Menu>
                <div className="page-gallery__content">
                    <h2 className="page-gallery__title">Мои фотографии</h2>
                    <FileDrop borderRadius='none' onSendFiles={sendImageGallery} >
                        <Button variant='contained'>Загрузить фото</Button>
                    </FileDrop>
                    
                    <ImageList sx={{marginTop: '20px'}} variant="masonry" cols={4} gap={8}>
                        {user?.gallery ? user?.gallery.map((item, index) => (
                            <ImageListItem key={index}>
                                <img
                                    srcSet={`uploads/${item.galleryUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`uploads/${item.galleryUrl}?w=248&fit=crop&auto=format`}
                                    alt={item.galleryUrl + item.date}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        )) : ''}
                    </ImageList>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
