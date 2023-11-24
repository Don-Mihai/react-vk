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

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
  ];