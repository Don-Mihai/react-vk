import { Avatar, Menu, MenuItem } from '@mui/material';
import { IPost, IUser } from '../Header';
import './Post.scss';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';


interface Props {
    post: IPost;
}

const Post = ({ post }: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="component-post">
            <div className="component-post__header">
                <Avatar src={'uploads/' + post?.user?.imageUrl}></Avatar>
                <div className="component-post__name">
                    {post?.user?.name}
                    {post?.createTime}
                </div>
                <div onClick={handleClick}>
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
                    <MenuItem  >Удалить пост</MenuItem>
                </Menu>
            </div>
            <div className="component-post__content">{post?.text}</div>
            <div className="component-post__footer"></div>
        </div>
    );
};

export default Post;
