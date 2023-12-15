import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { IPost, IUser } from '../Header';
import './Post.scss';
import { useEffect, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
    post: IPost;
    onUpdate: () => void;
}

const Post = ({ post, onUpdate }: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isLiked, setIsLiked] = useState<any>(null)
    const [likesQuantity, setLikesQuantity] = useState<any>(0)

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        fetchLike()
    }, [])

    const fetchLike = async() => {
       const likes: any[] = (await axios.get(`http://localhost:3001/likes?idPost=${post.id}`)).data

      const myLike =  likes.find((like) => like.idUser === localStorage.getItem('userId')) 

       if(myLike) {
        setIsLiked(myLike)
       } else {
        setIsLiked(null)
       }

       setLikesQuantity(likes.length)
       
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = async() => {
        await axios.delete(`http://localhost:3001/posts/${post.id}`)
        onUpdate()
    }

    const handleLike = async() => {
        
        const like = (await axios.post(`http://localhost:3001/likes`, {idPost: post.id, idUser: localStorage.getItem('userId') })).data
        setIsLiked(like)
    }

    const handleUnLike = async () => {
        
        await axios.delete(`http://localhost:3001/likes/${isLiked?.id}`)

        setIsLiked(null)
    }
    
    return (
        <div className="component-post">
            <div className="component-post__header">
                <Avatar src={'uploads/' + post?.user?.avatarImageUrl}></Avatar>
                <div className="component-post__name">
                    <span>{post?.user?.name}</span>
                    <span>{new Date(post?.createTime).toLocaleString()}</span>
                </div>
                <div className="component-post__settings" onClick={handleClick}>
                    <MoreVertIcon />
                </div>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleDelete}>Удалить пост</MenuItem>
                </Menu>
            </div>
            <div className="component-post__content">{post?.text}</div>
            <div className="component-post__footer">
                {isLiked !== null ? (
                    <IconButton onClick={handleUnLike} >
                        <FavoriteIcon color='primary' />
                    </IconButton>
                ) : (
                    <IconButton onClick={handleLike}>
                        <FavoriteBorderIcon />
                    </IconButton>
                )}
                {likesQuantity}
            </div>
        </div>
    );
};

export default Post;
