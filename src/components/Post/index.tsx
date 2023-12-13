import { Avatar, Menu, MenuItem } from '@mui/material';
import { IPost, IUser } from '../Header';
import './Post.scss';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';


interface Props {
    post: IPost;
    onUpdate: () => void;
}

const Post = ({ post, onUpdate }: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = async() => {
        await axios.delete(`http://localhost:3001/posts/${post.id}`)
        onUpdate()
    }
    
    return (
        <div className="component-post">
            <div className="component-post__header">
                <Avatar src={'uploads/' + post?.user?.avatarImageUrl}></Avatar>
                <div className="component-post__name">
                    <span>{post?.user?.name}</span>
                    <span>{new Date(post?.createTime).toLocaleString()}</span>
                </div>
                <div className='component-post__settings' onClick={handleClick}>
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
                    <MenuItem onClick={handleDelete} >Удалить пост</MenuItem>
                </Menu>
            </div>
            <div className="component-post__content">{post?.text}</div>
            <div className="component-post__footer"></div>
        </div>
    );
};

export default Post;
