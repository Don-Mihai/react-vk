import { useEffect, useState } from "react";
import Header, { IUser } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { initialUser } from "../EditProfile";
import axios from "axios";
import './VideoGallery.scss'
import { Button, TextField } from "@mui/material";

const VideoGallery = () => {
    const [user, setUser] = useState<IUser>(initialUser)
    const [addedUrl, setAddedUrl] = useState<string>('')

    useEffect(() => {
        getUser()
    })

    const getUser = async () => {
        const user = (await axios.get(`http://localhost:3001/users/${localStorage.getItem('userId')}`)).data

        setUser(user)
    }

    const onChange = (event: any) => {
        setAddedUrl(event?.target.value)
    }

    const addVideo = async () => {
        await axios.put(`http://localhost:3001/users/${user.id}`, {
            ...user,
            videoGallery: Boolean(user.videoGallery?.length) ? [...user.videoGallery as string[], addedUrl] : [addedUrl]
        })

        getUser()

        setAddedUrl('')
    }

    return (
        <div className="page-edit">
            <Header isShowSearch={true} user={user}></Header>
            <div className="page-edit__container container">
                <Menu></Menu>
                <div className="page-gallery__content">
                    <h2 className="page-gallery__title">Мои видео</h2>
                    <div className="page-gallery__video-input">
                        <TextField onChange={onChange} value={addedUrl}  label='url видео'></TextField>
                        <Button onClick={addVideo} variant="contained">Добавить видео</Button>
                    </div>
                    

                    <div className="videos">
                        {user?.videoGallery?.map(video => {
                            return (
                                <iframe
                                    className="video"
                                    src={video}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;
